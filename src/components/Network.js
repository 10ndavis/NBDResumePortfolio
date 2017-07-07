import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Network extends Component {
  render() {
    return (
      <Row id="network">
        <Col xs={12} md={8} mdOffset={2}>
          <Col xs={12}>
            <h2>Connect with me:</h2>
          </Col>
          <br/>
          <Row>
            <Col xs={4} xsOffset={2} md={3} mdOffset={3}>
              <a href="https://linkedin.com/in/10ndavis"><img alt="LinkedIn" className="icon grow" src={require('./gfx/linkedin.png')} /></a>
            </Col>
            <Col xs={4} md={3}>
              <a href="https://github.com/10ndavis"><img alt="GitHub" className="icon grow" src={require('./gfx/github.png')} /></a>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Network;
