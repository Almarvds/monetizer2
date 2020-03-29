import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'
import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <Jumbotron className="text-light rounded-0 noMargin" style={{
          backgroundColor: 'rgba(73,155,234,1)',
          background: 'radial-gradient(ellipse at center, #FFD566 0%, #FF8B23 100%)',
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)',
          }}>
          <Container className="mt-2 mb-2">
            <h1 className="display-2 mb-3" style={{fontWeight: 300}}>
              <span style={{fontWeight: 600}}>
                <br className="v-block d-sm-none"/>
                About
              </span>
              <br className="v-block d-lg-none"/> page
            </h1>
            <p className="lead mb-5">
              Info on tool and on me
            </p>
            <p className="text-right">
              <a href="https://github.com/iaincollins/nextjs-starter"
                className="btn btn-outline-light btn-lg" style={{marginTop:"1em", marginBottom:"2em", marginRight:"1em"}}>
                Try the Demo
              </a>
              <a href="https://github.com/iaincollins/nextjs-starter"
                className="btn btn-outline-light btn-lg" style={{marginTop:"1em", marginBottom:"2em"}}>
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
        </Jumbotron>
      </Layout>
    )
  }
}
