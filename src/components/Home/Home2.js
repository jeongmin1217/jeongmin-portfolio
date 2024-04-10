import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/서정민.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{alignContent: 'center'}}>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I specialize in <b className="purple"> Python, SQL, and JavaScript, </b> with a focus on 
              <i>
                <b className="purple"> Data engineering and Web development. </b>
              </i>
              I'm particularly fascinated by data engineering such as developing data pipelines based on cloud infrastructure using Airflow.
              <br />
              <br />
              Whenever possible, I also apply my passion for building web applications with <b className="purple">React.js and Django.</b>
              <br />
              <br />
              I fell in love with football since I was 7 years old. I love to play football and watch football 💜
            </p>
          </Col>
          <Col md={3} className="myAvtar" style={{marginLeft: '4%'}}>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jeongmin1217"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jeongminseo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sjeongmin_98"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
