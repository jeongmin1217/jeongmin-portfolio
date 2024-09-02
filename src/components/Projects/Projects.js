import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hot from "../../Assets/Projects/hot.png";
import pg_architecture from "../../Assets/Projects/architecture_postureguard_final.PNG";
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
                  <b>비상교육 데이터플랫폼 셀</b>
                </span>
              }
              description={
                <span>
                  <b className="purple">&bull; 문제 정의 및 목표</b><br></br>
                  사내 브랜드 21개가 서로 다른 회사처럼 운영되어 버려지는 데이터가 많던 상황 속, 데이터 플랫폼 구축 및 운영을 통해 가치를 창출하고 전사적 Data Literacy 향상을 목표로 함.<br></br>
                  
                  <b className="purple">&bull; 주요 해결 과정</b><br></br>
                  <li><u>데이터 파이프라인 개발</u></li>
                  &middot;외래키 제약조건, DAG간의 의존성, 코드의 재사용성을 고려한 알고리즘 작성<br></br>
                  &middot;지속적으로 효율적인 코드를 고민하여 Upsert 방식 쿼리문과 executemany 배치 처리를 도입해 <u>52,714개 레코드 처리 시간을 12분 9초에서 11분 32초로 약 5% 단축</u><br></br>
                  &middot;타 스키마/브랜드 내 같은 이름의 테이블로 인한 정합성 오류를 코드 리뷰와 테스트 케이스 작성을 통해 식별 및 해결<br></br>
                  
                  <li><u>주제영역 분류 자동화 시도</u></li>
                  &middot;전사적 Data Literacy 향상을 위한 데이터 주제 영역 분류 작업을 ChatGPT API를 사용하여 자동화 시도<br></br>
                  &middot;1차 : 테이블/컬럼명, 브랜드 구조 입력 후 분류 자동화 시도<br></br>
                  &middot;2차 : 테이블/컬럼명을 통한 테이블/컬럼 키워드 생성 후, 역으로 키워드를 이용한 주제 영역 분류 자동화 시도<br></br>

                  <li><u>데이터 포털 서비스 Front-End 개발</u></li>

                  <b className="purple">&bull; 배운 점</b><br></br>
                  3100개 가량의 규칙없이 운영되어 온 테이블 메타데이터를 일일이 깊게 보며, 이를 통한 가치 창출의 무한함을 생각했을 때 매우 아쉬웠고, Data Quality의 중요성을 배움.
                  또한, 주제영역 분류 자동화 시도 당시, 비록 실패하였지만 키워드를 이용한 bottom-up 방식의 새로운 시도에 대한 가능성을 느끼며,
                  키워드라는 유의미한 값을 생성한 것에 집요한 도전의 중요성을 배움.<br></br>
                  
                  <b>Main Skill : <i>Airflow, AWS, PostgreSQL, React, Git</i></b><br></br>
                </span>
              }
              ghLink="https://github.com/jeongmin1217/Visang-Education-Data-Platform-Cell-Review"
              />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={pg_architecture}
              isBlog={false}
              title={
                <span>
                  <b>Posture Guard</b>
                </span>
              }
              description={
                <span>
                  <b className="purple">&bull; 문제 정의 및 목표</b><br></br>
                  현대인의 고질적인 노트북/컴퓨터 사용 중 척추 및 목 건강 문제를 실시간/일간/주간 자세 분석 및 기록을 통해 척추와 목 건강 개선<br></br>
                  <br></br>
                  <b className="purple">&bull; 주요 해결 과정</b><br></br>
                  <li><u>실시간 데이터 처리 경험 및 지표 설계, 분석</u></li>
                  &middot;오버헤드가 없으면서 최대 효율 성능을 내기 위한 적절한 Spark Executor 수(7개)와 Partition 수(390개)를 설정하여 분산 처리를 통한 성능 향상<br></br>
                  &middot;<u>1만개의 평균 45KB json 파일 처리 및 분석 작업을 42분 46초에서 35분 42초로 약 17% 단축</u><br></br>
                  &middot;단일 파티션에 걸리던 과부화를 해결하기 위해 수집한 데이터를 Kafka와 Spark Streaming의 병렬처리적 특성을 활용해 파티션 수를 늘려 병목 현상 해결<br></br>

                  <li><u>데이터 분석에 필요한 데이터 집계 마트 개발 및 구축</u></li>
                  &middot;준실시간 데이터 분석을 통해 수집된 데이터를 일일 배치로 하루 평균의 이미지와 값을 분석해 BigQuery와 Google Cloud Storage에 저장<br></br>
                  &middot;일주일간의 평균 기록을 위의 BigQuery 데이터 집계 마트를 이용해 효율적 분석 진행<br></br>
                  <br></br>
                  <b className="purple">&bull; 배운 점</b><br></br>
                  데이터 처리 및 분석 용도에 따른 명확하고 쉬운 데이터 구조 설계의 중요성을 배움.
                  명확한 문제 정의 기반의 이해하기 쉬운 데이터 아키텍처의 설계는 곧, 추후 효율적이고 간편한 분석 작업을 가능하게 하며
                   분석의 범주 또한 확대할 수 있는 기반을 마련한다는 점을 느낌.<br></br>
                   <br></br>
                  <b>Main Skill : <i>Spark, Kafka, GCP(BigQuery, etc.), Docker, Django, React, Electron, Mediapipe</i></b><br></br>
                </span>
              }
              ghLink="https://github.com/jeongmin1217/PostureGuard"
              demoLink="https://youtu.be/VgrtuKNS-JU?si=1vdYciOX_Gtf4AXU"              
            />
          </Col>
{/* 
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
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
