import React, { useState } from "react";
import Button from "../common/Button";
import { BlogImg } from "../assets";
import { IoCalendarNumberOutline } from "react-icons/io5";

const ClientReview = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleBlog = () => {
    console.log("view more review");
  };
  const handleRedArticles = () => {
    console.log("handle read article button clicked");
  };
  return (
    <div className="max-w-6xl mx-auto my-20 px-2">
      <div className="flex  justify-between items-center">
        <div>
          <h1 className="text-start text-5xl text-slate-600 font-medium">
            Miami Pool Party Talk
          </h1>
        </div>
        <div>
          <Button label={"view more"} className={""} onClick={handleBlog} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div
          className="w-96 h-full p-2 relative overflow-hidden rounded-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={BlogImg} alt="Blog" className="rounded-lg w-full h-[80%]" />
          <div
            className={`absolute w-[90%] bottom-28 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              label={"Read Article"}
              className={"w-full"}
              onClick={handleRedArticles}
            />
          </div>
          <div className="mt-6 w-full h-full">
            <h1 className="text-2xl text-slate-600 font-semibold">
              Poolside Parties in Miami: <br /> Where the Fun Never Ends
            </h1>
            <div className="flex gap-2 z-10 justify-start items-center mt-4">
              <IoCalendarNumberOutline className="text-sky-600" />
              <p className="text-sm font-medium text-slate-600">
                October 20, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
