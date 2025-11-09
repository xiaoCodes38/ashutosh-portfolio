import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiFigma,
  SiSlack,
  SiTerraform,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Toolstack() {
  const iconStyle = {
    fontSize: "2.2rem",
    marginBottom: "8px",
    color: "#c3b4ff",
    transition: "transform 0.3s ease, filter 0.3s ease, color 0.3s ease",
    filter: "drop-shadow(0 0 4px rgba(128, 90, 213, 0.3))",
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.18)";
    e.target.style.filter = "drop-shadow(0 0 10px rgba(128, 90, 213, 0.8))";
    e.target.style.color = "#a78bfa";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.filter = "drop-shadow(0 0 4px rgba(128, 90, 213, 0.3))";
    e.target.style.color = "#c3b4ff";
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* --- IDE --- */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      {/* --- API / Testing --- */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="tech-icons-text">Postman</div>
      </Col>

      {/* --- Containers --- */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="tech-icons-text">Docker Desktop</div>
      </Col>

      {/* --- Cloud --- */}
      <Col xs={4} md={2} className="tech-icons">
        <FaAws
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="tech-icons-text">AWS Console</div>
      </Col>

      {/* --- Infrastructure as Code --- */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="tech-icons-text">Terraform</div>
      </Col>

      {/* --- Design / Teamwork --- */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="tech-icons-text">Figma</div>
      </Col>

      {/* --- Communication --- */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="tech-icons-text">Slack</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
