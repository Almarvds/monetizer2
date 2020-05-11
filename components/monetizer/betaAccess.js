import React, {
  Component
} from 'react'
import { Row, Col, Form, Input, Label, Button } from 'reactstrap'


class BetaAccess extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      key: '',
      submitting: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    this.setState({
      key: event.target.value.trim()
    })
  }

  async handleSubmit(event){
    this.props.triggerPhaseShift();
  }

  render() {
      return (
        <div>
          <div style={{height:'12vh'}}/>
          <div className = "mx-auto" style={{color:'black'}}>
            <h3> Beta sign in </h3>
            <p> You need a Beta key to access the demo. </p>
            <Form id="betaKey" method="post" onSubmit={this.handleSubmit} style={{marginTop:'10vh'}}>
              <p>
                <Label htmlFor="key">Key:</Label><br/>
                <Input name="key" disabled={this.state.submitting} type="password" maxLength='6'
                id="key" className="form-control" value={this.state.key} onChange={this.handleChange}
                style={{width:'5vw', margin: '0 auto' , textAlign: 'center' }}/>
              </p>
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
