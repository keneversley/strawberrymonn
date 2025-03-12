// import React from "react";
// import Button from "../../common/Button";
// import Carousel from "../carousel/Carousel";

// const Hero = () => {
//   const handleChat = () => {
//     window.open("https://www.whatsapp.com/", "_blank");
//   };
//   return (
//     <div className="relative w-full  overflow-hidden mt-20">
//       <div className="flex justify-center items-center flex-col gap-16  uppercase">
//         <h1 className="text-center mt-20 text-5xl font-semibold text-slate-600">
//           Strawberry Moon Pool Party
//         </h1>
//         <Button onClick={handleChat} label={"WHATSAPP CHAT"} />
//       </div>
//       <div className="mt-20">
//         <Carousel />
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import Button from "../../common/Button";
import Carousel from "../carousel/Carousel";

const Hero = () => {
  const handleChat = () => {
    // Replace with the desired WhatsApp phone number
    const phoneNumber = "+13055705232"; // Example number
    const message = "Hello, I'm interested in the pool party details!";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="relative w-full overflow-hidden mt-20">
      <div className="flex justify-center items-center flex-col gap-16 uppercase">
        <h1 className="text-center mt-20 text-5xl font-semibold text-slate-600">
          Strawberry Moon Pool Party
        </h1>
        <Button onClick={handleChat} label={"WHATSAPP CHAT"} />
      </div>
      <div className="mt-20">
        <Carousel />
      </div>
    </div>
  );
};

export default Hero;

