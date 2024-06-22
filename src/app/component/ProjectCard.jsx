import React from "react";
import "./ProjectCard.css";

export default function ProjectCard() {
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
    >
      <div
        className="w-full h-full rounded-2xl"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0, rgba(127, 207, 255, .2), rgba(0, 0, 0, 0) 80%), radial-gradient(circle at 50% 0, #035, rgba(0, 0, 0, 0))",
          opacity: 1,
          backgroundImage:
            "radial-gradient(circle at 50% 0, rgba(255, 255, 255, .2), rgba(0, 0, 0, 0))",
          outlineOffset: "-1px",
          outline: "1px solid rgba(242, 242, 242, .05)",
        }}
      ></div>
    </div>
  );
}
