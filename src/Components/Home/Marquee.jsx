import React from "react";
import { bgImage } from "../../assets";

const Marquee = () => {
  return (
    <div
      className="relative py-10 bg-cover bg-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative z-10 flex whitespace-nowrap">
        <p className="animate-marquee text-white text-2xl font-semibold uppercase">
          🔹Strawberry Moon 🔹Strawberry Moon 🔹Strawberry Moon 🔹Strawberry Moon
          🔹Strawberry Moon 🔹Strawberry Moon 🔹Strawberry Moon 🔹Strawberry Moon
          🔹Strawberry Moon 🔹Strawberry Moon 🔹Strawberry Moon
        </p>
      </div>
    </div>
  );
};

export default Marquee;
