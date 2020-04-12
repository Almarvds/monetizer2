import React, {
  Component
} from 'react'

import Upload from "../Upload.js"


class MonetizerCard extends Component{

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
          <Upload/>
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
              <a className="nav-link disabled" href="#">Upload</a>
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
          <Upload/>
        </div>
      </div>
    )
  }

  render() {
    var phase = this.renderUpload();
      return (
        <div className="card text-center mx-auto" style = {{width:"70vw", borderRadius: "10px",
          background: "#ffffff",
          boxShadow:  "11px 11px 19px rgba(0,0,0,0.2), -11px -11px 19px rgba(255,255,255,0.1)"}}>
          <div> {phase} </div>
        </div>
      )
    }
}

export default MonetizerCard;
