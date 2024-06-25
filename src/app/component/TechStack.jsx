import React from "react";
import Slider from "react-slick";

const TechstacksCarousel = ({ techstacks }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    centerMode: true, // Add this line to center the slides
    centerPadding: "76.5px",
  };

  return (
    <div className="max-w-4xl w-full mx-auto rounded-2xl mt-10 px-16">
      <h1
        className="text-4xl font-extrabold text-white text-center"
        style={{
          textShadow:
            "0 4px 10px rgba(0, 87, 255, .2), 0 -4px 10px rgba(255, 90, 0, .15), 0 0 30px rgba(255, 255, 255, .2)",
        }}
      >
        My TechStack.{" "}
      </h1>

      <Slider {...settings} className="mt-10 z-30">
        {techstacks.map((techstack, index) => (
          <div key={index} className="techstack-logo">
            <techstack.logo size={80} color="#f2f2f2" />
            <span>{techstack.name}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechstacksCarousel;
