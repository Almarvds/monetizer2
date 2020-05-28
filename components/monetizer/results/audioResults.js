import React, {
  Component
} from 'react'
import Fade from 'react-reveal/Fade';



class AudioResults extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
      return (
        <Fade duration={1000}>
          <div style={{widht:'20vh',height:'20vh',backgroundColor:'blue'}}>
          </div>
        </Fade>
      );
  }
}


export default AudioResults
