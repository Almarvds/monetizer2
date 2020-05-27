import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem, Form, Input, Label } from 'reactstrap'
import Page from '../components/page'
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade';
import Cookies from 'universal-cookie'
import Router from 'next/router'
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;
console.log(process.env.server_url);

export default class extends Page {

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
    console.log('email state: ' + this.state.email)

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
      console.log(newAddress);
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
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <Jumbotron className="text-light rounded-0 noMargin" style={{
          //background: '#57B751',
          background: 'url(/static/logo.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          boxShadow: 'inset 0px -100px 300px 250px rgba(25,33,25,1)',
          paddingBottom: '20vh'
        }}>
          <Fade top duration={2000} distance={'8vh'}>
            <Container className="mt-2 mb-2">
                <h1 className="display-2 mb-3" style={{fontWeight: 300}}>
                  <span style={{fontWeight: 600}}>
                    <br className="v-block d-sm-none"/>
                    Monetize
                  </span>
                  <br className="v-block d-lg-none"/> Your videos
                </h1>
              <p className="lead mb-5">
                A tool to help creators monetize their work
              </p>
              <p className="text-right">
                <a href= '/demo/monetizer' id= 'demoButton'
                  className="btn btn-outline-light btn-lg" style={{marginTop:"3em", marginBottom:"2em", marginRight:"1em"}}>
                  Try the Demo!
                </a>
                <a className="btn btn-outline-light btn-lg" id = "LandButton" style={{marginTop:"3em", marginBottom:"2em"}}
                onClick={scrollDown}>
                Sign up for the Beta
                </a>
              </p>
              <style jsx>{`
                .display-2  {
                  text-shadow: 0 5px 10px rgba(0,0,0,0.3);
                  color: rgba(255,255,255,0.9);
                  margin-top: 1.5em;
                  margin-bottom: 3em;
                }
                .lead {
                  font-size: 3em;
                  opacity: 0.7;
                }
                @media (max-width: 767px) {
                  .display-2 {
                    font-size: 3em;
                    margin-bottom: 1em;
                  }
                  .lead {
                    font-size: 1.5em;
                  }
                }
              `}</style>
            </Container>
          </Fade>
        </Jumbotron>
        <Container className = '.container-fluid whiteOnBlack' style= {{paddingTop:'35vh'}}>
          <Row style = {{paddingBottom:'20vh'}}>
            <Col className = 'text-center'>
              <h1>A simple 3 step approach to monetization.</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Fade left duration={2000} distance={'8vh'}>
                <Col>
                <img src='/static/logo.png' style={{height: '40vh',width:'40vh', marginBottom:'5vh'}}/>
                <h5><span><img src='/static/numbers-01.png' style={{height: '5vh',width:'5vh', marginRight:'0.8vw'}}/>
                </span>Upload your video to Moneble</h5>
                <p>Before uploading to your platform of choice, make an account on
                Moneble and upload the video file you're planning to publish. </p>
                </Col>
              </Fade>
            </Col>
            <Col>
              <Fade top duration={2000} distance={'8vh'} delay={1000}>
                <Col>
                  <img src='/static/flags.svg' style={{marginTop:'-10vh',height: '40vh',width:'40vh', marginBottom:'5vh'}}/>
                  <h5><span><img src='/static/numbers-02.png' style={{height: '5vh',width:'5vh', marginRight:'0.8vw'}}/>
                  </span>Check for potential flags</h5>
                  <p>Moneble checks your content for potential flags, meaning it will
                  highlight anything that could cause it to be flagged or deemed as advertiser unfriendly.</p>
                </Col>
              </Fade>
            </Col>
            <Col>
              <Fade right duration={2000} distance={'8vh'} delay={2000}>
                <Col>
                  <img src='/static/YouTube_monetization.png' style={{height: '40vh',width:'40vh', marginBottom:'5vh'}}/>
                  <h5><span><img src='/static/numbers-03.png' style={{height: '5vh',width:'5vh', marginRight:'0.8vw'}}/>
                  </span>Guarantee your paycheck</h5>
                  <p>Secure your income by making changes based on your results,
                  or use them to challenge the decision making of the platform.</p>
                  <div style={{height:'50vh'}}/>
                </Col>
              </Fade>
            </Col>
          </Row>
        </Container>
        <Element name="myScrollToElement"></Element>
        <Fade top duration={2000} distance={'8vh'}>
          <Container  className = '.container-fluid whiteOnBlack' id='subForm' style= {{marginTop:'25vh'}}>
            <div>
                <h2 className="text-center" style = {{paddingBottom: '5vh', color: '#57B751'}}> Sign up for our release or participate in the beta! </h2>
              <Form className="text-center" style={{width:'50%',
    margin:'0 auto'}}id="signin" method="post" action="/auth/email/signin" onSubmit={this.handleSubmit}>
                <p>
                  <Label htmlFor="email">Enter your Email address</Label><br/>
                  <Input name="email" style={{width:'30vw',marginLeft:'3.5vw'}} disabled={this.state.submitting} type="text" placeholder="i.love.moneble@example.com" id="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange}/>
                  <Fade bottom collapse when={this.state.emailUsed}>
                    <div className="invalid-feedback" style={{ color:'white',display: 'block', marginTop:'1vh'}}>
                      This email is already signed up
                    </div>
                  </Fade>
                </p>
                <p>
                  <Button id="submitButton" disabled={this.state.submitting} outline color="light" type="submit">
                    {this.state.submitting === true && <span className="icon icon-spin">🎬</span>}
                    Sign me up!
                  </Button>
                </p>
              </Form>
            </div>
          </Container>
        </Fade>
        <Container style= {{paddingTop:'35vh', height:'30vh'}}>
        </Container>
      </Layout>
    )
  }
}

function scrollDown(){
  scroller.scrollTo('myScrollToElement', {
    duration: 1500,
    delay: 100,
    smooth: 'easeOutQuart',
    offset: 50, // Scrolls to element + 50 pixels down the page
  })
}
