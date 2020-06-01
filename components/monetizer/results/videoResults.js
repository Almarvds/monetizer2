import React, {
  Component
} from 'react'
import Fade from 'react-reveal/Fade';



class VideoResults extends Component {
  constructor(props) {
    super(props);
  }



  render() {
      return (
        <Fade duration={1000}>
          <div className='row'>
            <div className='col-md-auto text-left' style={{ marginLeft:'3vw'}}>
                <h6 style={{ color:'black', marginLeft:'0.5vw'}}>Frame by Frame</h6>
                <div className="jumbotron jumbotron-fluid" style={{ width:'25vw',
                height:'30vh', background: 'url(/static/thumbnail-test.jpg)', backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat', marginBottom:'-7vh'}}/>
                <div className="container row justify-content-between"
                style={{width:'100%', margin:'0', marginTop:'10%',padding:'0'}}>
                  <button className="mr-auto" style={{backgroundColor:'rgba(0,0,0,0)', border:'none', transform: 'scaleX(-1)'}}>
                        <Fade duration={1000}>
                        <img src="/static/play - Copy.png" width='20vw'/>
                        </Fade>
                  </button>
                  <h6 style={{ color:'grey', paddingTop:'1vh'}}>0/0</h6>
                  <button className="ml-auto" style={{backgroundColor:'rgba(0,0,0,0)', border:'none'}}>
                        <img src="/static/play - Copy.png" width='20vw'/>
                  </button>
                </div>
            </div>
            <div className="col-md-auto text-center" style={{ marginLeft:'3vw', width:'42%', color:'black' }}>
              <div style={{height:'3vh'}}/>
              <h6 style={{marginLeft:'0.5vw'}}>These frames are
                <span style={{color: "#39b54a", fontWeight:'bold'}}> 100% </span> advertiser friendly
              </h6>
              <div className="col-md-auto progress mx-auto" style={{ marginTop:'2vh', marginBottom:'2vh', padding:'0'}}>
                <div className="progress-bar" role="progressbar" style={{backgroundColor:'#57B751', width: `100%`,
                ariaValuenow:`100`, ariaValuemin:"0", ariaValuemax:"100"}}>100%</div>
              </div>
              <div className="text-center" style={{border:'solid 1px', height:'19vh'}}>
                <p className='resultText' style={{marginTop:'2vh'}}> There are no frames with potential flags in this video.</p>
              </div>
            </div>
          </div>
        </Fade>
      );
  }
}


export default VideoResults
