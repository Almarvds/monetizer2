import React, {
  Component
} from 'react'
import Fade from 'react-reveal/Fade';



class AudioResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeStamp: '00:20',
      flagCause: 'light profanity',
      sentence: 'this game is fucking awesome'
    };
    console.log(props);
  }

  render() {
      return (
        <Fade duration={1000}>
          <div style={{height:'3vh'}}/>
          <h6 style={{marginLeft:'0.5vw', marginBottom:'3vh', color:'black'}}>Your audio is
            <span style={{color: "#39b54a", fontWeight:'bold'}}> 88% </span> advertiser friendly
          </h6>
          <div className="col-md-auto progress mx-auto" style={{ marginTop:'2vh', marginBottom:'1vh', padding:'0'}}>
            <div className="progress-bar" role="progressbar" style={{backgroundColor:'#57B751',width: `33%`,
            ariaValuenow:`100`, ariaValuemin:"0", ariaValuemax:"100"}}></div>
            <button className="progress-bar bg-warning" role="progressbar" style={{width: `2%`,
            ariaValuenow:`100`, ariaValuemin:"0", ariaValuemax:"100"}}></button>
            <div className="progress-bar" role="progressbar" style={{backgroundColor:'#57B751', width: `33%`,
            ariaValuenow:`100`, ariaValuemin:"0", ariaValuemax:"100"}}></div>
            <button className="progress-bar bg-warning" role="progressbar" style={{width: `5%`,
            ariaValuenow:`100`, ariaValuemin:"0", ariaValuemax:"100"}}></button>
            <div className="progress-bar" role="progressbar" style={{backgroundColor:'#57B751', width: `27%`,
            ariaValuenow:`100`, ariaValuemin:"0", ariaValuemax:"100"}}></div>
          </div>
          <div className="row" style={{height:'3vh', color:'grey', marginBottom:'2vh'}}>
            <div className="mr-auto" style={{marginLeft:'1vw'}}><h6>00:00</h6></div>
            <div className="ml-auto" style={{marginRight:'1vw'}}><h6>00:51</h6></div>
          </div>
          <div className="text-center" style={{color: 'black',border:'solid 1px', height:'19vh'}}>
            <h6 className='resultText' style={{marginTop:'2vh'}}> potential flag at {this.state.timeStamp}</h6>
            <p className='resultText' style={{marginTop:'1vh'}}> Type of flag: {this.state.flagCause}</p>
            <p className='resultText'> "{this.state.sentence}"</p>
          </div>
        </Fade>
      );
  }
}


export default AudioResults
