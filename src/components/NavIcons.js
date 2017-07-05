import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class NavIcons extends Component {
  render() {
    return (
      <Row>
        <Col id="iconContainer" xs={10} xsOffset={1}>
          <a href="#aboutMe"><img alt="aboutMe" className="icon grow" src={require('./gfx/aboutMe.png')} /></a>
          <a href="#skills"><img alt="skills" className="icon grow" src={require('./gfx/skills.png')} /></a>
          <a href="#resume"><img alt="resume" className="icon grow" src={require('./gfx/resume.png')} /></a>
          <a href="#network"><img alt="network" className="icon grow" src={require('./gfx/network.png')} /></a>
        </Col>
      </Row>
    );
  }
}

export default NavIcons;
