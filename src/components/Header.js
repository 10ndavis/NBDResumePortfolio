import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Row>
        <Col xs={10} xsOffset={1} md={8} mdOffset={2} id="header">
          NATHAN BREWER-DAVIS
        </Col>
        <Col xs={8} xsOffset={2} md={6} mdOffset={3} id="subHeader">
          - WEB DEVELOPER -
        </Col>
      </Row>
    );
  }
}

export default Header;
