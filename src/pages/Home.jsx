import React from "react";
import Hero from "../Components/Home/Hero";
import About from "./About";
import Marquee from "../Components/Home/Marquee";
import Menu from "./Menu";
import FloorPlan from "./FloorPlan";
import Contact from "./Contact";
import ClientReview from "./ClientReview";
import ScrollToTop from "../common/ScrollTop";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
        <Marquee />
      </section>

      <section id="menu">
        <Menu />
      </section>
      <section id="floor-plan">
        <FloorPlan />
      </section>
      <section id="contact">
        <Contact />
        <ClientReview />
      </section>

      <ScrollToTop />
    </div>
  );
};

export default Home;
