import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiDjango,
  DiDocker,
} from "react-icons/di";
import {
  SiPostgresql,
  SiApacheairflow,
  SiMysql,
  SiOpencv,
  SiApachekafka,
  SiApachespark,
  SiGooglecloud
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function renderTooltip(props, text) {
  return (
    <Tooltip {...props}>
      {text}
    </Tooltip>
  );
}

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Python")}
        >
          <span><DiPython /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Javascript")}
        >
          <span><DiJavascript1 /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "MySQL")}
        >
          <span><SiMysql /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "PostgreSQL")}
        >
          <span><SiPostgresql /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Airflow")}
        >
          <span><SiApacheairflow /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Kafka")}
        >
          <span><SiApachekafka /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Spark")}
        >
          <span><SiApachespark /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Google Cloud Platform")}
        >
          <span><SiGooglecloud /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "AWS")}
        >
          <span><FaAws /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Docker")}
        >
          <span><DiDocker /></span>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "React")}
        >
          <span><DiReact /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Django")}
        >
          <span><DiDjango /></span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={(props) => renderTooltip(props, "Git")}
        >
          <span><DiGit /></span>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Techstack;
