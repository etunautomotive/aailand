"use client";

import React from "react";
import CalendlyWidget from "@/common/component/calendly/CalendlyWidget";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import GridSparkles from "@/common/component/element/GridSparkles";
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
                ⚠️ Only <strong className="text-red-800 dark:text-red-200">6 Implementation Slots</strong> Remaining for September 2025 - Next Available: October 2025
              </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column - Hero Content + What Happens */}
          <div className="space-y-6">
            
            {/* Main Headline */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
                Never Work A Lead Again
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Convert fresh + "dead" leads into booked appointments the same day with &lt;60s replies, 5+ automatic follow-ups, objection handling, and qualification—expect 4-10 extra deals/month without adding headcount.
              </p>
            </div>

            {/* What Happens on This Call */}
            <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">⚡</span>
                </div>
                <h2 className="text-lg font-semibold text-black dark:text-white">
                  What happens on the call
                </h2>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-0.5 text-sm">✓</span>
                  <div>
                    <p className="text-black dark:text-white font-semibold text-sm">Live Demo of Skilled AI Agents</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-0.5 text-sm">✓</span>
                  <div>
                    <p className="text-black dark:text-white font-semibold text-sm">Chose The Agents That Would Work In Your Dealership</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-0.5 text-sm">✓</span>
                  <div>
                    <p className="text-black dark:text-white font-semibold text-sm">4-Day Rollout Plan To Get Your System Cranking</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Microproof Bullets */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="flex-shrink-0 w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-black dark:text-white">19 appointments Booked in the first 24 hours off 200 old leads.</strong>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">- The Used Car Depot</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="flex-shrink-0 w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-black dark:text-white">I used to book 60 appointments in a month, my AI got 71 in the first week.</strong>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">- GTA Auto Finance</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="flex-shrink-0 w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-black dark:text-white">10 Deals closed in the first 18 days of August I couldn&apos;t have done it without Automotive AI</strong>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">- Superior Motors</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <div>
                  <span className="font-semibold text-black dark:text-white">Trusted by 40 dealers</span>
                  <span className="text-gray-600 dark:text-gray-400"> across auto, RV, and powersports</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <div>
                  <span className="font-semibold text-black dark:text-white">9 appointments</span>
                  <span className="text-gray-600 dark:text-gray-400"> from 100 "dead" leads in 7 days</span>
                </div>
              </div>

                                           <div className="bg-yellow-100 dark:bg-yellow-800/30 rounded-lg p-3 border border-yellow-300 dark:border-yellow-600/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-800 dark:text-yellow-200 font-bold text-lg">6/10</p>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">Spots Remaining for September 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-400 font-bold text-sm">Next Available: October 2025</p>
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
               <p className="text-gray-700 dark:text-gray-300 text-sm">15-minute call • No commitment required • See immediate results</p>
            </div>

              {/* Calendly Widget */}
              <div className="relative">
                <CalendlyWidget
                  url="https://calendly.com/wes-automotiveai/30min?hide_event_type_details=1"
                  height="650px"
                />
              </div>

            {/* Bottom urgency */}
                         <div className="mt-4 text-center">
               <p className="text-red-600 dark:text-red-300 font-semibold text-sm">
                 (Only 6 September slots remaining)
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