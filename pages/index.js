import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'
import Page from '../components/page'
import Layout from '../components/layout'
import Fade from 'react-reveal/Fade';

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <Jumbotron className="text-light rounded-0 noMargin" style={{
          backgroundColor: 'rgba(73,155,234,1)',
          background: 'radial-gradient(ellipse at center, #009E45 0%, #00b74f 100%)',
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)',
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
                <a href="/demo/monetizer"
                  className="btn btn-outline-light btn-lg" style={{marginTop:"3em", marginBottom:"2em", marginRight:"1em"}}>
                  Try the Demo
                </a>
                <a href="/demo/monetizer"
                  className="btn btn-outline-light btn-lg" style={{marginTop:"3em", marginBottom:"2em"}}>
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
          <Container className = 'whiteOnBlack' style= {{paddingTop:'35vh'}}>
            <Row>
              <Col>
                <Fade left duration={2000} distance={'8vh'}>
                  <Col>
                  <img src='/static/logo.png' style={{height: '40vh',width:'40vh', marginBottom:'5vh'}}/>
                  <h5><span><img src='/static/numbers-01.png' style={{height: '5vh',width:'5vh', marginRight:'0.8vw'}}/>
                  </span>Upload your video to Moneble</h5>
                  <p>Here comes the text underneath. There is a bunch of text there, like a ton. Describing the service process.</p>                  </Col>
                </Fade>
              </Col>
              <Col>
                <Fade top duration={2000} distance={'8vh'} delay={2000}>
                  <Col>
                    <img src='/static/flags.svg' style={{marginTop:'-10vh',height: '40vh',width:'40vh', marginBottom:'5vh'}}/>
                    <h5><span><img src='/static/numbers-02.png' style={{height: '5vh',width:'5vh', marginRight:'0.8vw'}}/>
                    </span>Check for potential flags</h5>
                    <p>Moneble checks your content for potential flags, meaning
                    it will highlight anything that could cause it to be deemed as advertiser unfriendly.</p>
                  </Col>
                </Fade>
              </Col>
              <Col>
                <Fade right duration={2000} distance={'15vh'} delay={4000}>
                  <Col>
                    <img src='/static/YouTube_monetization.png' style={{height: '40vh',width:'40vh', marginBottom:'5vh'}}/>
                    <h5><span><img src='/static/numbers-03.png' style={{height: '5vh',width:'5vh', marginRight:'0.8vw'}}/>
                    </span>Guarantee your paycheck</h5>
                    <p>Secure your income by making changes based on your results, or use them to challenge the decision making from the platform.
                       </p>
                    <div style={{height:'50vh'}}/>
                  </Col>
                </Fade>
              </Col>
            </Row>
          </Container>
        <Jumbotron className="text-light rounded-0 noMargin" style={{
          backgroundColor: 'rgba(73,155,234,1)',
          background: '#000000',
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)',
        }}>
          <h2 className="text-center display-4 mt-5 mb-2">Sign up</h2>
        </Jumbotron>
      </Layout>
    )
  }
}
