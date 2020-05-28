import React, {
  Component
} from 'react'

import Upload from "./upload.js"
import Analyze from "./analyze.js"
import BetaAccess from "./betaAccess.js"
import Results from "./results/results.js"
import { Container, Row, Col } from 'reactstrap'


class MonetizerCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      renderPhase: this.renderResults()
    };
    this.setAnalyzePhase = this.setAnalyzePhase.bind(this);
    this.setUploadPhase = this.setUploadPhase.bind(this);
    this.setResultsPhase = this.setResultsPhase.bind(this);
    this.setFinishedPhase = this.setFinishedPhase.bind(this);
  }

  setAnalyzePhase = (event) => {
      console.log('set phase to analysis');
      document.getElementById("monebleProgress").src = '/static/Webcoin2-02 - Copy.svg';
      this.setState({renderPhase: this.renderAnalyze()});
  }

  setUploadPhase = (event) => {
      console.log('set phase to upload');
      document.getElementById("monebleProgress").src = '/static/Webcoin2-01 - Copy.svg';
      this.setState({renderPhase: this.renderUpload()});
  }

  setResultsPhase = (event) => {
    console.log('set phase to upload');
    document.getElementById("monebleProgress").src = '/static/Webcoin2-03 - Copy.svg';
    this.setState({renderPhase: this.renderResults()});
  }

  setFinishedPhase = (event) => {
      console.log('set phase to analysis');
      document.getElementById("monebleProgress").src = '/static/Webcoin2-04 - Copy.svg';
      this.setState({renderPhase: this.renderFinished()});
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
        <div className="card-body">
          <BetaAccess triggerPhaseShift={this.setUploadPhase}/>
        </div>
      </div>
    )
  }

  renderUpload(){
    return(
      <div>
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
        <div className="card-body">
          <Analyze/>
          <button className = "btn btn-dark" //TODO: remove this skip button
          onClick = {
            this.setResultsPhase
          } >
          Skip <
          /button>
          <button className = "btn btn-dark" //TODO: remove this skip button
          onClick = {
            this.setUploadPhase
          } >
          Back <
          /button>
        </div>
      </div>
    )
  }

  renderResults(){
    return(
      <div>
        <div className="card-body">
          <Results/>
        </div>
        <button className = "btn btn-dark" //TODO: remove this skip button
        onClick = {
          this.setFinishedPhase
        } >
        Skip <
        /button>
        <button className = "btn btn-dark" //TODO: remove this skip button
        onClick = {
          this.setAnalyzePhase
        } >
        Back <
        /button>
      </div>
    )
  }

  renderFinished(){
    return(
      <div>
        <div className="card-body">
          <Results/>
        </div>
        <button className = "btn btn-dark" //TODO: remove this skip button
        onClick = {
          this.setResultsPhase
        } >
        Back <
        /button>
      </div>
    )
  }

  render() {
      return (
        <div className="card text-center mx-auto"style = {{width:"70vw", borderRadius: "10px",
          background: "#ffffff",
          }}>
          <img id='monebleProgress' className = "mx-auto card-img-top" src='/static/Webcoin2-01 - Copy.svg'
          style={{width:'65vw',height:'10vh'}} alt="Card image cap"/>
          <div> {this.state.renderPhase} </div>
        </div>
      )
    }
}

export default MonetizerCard;
