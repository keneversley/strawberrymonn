import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { carosalData } from "../../constant/carosalData";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const handleNavigation = (label) => {
    window.open("https://booketing.com/microsite/vipstunna/", "_blank");
    // if (typeof label !== "string") {
    //   console.error("Invalid label type:", label);
    //   return;
    }
    // switch (label.toLowerCase()) {
    //   case "event":
    //     window.location.href = "/event";
    //     break;
    //   case "reserve table":
    //     window.location.href = "/reserve-table";
    //     break;
    //   case "checkout our parties":
    //     window.location.href = "/checkout-parties";
    //     break;
    //   default:
    //     console.log("No matching page for:", label);
    // }
  };
  // const handleBuyTicket = () => {
  //   window.location.href = "/buy-ticket";
  // };
  const handleBuyTicket = () => {
    window.open("https://booketing.com/microsite/vipstunna/", "_blank");
  };
  
  return (
    <Swiper
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      grabCursor={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {carosalData.map((item) => (
        <SwiperSlide key={item.id} className="relative">
          {item.type === "video" ? (
            <video
              src={item.image}
              autoPlay
              loop
              muted
              className="w-full h-[300px] md:h-[400px] object-cover "
            />
          ) : (
            <img
              src={item.image}
              alt={item.label || "Slide Image"}
              className="w-full h-[300px] md:h-[400px] object-cover "
            />
          )}
          {(item.label || item.labelTwo) && (
            <div className="w-full absolute bottom-4  bg-black bg-opacity-10 text-white p-2 rounded">
              {item.label && (
                <Button
                  label={item.label}
                  className="w-full"
                  onClick={() => handleNavigation(item.label)}
                />
              )}
              {item.labelTwo && (
                <button
                  className="w-full text-center uppercase hover:underline text-white"
                  onClick={handleBuyTicket}
                >
                  {item.labelTwo}
                </button>
              )}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
