import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const BuyTicket = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen mt-20">
      <h1>this is screen will be by ticket</h1>
      <Button label={"Back  to home"} className={""} onClick={handleNavigate} />
    </div>
  );
};

export default BuyTicket;
