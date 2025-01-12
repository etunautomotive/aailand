import React from "react";
import Hero from "../Hero";
import Service from "../Service";
import Solution from "../Solution";
import Faq from "../Faq";
import Blog from "../Blog";
import Feedback from "../Feedback";
import Feature from "../Feature/Feature";
import Pricing from "../Pricing/Pricing";
import Interest from "../EndSection/Interest";
import About from "../About";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Solution />
      <About />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Feedback /> */}
      {/* <Interest /> */}
    </div>
  );
};

export default Homepage;
