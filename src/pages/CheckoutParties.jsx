import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const CheckoutParties = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <Button label={"Back  to home"} className={""} onClick={handleNavigate} />
      <h1>checkout our parties</h1>
    </div>
  );
};

export default CheckoutParties;
