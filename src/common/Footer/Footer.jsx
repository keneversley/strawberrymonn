import React from "react";
import { LogoTwo } from "../../assets";

const Footer = () => {
  return (
    <div className="w-full bg-slate-100 shadow-xl border-t-4">
      <div className="max-w-6xl mx-auto py-8 p-2 flex flex-col gap-6">
        <div className="flex justify-center items-center">
          {" "}
          <img
            src={LogoTwo}
            alt=""
            className="w-24 h-24 flex justify-center items-center"
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-xs text-center text-slate-600">
            ©All right reserved{" "}
            <span className="uppercase ">gavin stewart</span>2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
