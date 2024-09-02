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
                  <br></br>
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
                  <br></br>
                  <b className="purple">&bull; 배운 점</b><br></br>
                  3100개 가량의 규칙없이 운영되어 온 테이블 메타데이터를 일일이 깊게 보며, 이를 통한 가치 창출의 무한함을 생각했을 때 매우 아쉬웠고, Data Quality의 중요성을 배움.
                  또한, 주제영역 분류 자동화 시도 당시, 비록 실패하였지만 키워드를 이용한 bottom-up 방식의 새로운 시도에 대한 가능성을 느끼며,
                  키워드라는 유의미한 값을 생성한 것에 집요한 도전의 중요성을 배움.<br></br>
                  <br></br>
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


          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={hot}
              isBlog={false}
              title={
                <span>
                  <b>CANDY (Concentration AND You)</b>
                </span>
              }
              description={

                <span>
                  <b className="purple">&bull; 문제 정의 및 목표</b><br></br>
                  일상 생활에서 간단히 집중력의 척도를 파악하기 쉽지 않기에, 복잡한 뇌파 분석 대비 간편한 웨어러블 기기를 통한 집중력 측정 및 집중력 측정 앱 개발<br></br>
                  <br></br>
                  <b className="purple">&bull; 주요 해결 과정</b><br></br>
                  <li><u>탄탄한 도메인 이해도를 기반으로 데이터 전처리를 통해 모델 성능 개선 및 전처리 프로세스 자동화</u></li>
                  &middot;서로 다른 두 기기로부터 발생하는 바이오 데이터 전처리 자동화 프로세스 구축<br></br>
                  &middot;앉아서 진행하는 실험 특성 상, 영향력이 없던 운동량 지표를 운동량과 집중력의 상관관계 논문을 바탕으로 재해석하여 모델 성능 <u>R² 값 0.031 향상</u><br></br>
                  &middot;두 기기의 데이터 수집 주기 병합 과정 중, 오류 데이터를 따라가던 이슈를, 센서 오류 데이터의 기준을 분석하여 어쩔 수 없게 여기던 성능 하락을 끈기 있게 최소화<br></br>
                  &middot;전처리를 통해 원본 데이터 실험 대비 모델 성능 <u>R² 값 총 0.25 증가</u><br></br>
                  <br></br>
                  <b className="purple">&bull; 배운 점</b><br></br>
                  오류데이터를 쫓는 오류를 해결하고자 집요하게 파고들어, 오류 데이터의 기준까지 분석해보며
                   데이터 퀄리티의 중요성과 버려질 수도 있던 데이터를 이용한 가치 창출을 통해 <u>도메인 기반 지식과 해석의 중요성을 배움.</u><br></br>
                   <br></br>
                  <b>Main Skill : <i>Python (Numpy, Pandas), Jupyter Notebook</i></b><br></br>
                </span>
              }
              ghLink="https://github.com/Healthcare-of-Things"
              demoLink="https://youtu.be/XCtSMd5H6fg"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={lib_detection}
              isBlog={false}
              title={
                <span>
                  <b>컴퓨터 비전을 이용한 경희대학교 공과대학 열람실<br></br>예약시스템 개선 프로젝트</b>
                </span>
              }
              description={
                <span>
                  <b className="purple">&bull; 문제 정의 및 목표</b><br></br>
                  공과대학 열람실에 빈번하게 발생하는 사유화된 좌석 혹은 예약시스템에 예약되어 있지만 공석인 좌석 문제.
                  자동화된 문제 해결 방법의 부재로, 이는 학생회에 의해 수작업으로 처리되어 왔음. 이에, 당연시 여기던 수작업을 자동화함으로써 혁신적인 문제 해결 목표.<br></br>
                  <br></br>

                  <b className="purple">&bull; 주요 해결 과정</b><br></br>
                  <li><u>카메라를 통해 좌석을 감지하여 사유화된 좌석과 공석을 자동으로 반납 처리하는 예약 시스템 개발</u></li>
                  &middot;특히, 녹화된 영상이 아닌 실시간 카메라를 통해 좌석을 감지해야 했던 문제를 라우터를 사용한 네트워크 포트포워딩을 통해 실시간 IP 카메라 스트리밍을 클라이언트 단에 송출하여 해결<br></br>
                  &middot;성과 : 혁신적인 아이디어로 캡스톤디자인 경진대회 2회 수상<br></br>
                  <br></br>
                  <b className="purple">&bull; 배운 점</b><br></br>
                  엄청난 실시간을 요구하는 프로젝트가 아니었기에, 다른 임팩트 있는 것에 집중하고 데이터 전송 주기는 10초로 설정함.
                  그러나 1초 주기로 진행을 해보았을 때, 병목현상 이슈를 경험하였고, 이 때 처음 실시간성 데이터 처리에 궁금증을 갖게 됨.<br></br>
                  <br></br>
                  <b>Main Skill : <i>React, Django, and OpenCV</i></b><br></br>
                </span>
              }
              ghLink="https://github.com/LibraryDetection"
              demoLink="https://youtu.be/UC9ejhq_gLQ"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
