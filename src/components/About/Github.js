import React from "react";
import { Row } from "react-bootstrap";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function Github() {
  const data = [
    { category: "Full Stack Development", proficiency: 92 },
    { category: "Cloud & DevOps", proficiency: 80 },
    { category: "Machine Learning", proficiency: 85 },
    { category: "Test Automation", proficiency: 95 },
    { category: "Sys Design & Architecture", proficiency: 85 },
  ];

  const wrapLabel = (label) => {
    if (label.length > 18) {
      const words = label.split(" ");
      const mid = Math.ceil(words.length / 2);
      return `${words.slice(0, mid).join(" ")}\n${words.slice(mid).join(" ")}`;
    }
    return label;
  };

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "40px",
        color: "white",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        className="project-heading pb-4"
        style={{
          paddingBottom: "20px",
          textAlign: "center",
        }}
      >
        My <strong className="purple">Tech Skill Radar</strong>
      </h1>

      <div
        style={{
          width: "100%",
          height: 520,
          maxWidth: "760px", // 🔹 slightly wider for text spacing
          background: "rgba(255, 255, 255, 0.02)",
          borderRadius: "16px",
          boxShadow: "0 0 30px rgba(128,90,213,0.15)",
          padding: "25px",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="54%" // 🔹 shifts radar slightly right
            cy="50%"
            outerRadius="75%"
            data={data}
          >
            <PolarGrid stroke="#6b5acd50" />
            <PolarAngleAxis
              dataKey="category"
              tickFormatter={wrapLabel}
              tick={{
                fill: "#e5d9ff",
                fontSize: 13,
                fontWeight: 500,
                lineHeight: "1.2em",
              }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: "#d1b3ff", fontSize: 12 }}
              tickCount={6}
            />
            <Radar
              name="Proficiency"
              dataKey="proficiency"
              stroke="#a78bfa"
              fill="url(#purpleGradient)"
              fillOpacity={0.6}
              strokeWidth={2}
              isAnimationActive={true}
              animationBegin={300}
              animationDuration={1500}
              animationEasing="ease-out"
            />
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f1b2e",
                border: "1px solid #a78bfa",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "13px",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Row>
  );
}

export default Github;
