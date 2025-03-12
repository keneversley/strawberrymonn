import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-cyan-700  text-white rounded hover:animate-pulse uppercase ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
