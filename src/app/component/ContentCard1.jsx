import React from "react";
import Image from "next/image";

export default function ContentCard1({ title, content, src }) {
  return (
    <div className="flex flex-col-reverse">
      <div>
        <h2 className="text-[18px] text-white mt-14">
          My Background in Managment
        </h2>
        <p className="text-[15px] text-[#f2f2f299] mt-7">
          In June of 2022, I graduated from architecture school at the
          University of Toronto. There, I became obsessed with architectural
          visualization. I was deeply fascinated in the concepts of modularity
          and adaptability — how our built environment could organically evolve
          in conjuction with humanity.
        </p>
      </div>
      <div
        className="rounded-2xl px-16 mt-4"
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
          className="w-full h-full rounded-2xl normal-card"
          style={{
            opacity: 1,
            outlineOffset: "-1px",
            outline: "1px solid rgba(242, 242, 242, .05)",
          }}
        >
          <Image
            src="/test.jpg"
            alt="content image"
            layout="responsive"
            width={3}
            height={4}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}