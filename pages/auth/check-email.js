import React from 'react'
import Router from 'next/router'
import Page from '../../components/page'
import Layout from '../../components/layout'
import { NextAuth } from 'next-auth/client'

export default class extends Page {

  static async getInitialProps({req, res, query}) {
    let props = await super.getInitialProps({req})
    props.session = await NextAuth.init({force: true, req: req})
    // If signed in already, instead of displaying message send to callback page
    // which should redirect them to whatever page it normally sends clients to
    if (props.session.user) {
      if (req) {
        res.redirect('/auth/callback')
      } else {
        Router.push('/auth/callback')
      }
    }

    props.email = query.email

    return props
  }

  render() {
    return (
      <div style={{backgroundColor: 'rgba(73,155,234,1)',
      background: 'radial-gradient(ellipse at center, #009E45 0%, #00b74f 100%)'}}>
      <Layout {...this.props} navmenu={false} signinBtn={false}>
        <div className="text-center pt-5 pb-5" style={{height:'80vh'}}>
          <div style={{height:'15vh'}}/>
          <h1 className="display-4" style={{marginBottom:'2vh'}}>Check your email</h1>
          <p className="lead">
            { (this.props.email) ? <span className="font-weight-bold">{this.props.email}</span> : <span>your inbox</span> }.
          </p>
          <p>
            (This could take a while, if you did not get an automated message try checking your spam folder)
          </p>
          <p className="lead">
            You have been added to the beta waiting list!
          </p>
          <p className="lead">
            When the time is right you will get an activated account link. 🐧
          </p>
        </div>
      </Layout>
      </div>
    )
  }
}
