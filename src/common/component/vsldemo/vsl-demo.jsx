"use client";

import React from "react";
import CalendlyWidget from "@/common/component/calendly/CalendlyWidget";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import GridSparkles from "@/common/component/element/GridSparkles";
import PixelCanvas from "@/common/component/element/PixelCanvas";
import Script from "next/script";

const VSLDemo = () => {
  return (
    <div className="h-auto min-h-screen px-5 lg:px-10 py-20 relative w-full bg-white dark:bg-black text-black dark:text-white">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div className="absolute w-full h-full z-[-1]">
        <GridSparkles />
        <div className="bg-gradient-to-b from-white dark:from-black from-0% via-white/80 dark:via-black/80 to-transparent absolute inset-0"></div>
        <div className="bg-gradient-to-l from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
        <div className="bg-gradient-to-r from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
      </div>

      <ComponentTransition>
        {/* Critical Alert Banner */}
        <div className="text-center mb-8 pt-16 relative z-10">
          <div className="inline-block bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-500/50 rounded-lg px-6 py-3 mb-8">
            <p className="text-red-700 dark:text-red-300 font-semibold text-sm">
              ⚠️ CRITICAL: Only 4 Implementation Slots Remaining in August 2025 - Next Available: September 2025
            </p>
          </div>
        </div>



        {/* Two-column layout: Benefits on left, calendar on right */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            
            {/* What Happens on This Call */}
            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">⚡</span>
                </div>
                                 <h2 className="text-xl font-semibold text-black dark:text-white">
                  What Happens on This Call?
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                                     <div>
                     <p className="text-black dark:text-white font-semibold">Live Profit Recovery Demo</p>
                     <p className="text-gray-700 dark:text-gray-300 text-sm">Watch AI agents handle YOUR actual customer scenarios and recover "dead" leads from your database</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                                     <div>
                     <p className="text-black dark:text-white font-semibold">$710,000 Loss Analysis</p>
                     <p className="text-gray-700 dark:text-gray-300 text-sm">We'll show you exactly how much you're losing monthly and how to plug the leak immediately</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                                     <div>
                     <p className="text-black dark:text-white font-semibold">Custom ROI Calculator</p>
                     <p className="text-gray-700 dark:text-gray-300 text-sm">Get your personalized revenue recovery projection - most dealers see $60,000+ from old leads alone within the first 30 days</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                                     <div>
                     <p className="text-black dark:text-white font-semibold">Q3 Implementation Roadmap</p>
                     <p className="text-gray-700 dark:text-gray-300 text-sm">Receive a clear, step-by-step plan to stop the bleeding and start profiting within 14 days</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Limited Availability */}
                         <div className="p-6 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-500/50 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-yellow-400 text-xl">⚠️</span>
                                 <h3 className="text-yellow-700 dark:text-yellow-300 font-bold text-lg">Limited Availability: Only 10 New Dealerships Per Month</h3>
              </div>
              
              <div className="mb-4">
                                 <p className="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">Why Only 10 Dealerships?</p>
                 <div className="space-y-2 text-sm text-yellow-700 dark:text-yellow-100">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Dedicated implementation specialist for each dealer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Custom AI training on your specific dealership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>White-glove setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>No long term commitment</span>
                  </div>
                </div>
              </div>

                             <div className="bg-yellow-100 dark:bg-yellow-800/30 rounded-lg p-3 border border-yellow-300 dark:border-yellow-600/30">
                <div className="flex items-center justify-between">
                  <div>
                                         <p className="text-yellow-800 dark:text-yellow-200 font-bold text-lg">4/10</p>
                     <p className="text-yellow-700 dark:text-yellow-300 text-sm">Spots Remaining for August 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-400 font-bold text-sm">Next Available: August 2025</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Calendly Widget */}
                     <div className="bg-white dark:bg-gray-900/30 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden group shadow-sm">
            {/* Header */}
            <div className="text-center mb-4">
                             <h3 className="text-black dark:text-white font-bold text-xl mb-2">Book Your Profit Recovery Call</h3>
               <p className="text-gray-700 dark:text-gray-300 text-sm">30-minute call • No commitment required • See immediate results</p>
            </div>

            {/* Pixel effects */}
            <div className="absolute top-0 left-0 w-32 h-32 z-0 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
              <PixelCanvas color="blue" gap={10} speed={45} />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 z-0 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
              <PixelCanvas color="purple" gap={10} speed={45} />
            </div>

                         {/* Calendly widget */}
             <div className="relative z-10">
               <CalendlyWidget
                 url="https://calendly.com/wes-automotiveai/30min?hide_event_type_details=1"
                 height="600px"
               />
             </div>

            {/* Bottom urgency */}
                         <div className="mt-4 text-center">
               <p className="text-red-600 dark:text-red-300 font-semibold text-sm">
                 (Only 4 August slots remaining)
               </p>
               <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-600 dark:text-gray-400">
                 <span>✓ Secure</span>
                 <span>✓ No spam</span>
                 <span>✓ No Long Term Commitment</span>
               </div>
            </div>
          </div>
        </div>
      </ComponentTransition>
    </div>
  );
};

export default VSLDemo;
