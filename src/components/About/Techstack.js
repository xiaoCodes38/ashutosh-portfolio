import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiTensorflow,
  SiScikitlearn,
  SiSelenium,
  SiCypress,
  SiJenkins,
} from "react-icons/si";
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";

function Techstack() {
  // Inline style for consistent icon sizing + animation
  const iconStyle = {
    width: "48px",
    height: "48px",
    marginBottom: "8px",
    transition: "transform 0.3s ease, filter 0.3s ease",
    filter: "drop-shadow(0 0 4px rgba(128, 90, 213, 0.3))",
  };

  const smallIconStyle = {
    ...iconStyle,
    width: "28px",
    height: "28px",
    marginTop: "6px",
    marginBottom: "4px",
    filter: "drop-shadow(0 0 3px rgba(128, 90, 213, 0.3))",
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.12)";
    e.target.style.filter = "drop-shadow(0 0 8px rgba(128, 90, 213, 0.7))";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.filter = "drop-shadow(0 0 4px rgba(128, 90, 213, 0.3))";
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* --- Languages --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      {/* --- Frontend --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="Redux" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt="MUI" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      {/* --- Backend & Databases --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kafka} alt="Kafka" style={smallIconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">Kafka</div>
      </Col>

      {/* --- Machine Learning --- */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow fontSize={"24px"} />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn fontSize={"24px"} />
        <div className="tech-icons-text">scikit-learn</div>
      </Col>

      {/* --- Test Automation --- */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium fontSize={"24px"} />
        <div className="tech-icons-text">Selenium</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress fontSize={"24px"} />
        <div className="tech-icons-text">Cypress</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins fontSize={"24px"} />
        <div className="tech-icons-text">Jenkins</div>
      </Col>

      {/* --- Cloud & DevOps --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" style={smallIconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt="Kubernetes" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>

      {/* --- Utilities --- */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">Git / GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" style={iconStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Techstack;
