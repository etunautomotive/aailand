import React from "react";
import Hero from "../Hero";
import Solution from "../Solution";
import Agents from "../Agents";

const Homepage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Solution />
      <Agents />
    </div>
  );
};

export default Homepage;
