import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import enc from "../../Assets/Projects/enc.jpg";
import knorex from "../../Assets/Projects/knorex.png";
import n8n from "../../Assets/Projects/n8n.png";
import soccer from "../../Assets/Projects/soccer.png";
import mihin from "../../Assets/Projects/mihin.jpg";
import ibm from "../../Assets/Projects/ibm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently as a Full Time Professional.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mihin}
              isBlog={false}
              title="MiHIN Cloud Automation System"
              description="Developed AWS-based automation tools for IAM cleanup, workspace cost optimization and certificate renewals. Implemented Python Lambda functions integrated with CloudFormation, reducing manual admin effort by 40% and improving cloud 
              governance across multiple departments."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knorex}
              isBlog={false}
              title="Ad Campaign Analytics Platform"
              description="Engineered modular React dashboards and GraphQL APIs powering 10K+ live ad campaigns. Optimized Java microservices and Kafka event pipelines to improve analytics latency by 30% while maintaining billing accuracy across high-volume data streams."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibm}
              isBlog={false}
              title="Test Automation Suite"
              description="Built Selenium and Cypress-based end-to-end testing framework with Java and JavaScript, integrated into Jenkins CI/CD pipelines. Automated regression and API tests for large-scale web systems, cutting defect rate by 35% and accelerating release cycles."
            />
          </Col>

          <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently during my Masters.
          </p>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soccer}
              isBlog={false}
              title="Soccer Analytics Pipeline"
              description="Developed a YOLOv8 + OpenCV pipeline to detect players, ball, and referees, with optical flow for camera motion and networkx for passing-network analysis."
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7343111039212732417/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={n8n}
              isBlog={false}
              title="Intelligent Resume Tailoring Agent.io"
              description="Developed an n8n and OpenAI-powered automation pipeline that parses job descriptions, tailors resumes dynamically, and ranks keyword match scores using Jobscan and Playwright automation.
               Enabled multi-role support for SWE, QA, and ML applications. Can't share the code and demo for obvious reasons."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enc}
              isBlog={false}
              title="The ENCRYPTOR"
              description="The ENCRYPTOR is a cross-platform mobile application developed using Flutter and Android Studio, implementing Advanced Encryption Standard (AES) for secure data handling. This app allows users to generate and scan encrypted QR codes,
               ensuring that the information contained within can only be accessed by the intended recipients."
              demoLink="https://drive.google.com/file/d/14xJmiDUBmHRdpLv_fTnYT05nw-wwjXZM/view?usp=drive_link"
            />
          </Col>  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
