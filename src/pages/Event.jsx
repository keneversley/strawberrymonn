import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const Event = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="max-w-7xl min-h-screen">
      <Button label={"back to home"} className={""} onClick={handleNavigate} />
      <h1>Event page</h1>
    </div>
  );
};

export default Event;
