import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import Loading from "../common/Loading";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
