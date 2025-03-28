import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/3X4 Web2.jpg";
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
              LET ME INTRODUCE MYSELF
            </h1>
            <p className="home-about-body">
              <i><b className="purple">데이터를 통해 세상을 변화시키는 일에 많은 관심을 갖고 있습니다.</b></i>
              <br></br>
              특히 <b className="purple">데이터를 수집∙처리∙적재하는 구조를 고민하고 설계∙구축</b>하는 과정에 큰 흥미를 가지고 있습니다.
              동시에 데이터를 기반으로 아이디어를 기술적으로 실현해 나가는 방향을 <b className="purple">여러 사람과 함께 고민하고 판단하는 과정</b>에 흥미를 느낍니다.
              <br></br>
              <br></br>
              저는 데이터가 다양한 혁신의 출발점이 된다고 믿습니다.
              데이터 생애 주기 전반을 깊으면서도 균형 있게 사고할 수 있는 사람으로 성장해, 모든 규모와 형태의 데이터를 효율적으로 처리할 수 있는 환경이 구축된, 
              <b className="purple"> 데이터 기반의 혁신적인 세계</b>를 만들고자 합니다.
              <br />
              <br />
              주 언어로는 <b className="purple"> Python과 SQL</b>을 사용하며, <b className="purple">데이터 파이프라인과 아키텍처</b>에 관심이 많습니다.
              <br />
              또한, 7살 때부터 축구와 사랑에 빠진, 월드컵 2회 직관 경험의 11년차
              <span style={{color: "red", fontWeight: "bold", backgroundColor: "black"}}> FC서울</span> 팬입니다 🖤❤️
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
