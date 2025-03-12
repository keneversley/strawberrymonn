import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const DetailsFloorPlan = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <Button label={"Back  to home"} className={""} onClick={handleNavigate} />
      <h1>view floor plan</h1>
    </div>
  );
};

export default DetailsFloorPlan;
