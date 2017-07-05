import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Skills extends Component {


  render() {
    return (

        <Row>
          <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
            <a name="skills"></a>
            <h2 id="skillsH2">SKILLS</h2>
              <ul id="skill">
                <li><span className="bar html-css"></span><h3>HTML/CSS</h3></li>
                <li><span className="bar javascript"></span><h3>JavaScript</h3></li>
                <li><span className="bar bootstrap"></span><h3>Bootstrap</h3></li>
                <li><span className="bar jquery"></span><h3>jQuery</h3></li>
                <li><span className="bar angular"></span><h3>AngularJS</h3></li>
                <li><span className="bar react"></span><h3>React</h3></li>
              </ul>
          </Col>
        </Row>

    );
  }
}

export default Skills;
