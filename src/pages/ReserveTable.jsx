import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const ReserveTable = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <Button label={"Back  to home"} className={""} onClick={handleNavigate} />
      <h1>Resrerve table</h1>
    </div>
  );
};

export default ReserveTable;
