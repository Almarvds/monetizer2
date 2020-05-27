import React, {
  Component
} from 'react'

import Upload from "./upload.js"
import Analyze from "./analyze.js"
import BetaAccess from "./betaAccess.js"
import Results from "./results.js"

class MonetizerCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      renderPhase: this.renderResults()
    };
    this.setAnalyzePhase = this.setAnalyzePhase.bind(this);
    this.setUploadPhase = this.setUploadPhase.bind(this);
    this.setResultsPhase = this.setResultsPhase.bind(this);
  }

  setAnalyzePhase = (event) => {
      console.log('set phase to analysis');
      this.setState({renderPhase: this.renderAnalyze()});
  }

  setUploadPhase = (event) => {
      console.log('set phase to upload');
      this.setState({renderPhase: this.renderUpload()});
  }

  setResultsPhase = (event) => {
    console.log('set phase to upload');
    this.setState({renderPhase: this.renderResults()});
  }

  connectWithBackend(){
    console.log('attempting to connect with backend');
    var backEndUrl = window.location.hostname=== 'localhost' ? `${process.env.server_url}connect` : `${process.env.server_url}connect`
    fetch(backEndUrl)
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
      });
  }

  renderLogin(){
    return(
      <div>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Login</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <BetaAccess triggerPhaseShift={this.setUploadPhase}/>
        </div>
      </div>
    )
  }

  renderUpload(){
    return(
      <div>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">Upload</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Analyze</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Results</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <Upload triggerPhaseShift={this.setAnalyzePhase}/>
          <button className = "btn btn-dark" //TODO: remove this skip button
          onClick = {
            this.setAnalyzePhase
          } >
          Skip <
          /button>
        </div>
      </div>
    )
  }

  renderAnalyze(){
    return(
      <div>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.setUploadPhase}>Upload</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Analyze</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Results</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <Analyze/>
          <button className = "btn btn-dark" //TODO: remove this skip button
          onClick = {
            this.setResultsPhase
          } >
          Skip <
          /button>
        </div>
      </div>
    )
  }

  renderResults(){
    return(
      <div>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.setUploadPhase}>Upload</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.setAnalyzePhase}>Analyze</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Results</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <Results/>
        </div>
      </div>
    )
  }

  render() {
      return (
        <div className="card text-center mx-auto" style = {{width:"70vw", borderRadius: "10px",
          background: "#ffffff"
          //boxShadow:  "11px 11px 19px rgba(0,0,0,0.2), -11px -11px 19px rgba(255,255,255,0.1)"
          }}>
          <div> {this.state.renderPhase} </div>
        </div>
      )
    }
}

export default MonetizerCard;
