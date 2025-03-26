import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const AboutCard = ({ Position, Company, Location, Type, Duration, Category }) => {
  return (
    <Card className="mb-1 about-card">
      <Card.Body>
        <Card.Title>{Position}</Card.Title>

        <Row>
          <Col>
            {Category === 'Work' ? '🗄' : '🏫'} {Company}
          </Col>
          {/* <Col className="about-card-right">
            {Type}
          </Col> */}
        </Row>
        <Row>
          <Col>
            📍 {Location}
          </Col>
          <Col className="about-card-right">
            {Duration}
          </Col>
        </Row>
        <hr style={{color: '#c770f0', height: '1.5px'}}></hr>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
