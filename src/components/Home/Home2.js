import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer with 5+ years of experience spanning backend and full-stack development, QA automation, and applied machine learning. I specialize in building scalable systems, designing robust APIs, and developing intelligent automation frameworks that improve reliability and efficiency. I’m passionate about solving complex problems, learning new technologies, and creating meaningful software that makes an impact.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, JavaScript, and TypeScript{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Full-stack Development, Cloud Infra, Test Automation and Applied Machine Learning,{" "}
                </b>
              </i>
              especially projects that combine intelligent systems with scalable cloud infrastructure
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React.js, Node.js </b> and modern frameworks that blend data, AI, and software engineering.{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
