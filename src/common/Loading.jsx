import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="animate-pulse flex items-center">
        <div className="h-3 w-5 rounded-xl bg-red-400"></div>
        <div className=" text-red-400   uppercase">now loading...</div>
      </div>
    </div>
  );
};

export default Loading;
