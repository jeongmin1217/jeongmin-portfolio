import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  const workDetails = [
    {
      Position: "Data Engineer",
      Company: `Visang Education`,
      Location: "Seoul, South Korea",
      Type: "Internship",
      Duration: "Jul 2023 - Aug 2023 & Jan 2024 - Feb 2024",
      Category: "Work"
    },
    {
      Position: "Student Intern",
      Company: `Purdue University`,
      Location: "West Lafayette, Indiana, USA",
      Type: "Internship",
      Duration: "Sep 2023 - Dec 2023",
      Category: "Work"
    },
  ];

  const eduDetails = [
    {
      Position: "Bachelor of Industrial Management Engineering and Software Convergence",
      Company: "Kyunghee University",
      Location: "Seoul",
      Type: "Senior",
      Duration: "Feb 2018 - Present",
      Category: "Education",
    },
  ];

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <Col>
            <h1 className="project-heading">
              <strong className="purple">Work Experience</strong>
            </h1>
            {workDetails.map((detail, index) => (
              <Aboutcard key={index} {...detail} />
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="project-heading">
              <strong className="purple">Education</strong>
            </h1>
            {eduDetails.map((detail, index) => (
              <Aboutcard key={index} {...detail} />
            ))}
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
