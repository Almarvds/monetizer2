import React, {
  Component
} from 'react'

class Finished extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
          <div style={{height:'20vh'}}/>
          <div className = "mx-auto" style={{width: '50vw',backgroundColor:'yellow',height:'4vh'}}/>
          <div style={{height:'10vh'}}/>
        </div>
      );
  }
}


export default Finished
