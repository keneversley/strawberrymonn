// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../common/Button";

// const BuyTicket = () => {
//   const navigate = useNavigate();
//   const handleNavigate = () => {
//     navigate("/");
//   };
  
//   return (
//     <div className="min-h-screen mt-20">
//       <h1>this is screen will be by ticket</h1>
//       <Button label={"Back  to home"} className={""} onClick={handleNavigate} />
//     </div>
//   );
// };

// export default BuyTicket;

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const BuyTicket = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleBuyTicket = () => {
    window.location.href = "https://booketing.com/microsite/vipstunna/";
  };
  // const handleBuyTicket = () => {
  //   window.open("https://booketing.com/microsite/vipstunna/", "_blank");
  // };

  return (
    <div className="min-h-screen mt-20 flex flex-col items-center gap-4">
      <h1>This screen will be for buying tickets</h1>
      <Button label={"Buy Ticket"} className={""} onClick={handleBuyTicket} />
      <Button label={"Back to Home"} className={""} onClick={handleNavigate} />
    </div>
  );
};

export default BuyTicket;

