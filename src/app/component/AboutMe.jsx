import React from "react";

export default function AboutMe() {
  return (
    <div className="max-w-4xl w-full mx-auto rounded-2xl mt-10 px-16">
      <h1
        className="text-4xl font-extrabold text-white"
        style={{
          textShadow:
            "0 4px 10px rgba(0, 87, 255, .2), 0 -4px 10px rgba(255, 90, 0, .15), 0 0 30px rgba(255, 255, 255, .2)",
        }}
      >
        I'm passionate about creating innovative solutions that empower people.
        As a software engineer, I specialize in developing{" "}
        <span
          className="italic font-black bg-clip-text text-transparent about-me-desing-text"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #fff 50%, rgba(242, 242, 242, .2))",
            letterSpacing: "-1px",
            textShadow:
              "0 4px 6px rgba(0, 87, 255, .15), 0 -4px 6px rgba(255, 90, 0, .1), 0 0 20px rgba(255, 255, 255, .25)",
          }}
        >
          impactful software applications.
        </span>
      </h1>
    </div>
  );
}
