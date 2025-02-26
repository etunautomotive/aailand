import About from "@/common/module/About";
import React from "react";

export const metadata = {
  title: "About Us - Teaser",
  description: "About Us",
};

const page = () => {
  return (
    <div className="mt-20 flex justify-center w-full overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto overflow-hidden">
        <About />
      </div>
    </div>
  );
};

export default page;
