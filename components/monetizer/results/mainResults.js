import React, {
  Component
} from 'react'
import Fade from 'react-reveal/Fade';


class MainResults extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
      return (
        <Fade duration={1000}>
          <div className='row'>
            <div className='col-md-auto text-left' style={{ marginLeft:'3vw'}}>
                <h6 style={{ color:'black', marginLeft:'0.5vw'}}>Your upload</h6>
                <div className="jumbotron jumbotron-fluid" style={{ width:'25vw',
                height:'30vh', background: 'url(/static/thumbnail-test.jpg)', backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat', marginBottom:'-1vh'}}>
                  <div className="container row justify-content-between"
                  style={{width:'100%', margin:'0', marginTop:'26%',padding:'0'}}>
                    <div className="ml-auto" style={{backgroundColor:'rgba(0,0,0,0.7)', paddingLeft:'1vw',paddingRight:'1vw', paddingTop:'0.2vw'}}>
                      <h6 style={{ color:'white'}}>00:51</h6>
                    </div>
                  </div>
                </div>
                <div>
                  <h6 style={{ color:'grey'}}>Justsome_upload.mp4</h6>
                </div>
            </div>
            <div className="col-md-auto text-center" style={{ marginLeft:'3vw', width:'42%', color:'black' }}>
              <div style={{height:'3vh'}}/>
              <h6 style={{marginLeft:'0.5vw'}}>This video is
                <span style={{color: "#39b54a", fontWeight:'bold'}}> safe!</span>
              </h6>
              <div className="col-md-auto progress mx-auto" style={{ marginTop:'2vh', marginBottom:'2vh', padding:'0'}}>
                <div className="progress-bar bg-success" role="progressbar" style={{width: `94%`,
                ariaValuenow:`100`, ariaValuemin:"0", ariaValuemax:"100"}}>94%</div>
              </div>
              <div className="text-left">
                <p className='resultText'> * The visuals in this video are compliant
                with all safety parameters and are very advertiser friendly.</p>
                <p className='resultText'> * The audio is compliant with almost all
                safety parameters and is mostly advertiser friendly.</p>
              </div>
            </div>
          </div>
        </Fade>
      );
  }
}


export default MainResults
