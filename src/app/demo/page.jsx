"use client";

import React from "react";
import CalendlyWidget from "@/common/component/calendly/CalendlyWidget";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import GridSparkles from "@/common/component/element/GridSparkles";
import PixelCanvas from "@/common/component/element/PixelCanvas";
import Script from "next/script";

export default function DemoPage() {
  return (
    <div className="h-auto min-h-screen max-w-[1500px] px-5 lg:px-10 py-20 mx-auto relative">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div className="absolute w-[100%] h-full z-[-1]">
        <GridSparkles />
        <div className="bg-gradient-to-b from-white dark:from-black from-0% via-white/80 dark:via-black/80 to-transparent absolute inset-0"></div>
        <div className="bg-gradient-to-l from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
        <div className="bg-gradient-to-r from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
      </div>

      <ComponentTransition>
        <div className="text-center mb-12 pt-16 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-black from-50% to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent py-4">
            Schedule a Demo
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto mt-4">
            Let the system speak for itself.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-black/50 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 relative z-20 overflow-hidden group">
          {/* Top left pixel effect */}
          <div className="absolute top-0 left-0 w-64 h-64 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
            <PixelCanvas color="blue" gap={10} speed={45} />
          </div>

          {/* Bottom right pixel effect */}
          <div className="absolute bottom-0 right-0 w-64 h-64 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
            <PixelCanvas color="purple" gap={10} speed={45} />
          </div>

          {/* Subtle background effect */}
          <div className="absolute inset-0 z-0 opacity-5">
            <PixelCanvas color="green" gap={20} speed={30} />
          </div>

          {/* Gradient overlay for depth */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 z-0"></div>

          {/* Calendly widget with relative positioning to appear above effects */}
          <div className="relative z-10">
            <CalendlyWidget
              url="https://calendly.com/wes-automotiveai/30min?hide_event_type_details=1"
              height="700px"
            />
          </div>
        </div>
      </ComponentTransition>
    </div>
  );
}
