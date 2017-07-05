import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} id="header">
          This is a header
        </Col>
      </Row>
    );
  }
}

export default Header;
