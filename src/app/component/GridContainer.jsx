import React from "react";

export default function GridContainer({ children }) {
  return (
    <div className="grid grid-cols-2 gap-8 max-w-4xl w-full mx-auto rounded-2xl mt-10 px-16">
      {children}
    </div>
  );
}
