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
                  <b>비상교육 데이터플랫폼 셀 인턴</b>
                </span>
              }
              description={
                <span>
                  <b className="purple">&bull; 문제 정의 및 목표</b><br></br>
                  사내 브랜드 21개가 서로 다른 회사처럼 운영되어 버려지는 데이터가 많던 상황 속, 데이터 플랫폼 구축 및 운영을 통해 가치를 창출하고 전사적 Data Literacy 향상을 목표로 함.<br></br>
                  <br></br>
                  <b className="purple">&bull; 주요 해결 과정</b><br></br>
                  <li><u>데이터 파이프라인 개발</u></li>
                  &middot;데이터 웨어하우스 구축: AWS VPC 환경 내에서 Airflow 기반으로 사내 브랜드 DB → 데이터 웨어하우스 간간 ELT 파이프라인 설계∙구축. 특히, 확장성을 고려해 단순 소스 DB가 아닌 DBMS 종류별 파이프라인 구축<br></br>
                  &middot;데이터 웨어하우스 → 사내 데이터 포털 DB 간 메타데이터 수집∙가공∙적재를 위한 ETL 파이프라인 설계∙구축<br></br>
                  &middot;<u>주요 성과:</u> 쿼리 최적화 등 코드 리팩토링으로 52,714개 레코드 처리 시간을 12분 9초에서 11분 32초로 약 5% 단축<br></br>
                  
                  <li><u>주제영역 분류 자동화 프로세스 구축</u></li>
                  &middot;사내 데이터 포털 내에서 데이터의 주제 영역을 분류해서 제공해줌으로써 데이터에 대한 이해도와 활용성 증가 유도<br></br>
                  &middot;초기: 약 4,000개 테이블 주제 영역을 수작업 분류 (ERD, 테이블 정의서, 테이블 리스트 참고)<br></br>
                  &middot;후기: 초기에 수립한 분류 기준을 바탕으로 ChatGPT API를 활용해 주제 영역 분류 자동화 프로세스 구축. 메타데이터 가공∙적재 파이프라인 내 도입.<br></br>
                  &middot;<u>주요 성과:</u> 수작업 대비 65%의 정확도로, 데이터 자동 분류 표준화의 기반을 마련<br></br>

                  <li><u>사내 데이터 포털 FE 개발 & 서비스 기획 (AI현황맵 도입 등)</u></li>
                  <br></br>
                  <b className="purple">&bull; 배운 점</b><br></br>
                  4000개 가량의 규칙없이 운영되어 온 테이블을 일일이 깊게 보며, 이를 통한 가치 창출의 무한함을 생각했을 때 매우 아쉬웠고, 데이터 거버넌스의 중요성을 배움. 
                  또한, 확장성과 효율성을 고려한 설계와 개발의 필요성과 주제영역 분류 자동화 프로세스를 끝까지 완성해낸 경험을 통해 집요하게 책임감을 가지고 문제에 도전하는 자세의 중요성을 배움.
                  <br></br>
                  <br></br>
                  <b>Main Skill : <i>Airflow, AWS(VPC, RDS, EC2), MySQL, PostgreSQL, React, Tailwind CSS and Git</i></b><br></br>
                </span>
              }
              ghLink="https://github.com/jeongmin1217/Visang-Education-Data-Platform-Cell-Review"
              />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={hot}
              isBlog={false}
              title={
                <span>
                  <b>CANDY - 퍼듀대학교 Student Intern 연구</b>
                </span>
              }
              description={

                <span>
                  &middot;역할: 팀 리더 & 데이터 전처리<br></br>
                  <b className="purple">&bull; 문제 정의 및 목표</b><br></br>
                  일상 생활에서 간단히 집중력의 척도를 파악하기 쉽지 않기에, 복잡한 뇌파 분석 대비 간편한 웨어러블 기기를 통한 집중력 측정 및 집중력 측정 앱 개발<br></br>
                  <br></br>
                  <b className="purple">&bull; 주요 해결 과정</b><br></br>

                  <li><u>데이터 전처리를 통해 모델 성능 개선 및 전처리 프로세스 자동화</u></li>
                  &middot;각기 다른 수집 주기를 표준화하여 두 기기의 데이터를 자동 통합·가공·처리 후 분석용 데이터셋으로 적재하는 프로세스 구축<br></br>
                  &middot;피쳐 엔지니어링: 앉아서 진행하는 실험 특성 상, 영향력이 없던 운동량 지표를 운동량과 집중력의 상관관계 논문에 기반해 누적 운동량 변수로 가공하여 모델 성능 R² 값 0.031 향상. 해당 변수는 집중도 예측에 가장 영향을 미치는 상위 3개 변수에 선정<br></br>
                  &middot;오류 데이터 처리: 특정 센서 오류 데이터를 인지 후, 해당 오류뿐만 아닌 필드별 오류 데이터 기준을 검출하는 코드를 작성해 오류 데이터의 기준 정의. 이를 바탕으로 필드별 오류 데이터를 처리해 불가피하게 여기던 모델 성능 하락 이슈 최소화<br></br>
                  &middot;전처리를 통해 원본 데이터 실험 대비 모델 성능 <u>R² 값 총 0.25 증가</u><br></br>
                  <br></br>
                  <b className="purple">&bull; 배운 점</b><br></br>
                  오류 데이터 처리를 통해 불가피하게 여기던 모델 성능 하락 이슈를 집요하게 해결하며 데이터 퀄리티의 중요성을 깨달음. 
                  또한 영향력이 적던 데이터를 도메인 이해도를 기반으로 가공해 영향력 높은 상위 변수로 끌어올리는 과정을 통해, <u>데이터에 대한 해석과 설계 역량</u>이 결과의 질을 좌우한다는 점을 깊이 있게 배움.<br></br>

                   <br></br>
                  <b>Main Skill: <i>Python(Numpy,Pandas), and Jupyter Notebook</i></b><br></br>
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
                  <b>컴퓨터 비전을 이용한 개선된 열람실 예약시스템 개발</b>
                </span>
              }
              description={
                <span>
                  &middot;역할: 팀 리더 & 풀스택 웹 개발<br></br>
                  <b className="purple">&bull; 문제 정의 및 목표</b><br></br>
                  공과대학 열람실에 빈번하게 발생하는 사유화된 좌석 혹은 예약시스템에 예약되어 있지만 공석인 좌석 문제.
                  자동화된 문제 해결 방법의 부재로, 이는 학생회에 의해 수작업으로 처리되어 왔음. 이에, 당연시 여기던 수작업을 자동화함으로써 혁신적인 문제 해결 목표.<br></br>
                  <br></br>

                  <b className="purple">&bull; 주요 해결 과정</b><br></br>
                  <li><u>카메라를 통해 좌석을 감지하여 사유화된 좌석과 예약된 공석을 자동으로 반납 처리하는 예약 시스템 개발</u></li>
                  &middot;실시간 카메라를 통해 Django 서버에서 ML모델로 좌석의 상태를 분석하여 문제 좌석을 자동으로 반납<br></br>
                  &middot;특히, 녹화된 영상이 아닌 실시간 카메라를 통해 좌석을 감지해야 했던 문제를 <u>기획 과정에서 선제적 식별</u>, 네트워크 포트포워딩을 통해 실시간 IP 카메라 스트리밍을 클라이언트 단에 송출하여 해결<br></br>
                  &middot;성과: 혁신성을 인정 받아 캡스톤디자인 경진대회 2회 수상<br></br>
                  <br></br>
                  <b className="purple">&bull; 배운 점</b><br></br>
                  프로젝트는 성공적으로 마무리했지만, 역할 분배에 있어 아쉬움이 남았던 프로젝트였음. 앞으로는 너무 많은 것을 직접 해결하려 했던 태도를 개선하고, 신뢰와 역할 분배를 통해 각자의 역할에 맞춰 함께 성장하는 협업 방식으로 나아가고자 다짐하게 된 계기가 됨.<br></br>
                  또한 기획 과정에서의 선제적 이슈 식별의 중요성을 깨닫고, 기술적 가능성 측면의 충분한 고민을 거친 Ideation의 필요성을 배움.<br></br>
                  나아가, 과정 중 겪었던 실시간 데이터 처리 병목 현상을 통해 실시간성 데이터 처리에 궁금증을 갖게 되었고, 추후 다양한 형태와 규모의 데이터 처리에 도전하게 되는 계기가 되었음.<br></br>
                  <br></br>
                  <b>Main Skill : <i>React, Django, and OpenCV</i></b><br></br>
                </span>
              }
              ghLink="https://github.com/LibraryDetection"
              demoLink="https://youtu.be/UC9ejhq_gLQ"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={pg_architecture}
              isBlog={false}
              title={
                <span>
                  <b>Posture Guard - 개인 프로젝트</b>
                </span>
              }
              description={
                <span>
                  <b className="purple">&bull; 문제 정의 및 목표</b><br></br>
                  현대인의 고질적인 노트북∙컴퓨터 사용 중 척추 및 목 건강 문제를 실시간∙일간∙주간 자세 분석 및 기록을 통해 척추와 목 건강 개선<br></br>
                  <br></br>
                  <b className="purple">&bull; 주요 해결 과정</b><br></br>
                  <li><u>실시간 및 배치성 데이터 처리∙분석</u></li>
                  &middot;분산 처리를 통해 오버헤드가 없으면서 최대 효율 성능을 내기 위한 적절한 Executor 수와 Partition 수를 설정하여, 600ms 주기의 데이터 분석을 병목현상 없이 진행<br></br>
                  &middot;1만개의 평균 45KB json 파일 처리 및 분석 작업을 42분 46초에서 35분 42초로 약 17% 단축<br></br>

                  <li><u>비즈니스 요구사항에 맞춘 데이터 마트 설계∙구축</u></li>
                  &middot;주간 데이터 제공을 위한 효율적인 아키텍처 고민
                  &middot;수집된 데이터를 일일 배치로 하루 평균의 이미지와 값을 분석해 데이터 마트에 저장<br></br>
                  &middot;이를 통해 주간 데이터는 7개의 데이터만으로 빠르게 분석이 가능한 효율적인 아키텍처 구축<br></br>
                  <br></br>
                  <b className="purple">&bull; 배운 점</b><br></br>
                  요구사항에 따른 명확하고 쉬운 데이터 구조 설계의 중요성을 배움. <u>명확한 문제 정의 기반의 이해하기 쉬운 데이터 아키텍처의 설계</u>는 곧, 추후 효율적이고 간편한 분석 작업을 가능하게 하며
                   분석의 범주 또한 확대할 수 있는 기반을 마련한다는 점을 느낌.<br></br>
                   <br></br>
                  <b>Main Skill : <i>Spark, Kafka, GCP(BigQuery, etc.), Docker, Django, React, Electron, and Mediapipe</i></b><br></br>
                </span>
              }
              ghLink="https://github.com/jeongmin1217/PostureGuard"
              demoLink="https://www.youtube.com/watch?v=l_z4xRT4i7k"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
