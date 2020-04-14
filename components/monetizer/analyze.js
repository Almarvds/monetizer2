import React, {
  Component
} from 'react'

class Analyze extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
      return (
        <div>
          <div style={{height:'20vh'}}/>
          <div className = "mx-auto" style={{width: '50vw',backgroundColor:'blue',height:'4vh'}}/>
          <div style={{height:'10vh'}}/>
        </div>
      );
  }
}


export default Analyze
