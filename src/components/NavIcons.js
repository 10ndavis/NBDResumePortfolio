import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class NavIcons extends Component {
  render() {
    return (
      <Row>
        <Col id="iconContainer" xs={10} xsOffset={1}>
          <a href="index.html#aboutMe"><img alt="aboutMe" className="icon grow" src={require('./gfx/aboutMe.png')} /></a>
          <a href="index.html#resume"><img alt="resume" className="icon grow" src={require('./gfx/resume.png')} /></a>
          <a href="index.html#network"><img alt="network" className="icon grow" src={require('./gfx/network.png')} /></a>
          <a href="index.html#skills"><img alt="skills" className="icon grow" src={require('./gfx/skills.png')} /></a>
        </Col>
      </Row>
    );
  }
}

export default NavIcons;
