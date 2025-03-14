"use client";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import PricingCard from "@/common/component/element/PricingCard";
import SectionHeading from "@/common/component/element/SectionHeading";
import React, { useEffect } from "react";
import { AiFillSliders } from "react-icons/ai";

export default function Pricing() {
  useEffect(() => {
    // Trigger a tiny scroll on mount
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen w-full mx-auto px-5 md:px-10 xl:px-20 py-32 relative flex justify-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px]">
          <div
            className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-blue-500/20 via-blue-500/5 to-transparent rounded-[100%] blur-3xl"
            style={{
              animation:
                "pricing-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-[1500px] w-full">
        <ComponentTransition className="flex justify-center py-5">
          <SectionHeading
            title="Early Adopter Pricing"
            icon={<AiFillSliders size={30} />}
          />
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="flex justify-center items-center flex-col mb-16"
        >
          <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[80%] text-transparent font-bold">
            Contact Us For Pricing
          </h1>
          <p className="text-base md:text-xl text-center text-neutral-500 dark:text-neutral-300 max-w-2xl">
            Get in touch with our team to discuss custom pricing options
            tailored to your dealership&apos;s needs.
          </p>
        </ComponentTransition>

        <div className="w-full flex justify-center relative z-20">
          <PricingCard />
        </div>
      </div>
    </div>
  );
}
