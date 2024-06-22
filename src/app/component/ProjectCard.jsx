"use client"
"use client";
import React, { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ hoverCardProp }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-4xl w-full h-[765px] mx-auto rounded-2xl mt-10 px-16"
      style={{
        outlineOffset: "-1px",
        backgroundColor: "rgba(242, 242, 242, .04)",
        outline: "1px solid rgba(242, 242, 242, .05)",
        padding: "8px",
        boxShadow: "0 40px 80px rgba(0, 0, 0, .5)",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-full h-full rounded-2xl ${isHovered ? hoverCardProp : 'normal-card' }`}
        style={{
          opacity: 1,
          outlineOffset: "-1px",
          outline: "1px solid rgba(242, 242, 242, .05)",
        }}
      ></div>
    </div>
  );
}
