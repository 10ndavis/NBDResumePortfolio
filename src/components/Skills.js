import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Skills extends Component {
  render() {
    return (
      <Row>
        <Col id="iconContainer" xs={10} xsOffset={1}>
          <img id="aboutMeIcon" src={require('./gfx/aboutMe.png')} />
          <img id="aboutMeIcon" src={require('./gfx/resume.png')} />
          <img id="aboutMeIcon" src={require('./gfx/network.png')} />
          <img id="aboutMeIcon" src={require('./gfx/skills.png')} />
        </Col>
      </Row>
    );
  }
}

export default Skills;
