import React from "react";
import { bgImage, FloorPlane, FloorPlanTwo } from "../assets";

const FloorPlan = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-2">
      <h1 className="text-4xl text-slate-600 font-semibold text-start uppercase py-10">
        floor plan
      </h1>
      <div className="flex justify-center items-center flex-col gap-10 md:flex-row">
        <div className="w-full">
          <img
            src={FloorPlane}
            alt=""
            className="max-w-full h-[500px] rounded-lg"
          />
        </div>
        <div className="w-full">
          <img
            src={FloorPlanTwo}
            alt=""
            className="w-full h-[500px] rounded-tl-full rounded-bl-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
