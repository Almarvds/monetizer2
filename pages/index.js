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
          background: 'radial-gradient(ellipse at center, #009E45 0%, #00b74f 100%)',
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)',
          }}>
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
                className="btn btn-outline-light btn-lg" style={{marginTop:"1em", marginBottom:"2em", marginRight:"1em"}}>
                Try the Demo
              </a>
              <a href="/demo/monetizer"
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
        <Container>
          <h2 className="text-center display-4 mt-5 mb-2">Use case</h2>
          <p>
            <a href="https://github.com/zeit/next.js">Next.js</a> from <a href="https://zeit.co">Zeit</a> makes creating
            websites with React easy.
          </p>
          <p>
            This project integrates several concepts to show how you can use them together in a Next.js project.
          </p>
          <p>
            It also serves as template for creating new projects.
          </p>
          <pre>
{`git clone https://github.com/iaincollins/nextjs-starter.git
npm install
npm run dev`}
          </pre>
          <p>
            The simplest way to deploy projects to the cloud is with with 'now', which is from Zeit, the creators of Next.js framework.
          </p>
            <pre>
{`npm install -g now
now`}
            </pre>
          <p>
            For more information on how to build and deploy see <a href="https://github.com/iaincollins/nextjs-starter/blob/master/README.md">README.md</a>
          </p>
          <p>
            For tips on configuring authentication see <a href="https://github.com/iaincollins/nextjs-starter/blob/master/AUTHENTICATION.md">AUTHENTICATION.md</a>
          </p>
          <p>
            The next.js repository has a <a href="https://github.com/zeit/next.js/tree/master/examples">great selection of examples</a> which are an excellent reference.
          </p>
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
