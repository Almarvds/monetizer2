import React, {
  Component
} from 'react'
import MainResults from './MainResults.js'
import VideoResults from './VideoResults.js'
import AudioResults from './AudioResults.js'


class Results extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      renderTab: <VideoResults/>
    };
  }

  setVideoTab = (event) => {
    document.getElementById("videoResTab").className= 'nav-link active';
    document.getElementById("audioResTab").className= 'nav-link';
    document.getElementById("overallResTab").className= 'nav-link';
    this.setState({renderTab: <VideoResults/>});
  }

  setOverallTab = (event) => {
    document.getElementById("videoResTab").className= 'nav-link';
    document.getElementById("audioResTab").className= 'nav-link';
    document.getElementById("overallResTab").className= 'nav-link active';
    this.setState({renderTab: <MainResults/>});
  }

  setAudioTab = (event) => {
    document.getElementById("videoResTab").className= 'nav-link';
    document.getElementById("audioResTab").className= 'nav-link active';
    document.getElementById("overallResTab").className= 'nav-link';
    this.setState({renderTab: <AudioResults/>});
  }

  render() {
      return (
        <div>
          <div style={{height:'2.5vh'}}/>
          <div className="card text-center mx-auto shadow bg-white rounded" style={{width:'90%'}}>
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" id='overallResTab' href="#" onClick = {this.setOverallTab}>Overall results</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id='videoResTab' onClick = {this.setVideoTab}>Video results</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id='audioResTab' onClick = {this.setAudioTab}>Audio results</a>
              </li>
            </ul>
          </div>
            <div className="card-body">
              {this.state.renderTab}
            </div>
        </div>
          <div style={{height:'10vh'}}/>
        </div>
      );
  }
}




export default Results
