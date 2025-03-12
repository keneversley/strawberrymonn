import React from "react";
import Button from "../common/Button";
import { AbsolutOne, AbsolutTwo, bgImage, menuImage } from "../assets";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const handleBuyTicket = () => {
    navigate("/buy-ticket");
  };
  const handleViewMenu = () => {
    navigate("/drinks-menu");
  };
  return (
    <div className="px-2 mt-20">
      <div className="flex flex-col md:flex-row  ">
        <div className="relative flex-1 mt-10 min-h-[600px] md:min-h-[700px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />

          <div className="absolute inset-0 bg-slate-600 opacity-90"></div>

          <div className="relative z-10 flex justify-center">
            <img
              src={AbsolutOne}
              alt=""
              className="absolute -top-12 left-[10%] md:left-1/4 w-[180px] h-[220px] md:w-[250px] md:h-[300px]"
            />
            <img
              src={AbsolutTwo}
              alt=""
              className="absolute top-40 right-[10%] md:right-44 w-[150px] h-[200px] md:w-[200px] md:h-[250px]"
            />
          </div>

          <div className="absolute text-center md:text-start bottom-20 md:bottom-40 left-1/2 transform -translate-x-1/2 z-10 w-[90%] md:w-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">
              Drink Menu
            </h1>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-300">
              Hyde Beach SLS Pool Party Menu
            </h3>
            <p className="text-lg md:text-xl font-medium text-gray-300">
              The SLS Miami pool party is open every Friday,{" "}
              <br className="hidden md:block" />
              Saturday and Sunday from 12pm-6:30pm.
            </p>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8">
              <Button
                onClick={handleViewMenu}
                label={"View Menu"}
                className="w-full md:w-auto px-6 py-3"
              />
              <Button
                onClick={handleBuyTicket}
                label={"Buy Ticket"}
                className="w-full md:w-auto px-6 py-3 hover:bg-white hover:text-black hover:animate-none"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 mb-10">
          <img src={menuImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
