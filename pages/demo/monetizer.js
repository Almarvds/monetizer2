import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'
import { Form, Input, Label} from 'reactstrap'
import Page from '../../components/page'
import Layout from '../../components/layout'
import MonetizerCard from '../../components/monetizer/monetizerCard.js';


export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <Jumbotron className="text-light rounded-0 noMargin" style={{
          backgroundColor: 'rgba(73,155,234,1)',
          backgroundSize:'cover',
          boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)',
          height: "100vh",
          }}>
          <MonetizerCard/>
        </Jumbotron>
      </Layout>
    )
  }
}
