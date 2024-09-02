import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hot from "../../Assets/Projects/hot.png";
import fav_restaurant from "../../Assets/Projects/fav_restaurant.png";
import look_at_me from "../../Assets/Projects/look_at_me.png";
import visang_portal from "../../Assets/Projects/visang_portal.png";
import lcpp1 from "../../Assets/Projects/lcpp1.png";
import lib_detection from "../../Assets/Projects/lib_detection.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Main <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          간략한 저의 주요 프로젝트를 소개드립니다!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={visang_portal}
              isBlog={false}
              title={
                <span>
                  <b>Visang Education Data Platform Cell</b>
                </span>
              }
              description={
                <span>
                  <b>Main Skill : <i>Airflow, AWS, React, and PostgreSQL</i></b><br></br>
                  Our team's goal is to establish company-wide data governance and manage the whole data of 50 in-house brands. <br></br>
                  I was in charge of building data pipeline that extracts metadata for each brand from the source DB (DB of each brand) and developing and operating an in-house data portal based on the metadata. <br></br>
              <i>React, Tailwind CSS</i> was used to develop the front-end of the data portal,
              and by using <i>Airflow</i>, I worked on the metadata ETL job. Also, I encountered various databases such as <i>PostgreSQL, MySQL, and Oracle</i> during the process.
              In addition, all the work was done within the VPC network built through <i>AWS</i>.
                </span>
              }
              ghLink="https://github.com/jeongmin1217/Visang-Education-Data-Platform-Cell-Review"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={lib_detection}
              isBlog={false}
              title={
                <span>
                  <b>Improvement of Reservation System for Library based on Computer Vision</b>
                </span>
              }
              description={
                <span>
                  <b>Main Skill : <i>React, Django, and OpenCV</i></b><br></br>
                  There is a problem with the lack of seats in my university’s library. Main reason of the problem are private seats (reserve a seat even though he/she is not using) and vacant seats (missed or forgot to check out reservation). <br></br>
                  To resolve the problem, our team made the improved reservation system. I worked on both front-end(<i>React</i>) and back-end(<i>Django</i>) part of the system.<br></br>
                  Also, we used <i>OpenCV and Network Portforwarding</i> to analyze real-time status of seats by detecting seats, people, and pieces of luggage through IP Camera.
                </span>
              }
              ghLink="https://github.com/LibraryDetection"
              demoLink="https://youtu.be/UC9ejhq_gLQ"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={look_at_me}
              isBlog={false}
              title={
                <span>
                  <b>Look-At-Me</b>
                </span>
              }
              description={
                <span>
                  <b>Main Skill : <i>React, Django, Dlib and Electron</i></b><br></br>
                  Look-At-Me is a desktop application which helps users focus on E-learning based on gaze tracking and manages the concentration record.<br></br>
                  <i>Tensorflow.js, OpenCV, and Dlib</i> were used to track the user's gaze, and back-end of the application was built with <i>Django</i>.
                  The gaze data was managed through <i>SQLite</i>, and the front-end was developed as a desktop application using <i>React and Electron</i>.<br></br>
                  This a personal project and I worked on the whole front-end, back-end, and data analysis parts.
                </span>
              }
              ghLink="https://github.com/jeongmin1217/LookAtMe"
              demoLink="https://youtu.be/77s0UEhojYg"              
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={hot}
              isBlog={false}
              title={
                <span>
                  <b>CandY</b>
                </span>
              }
              description={
                <span>
                  <b>Main Skill : <i>Python, Django, and React-Native</i></b><br></br>
                  CANDY (Concentration AND You) is an application that manages and calculates the user's concentration using bio-data collected from a wearable device(Fitbit).<br></br>
                  We found out the correlation between concentration and bio-data through brain waves, and calculate the concentration score.<br></br>
                  I preprocessed bio-data from two different devices using <i>Python</i> libraries such as <i>Numpy, Pandas, etc</i>.
                </span>
              }
              ghLink="https://github.com/Healthcare-of-Things"
              demoLink="https://youtu.be/XCtSMd5H6fg"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
