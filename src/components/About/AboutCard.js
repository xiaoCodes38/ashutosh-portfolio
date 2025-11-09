import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ashutosh Das</span> based in{" "}
            <span className="purple">New York</span>.
            <br />
            I’m a <span className="purple">Software Engineer</span> with over{" "}
            <span className="purple">5 years of experience</span> across{" "}
            <span className="purple">Full-Stack Development, Test Automation,</span> and{" "}
            <span className="purple">Applied Machine Learning</span>.
            <br />
            I completed my{" "}
            <span className="purple">Master’s in Information Systems</span> with focus in Applied ML at{" "}
            <span className="purple">Binghamton University</span> in{" "}
            <span className="purple">May 2025</span> and concluded my{" "}
            <span className="purple">Health IT internship</span> at{" "}
            <span className="purple">Michigan Health Information Network (MiHIN)</span> in{" "}
            <span className="purple">August 2025</span>.
            <br />
            <br />
          </p>

          <h2 className="about-heading">
            Things I <span className="purple">Love ❤️</span>
          </h2>

          <p style={{ textAlign: "justify" }}>
            When I’m not coding, you’ll usually find me doing something creative,
            active, or just exploring the world around me. Things like:
          </p>

          <ul>
            <li className="about-activity">
              ⚽ Playing soccer and analyzing matches with friends
            </li>
            <li className="about-activity">
              👨‍🍳 Cooking for people and experimenting with new recipes
            </li>
            <li className="about-activity">
              ✈️ Traveling and discovering new cultures 🌍
            </li>
            <li className="about-activity">
              🧠 Learning about AI, automation, and emerging tech trends
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
