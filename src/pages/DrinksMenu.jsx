import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { drinksData } from "../constant/drinksMenuData";

const DrinksMenu = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen mt-20 px-4 max-w-6xl mx-auto">
      <Button label="Back to Home" className="mb-4" onClick={handleNavigate} />
      <h1 className="text-2xl font-bold mb-6">Drinks Menu</h1>

      <div className="mb-10">
        {drinksData?.map((data, index) => (
          <div key={index} className="w-full px-2">
            <img className="w-full object-cover" src={data.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinksMenu;
