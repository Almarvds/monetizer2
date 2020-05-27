import React, {
  Component
} from 'react'
import Fade from 'react-reveal/Fade';
import { Row, Col, Form, Input, Label, Button } from 'reactstrap'


class BetaAccess extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      key: '',
      submitting: false,
      invalid: 4,
      changeHandled: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      changeHandled:true,
      key: event.target.value.trim()
    })
  }

  async handleSubmit(event){
    var tokenVerifyUrl = window.location.hostname === 'localhost' ? `${process.env.server_url}verifyBetaToken` : `${process.env.server_url}verifyBetaToken`
    console.log(tokenVerifyUrl)
    const token = {
      token_: this.state.key
    }
    fetch(tokenVerifyUrl,{
      method: 'POST',
      body:JSON.stringify(token),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((res) => res.text())
    .then((text) => {
      var response = JSON.parse(text)
      console.log(response);
      console.log(response.access);
      if(response.access === true){
        this.props.triggerPhaseShift()
      } else {
        this.setState({
          invalid: this.state.invalid-1
        })
      }
      this.setState({
        changeHandled: false
      })
    })
  }

  render() {
      return (
        <div>
          <div style={{height:'5vh'}}/>
          <div className = "mx-auto" style={{color:'black'}}>
            <h3> Beta sign in </h3>
            <p> You need a Beta key to access the demo. </p>
            <Form id="betaKey" method="post" onSubmit={this.handleSubmit} style={{marginTop:'7vh', marginBottom:'8vh'}}>
              <p>
                <Label htmlFor="key">Key:</Label><br/>
                <Input name="key" disabled={this.state.submitting} type="password" maxLength='6'
                id="key" className="form-control" value={this.state.key} onChange={this.handleChange}
                style={{width:'5vw', margin: '0 auto' , textAlign: 'center' }}/>
              </p>
              <Fade bottom collapse when={this.state.invalid<4 && !this.state.changeHandled}>
                <div className="invalid-feedback" style={{ display: 'block', marginTop:'1vh', marginBottom:'2vh'}}>
                  Sorry, this key is incorrect, you are allowed {this.state.invalid} more attempts
                </div>
              </Fade>
              <p className="text-center">
                <Button id="keySubmitButton" disabled={this.state.submitting} outline color="dark"
                onClick= {this.handleSubmit}>
                  {this.state.submitting === true && <span className="icon icon-spin ion-md-refresh mr-2"/>}
                  Submit key
                </Button>
              </p>
            </Form>
          </div>
        </div>
      );
  }
}


export default BetaAccess
