import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <a name="aboutMe">
        <Row id="aboutMe">
          <Col xs={12} md={5} mdOffset={1}>
            <Row>
              <Col id="aboutMeLeft" xs={12} md={8} mdOffset={2}>
                <h2>MY STORY</h2>
              </Col>
              <Col xs={12} md={8} mdOffset={2}>
                <p>I grew up in a small town</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={5}>
            <Row>
              <Col id="aboutMeRight" xs={12} md={8} mdOffset={2}>
                <h2>CONTACT</h2>
              </Col>
              <Col xs={12} md={8} mdOffset={2}>
                <div id="contactInfo">
                  <p>PHONE: 618-339-5385 <br/>
                  EMAIL: 10ndavis10@gmail.com</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </a>
    );
  }
}

export default About;
