import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class About extends Component {
  render() {
    return (

        <Row id="aboutMe">
        <a name="aboutMe"></a>
          <Col xs={12} md={5} mdOffset={1}>
            <Row id="aboutMeLeft">
              <Col xs={12} md={8} mdOffset={2}>
                <h2>MY STORY</h2>
              </Col>
              <Col xs={12} md={8} mdOffset={2}>
                <p>I started messing with computers at a young age, teaching myself enough to get certified as a Computer Technician and start working. While working in the field I taught myself HTML, CSS, and the basics of JavaScript. Shortly after I was accepted into Hack Reactor-- a full time, immersive Full Stack Web Development bootcamp. Recently I graduated and am now on the hunt for a job. Feel free to reach out if you would like to talk! </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={5}>
            <Row id="aboutMeRight">
              <Col xs={12} md={8} mdOffset={2}>
                <h2>CONTACT</h2>
              </Col>
              <Col xs={12} md={8} mdOffset={2}>
                <div id="contactInfo">
                  <p>PHONE: 618-339-5385 </p>
                  <p>EMAIL: 10ndavis10@gmail.com</p>
                  <p>ADDRESS: 208 Pacific Drive, Belton MO, 64012</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
    );
  }
}

export default About;
