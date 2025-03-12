import React from "react";
import { bgImage, SlideFour } from "../assets";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleFloorPlan = () => {
    navigate("/floor-plan");
  };
  return (
    <div className="min-h-screen  max-w-6xl mx-auto mt-20 px-2 mb-10">
      <h1 className="text-5xl font-semibold text-slate-600 text-start md:hidden block">
        About
      </h1>
      <div className="flex flex-col md:flex-col lg:flex-row gap-16">
        <div className=" flex-1 relative bg-cover bg-center w-full h-ful">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={SlideFour}
            alt=""
          />
        </div>
        <div className=" flex-1">
          <h1 className=" mt-0 md:mt-8 text-5xl font-semibold text-slate-600 text-start hidden md:block">
            About
          </h1>
          <div className="text-slate-700 mt-10 text-xl font-medium">
            <p>
              The SLS Pool party is open every Friday, Saturday and Sunday from
              12pm-6:30pm. Haus of Hyde nightclub is from 10pm-2am. We
              specialize in making your special occasion memorable. For
              reservations please fill out our reservation form and we will get
              back to you as soon as possible.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-20 mt-10">
            <div>
              <Button
                label={"view floor plan"}
                onClick={handleFloorPlan}
                className="w-36"
              />
            </div>
            <div className=" w-full h-full">
              <img
                className=" w-full h-auto object-cover rounded-lg"
                src={bgImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
