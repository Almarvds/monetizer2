import React from 'react'
import Router from 'next/router'
import { Row, Col, Form, Input, Label, Button } from 'reactstrap'
import Cookies from 'universal-cookie'
import { NextAuth } from 'next-auth/client'
import Fade from 'react-reveal/Fade';

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      session: this.props.session,
      providers: this.props.providers,
      submitting: false,
      emailUsed: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)

  }

  handleEmailChange(event) {
    this.setState({
      emailUsed: false,
      email: event.target.value.trim()
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    if (!this.state.email) return

    this.setState({
      submitting: true
    })

    var emailNew=true;
    const emailInput = {
      emailInput_: this.state.email
    }
    var emailURL = `${process.env.server_url}signUpEmail`
    fetch(emailURL,{
      method: 'POST',
      body:JSON.stringify(emailInput),
      headers: {
        'content-type': 'application/json'
      }
    }).then((res) => res.text())
    .then((text) => {
      var emailNew = JSON.parse(text)
      var newAddress = emailNew.newAddress
      if(newAddress){
        // Save current URL so user is redirected back here after signing in
        const cookies = new Cookies()
        cookies.set('redirect_url', window.location.pathname, { path: '/' })
        Router.push(`/auth/check-email?email=${this.state.email}`)
      } else {
        this.setState({
          emailUsed: true,
          submitting: false
        })
      }
    })
  }

  render() {
    if (this.props.session.user) {
      return(<div/>)
    } else {
      return (
        <React.Fragment>
          <p className="text-center" style={{marginTop: 10, marginBottom: 30}}>{`If you don't have an account, one will be created when you sign in.`}</p>
          <Row>
            <Col xs={12} md={6}>
              <SignInButtons providers={this.props.providers}/>
            </Col>
            <Col xs={12} md={6}>
              <Form id="signin" method="post" action="/auth/email/signin" onSubmit={this.handleSubmit}>
                <Input name="_csrf" type="hidden" value={this.state.session.csrfToken}/>
                <p>
                  <Label htmlFor="email">Email address</Label><br/>
                  <Input name="email" disabled={this.state.submitting} type="text"
                  placeholder="a.v.d.stappen@example.com" id="email" className="form-control"
                  value={this.state.email} onChange={this.handleEmailChange}/>
                  <Fade bottom collapse when={this.state.emailUsed}>
                    <div className="invalid-feedback" style={{ color:'red',display: 'block', marginTop:'1vh'}}>
                      This email is already signed up
                    </div>
                  </Fade>
                </p>
                <p className="text-right">
                  <Button id="submitButton" disabled={this.state.submitting} outline color="dark" type="submit">
                    {this.state.submitting === true && <span className="icon icon-spin">🎬</span>}
                    Sign in with email
                  </Button>
                </p>
              </Form>
            </Col>
          </Row>
        </React.Fragment>
      )
    }
  }
}

export class SignInButtons extends React.Component {
  render() {
    return (
      <React.Fragment>
        {
          Object.keys(this.props.providers).map((provider, i) => {
            if (!this.props.providers[provider].signin) return null

            return (
              <p key={i}>
                <a className="btn btn-block btn-outline-secondary" href={this.props.providers[provider].signin}>
                  Sign in with {provider}
                </a>
              </p>
              )
          })
        }
      </React.Fragment>
    )
  }
}
