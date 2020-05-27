import React, {
  Component
} from 'react'
import { Container, Row, Col, Button, ListGroup, ListGroupItem } from 'reactstrap'


class Results extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
      return (
        <div>
          <div style={{height:'20vh'}}/>
          <Row style={{backgroundColor:'green',height:'4vh'}}>
            <Col style={{backgroundColor:'blue',width:'5vw'}}></Col>
            <Col style={{backgroundColor:'red',width:'5vw'}}></Col>
          </Row>
          <div style={{height:'30vh'}}/>
        </div>
      );
  }
}


export default Results
