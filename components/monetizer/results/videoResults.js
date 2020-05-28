import React, {
  Component
} from 'react'
import Fade from 'react-reveal/Fade';



class VideoResults extends Component {
  constructor(props) {
    super(props);
    console.log(props);
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
                  <h6 style={{ color:'grey', paddingTop:'1vh'}}>1/4</h6>
                  <button className="ml-auto" style={{backgroundColor:'rgba(0,0,0,0)', border:'none'}}>
                        <img src="/static/play - Copy.png" width='20vw'/>
                  </button>
                </div>
            </div>
            <div className="col-md-auto text-center" style={{ marginLeft:'3vw', width:'42%', color:'black' }}>
            </div>
          </div>
        </Fade>
      );
  }
}


export default VideoResults
