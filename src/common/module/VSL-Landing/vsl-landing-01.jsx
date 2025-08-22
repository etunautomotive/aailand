"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import VideoPlayer from "@/common/component/video player/videoplayer";
import PurpleHighlight from "@/common/component/Herohighlight/hero-highlight";
import { Check, Calendar } from "lucide-react";
import ScrollingBrands from "@/common/component/scrolling-brands/ScrollingBrands";



// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const VSLLanding01 = () => {

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">




      <ComponentTransition>
        {/* Main Content Container */}
        <div className="relative z-10 pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          
          {/* Scrolling Brands */}
          <div className="mb-8 relative z-10">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Trusted by leading automotive brands
              </p>
            </div>
            <ScrollingBrands />
          </div>
          
          {/* Critical Alert Banner */}
          <div className="text-center mb-6 relative z-10">
            <div className="inline-block bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-500/50 rounded-lg px-6 py-3">
              <p className="text-red-700 dark:text-red-300 font-semibold text-sm">
                ⚠️ Only <strong className="text-red-800 dark:text-red-200">6 Implementation Slots</strong> Remaining for September 2025 - Next Available: October 2025
              </p>
            </div>
          </div>
          {/* Desktop: Two-column layout, Mobile: Stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-screen lg:min-h-0">
            
            {/* Left Column - Content */}
            <motion.div
              className="space-y-4 lg:space-y-5"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Headlines */}
              <motion.div variants={fadeInUp} className="space-y-3">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                  <PurpleHighlight>Close More, Work Less.</PurpleHighlight>
                  <br />
                  AI Handles 100% of Lead Flow
                  <br />
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-normal -mt-4">
                    (better than you have ever seen)
                  </span>
                </h1>
                
                <h2 className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Convert <strong className="text-black dark:text-white">fresh + "dead"</strong> leads into booked appointments the same day with &lt;60s replies, 5+ automatic follow-ups, objection handling, qualification, and CRM sync. <strong className="text-black dark:text-white">Expect 4-10 extra deals/month per Sales Person</strong> on the System without adding headcount.
                </h2>
              </motion.div>

              {/* VSL Video */}
              <motion.div variants={fadeInUp} className="w-full">
                <div className="relative">
                  <VideoPlayer videoId="wamN2O6Zo2U" />
                </div>
              </motion.div>

              {/* Microproof Bullets */}
              <motion.div variants={fadeInUp} className="space-y-3">
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="flex-shrink-0 w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
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
                    <Check className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
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
                    <Check className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong className="text-black dark:text-white">10 Deals closed in the first 18 days of August I couldn't have done it without Automotive AI</strong>
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">- Superior Motors</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* Right Column - Scheduler */}
            <motion.div
              className="lg:sticky lg:top-24 space-y-4"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
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

              {/* Scheduler Widget */}
              <div className="bg-white dark:bg-gray-900/30 p-3 rounded-xl border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden group shadow-sm">
                


                {/* Header */}
                <div className="relative z-10 text-center mb-3">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      Book a 15-Min Call To See It For Yourself
                    </h3>
                  </div>
                </div>



                {/* Calendly Widget */}
                <div className="relative z-10" id="calendly-inline-widget">
                  <iframe
                    src="https://calendly.com/wes-automotiveai/automotive-ai-demo-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=b400ff"
                    width="100%"
                    height="380"
                    frameBorder="0"
                    title="Book 15-Min Lead Flow Audit"
                    className="rounded-lg"
                  ></iframe>
                </div>

                {/* Bottom urgency */}
                <div className="relative z-10 mt-3 text-center">
                  <p className="text-red-600 dark:text-red-300 font-semibold text-xs">
                    (Only 6 September slots remaining)
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-1 text-xs text-gray-600 dark:text-gray-400">
                    <span>✓ Secure</span>
                    <span>✓ No spam</span>
                    <span>✓ No Long Term Commitment</span>
                  </div>
                </div>

                {/* Compliance line */}
                <div className="relative z-10 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                    By booking, you consent to receive SMS/email about your demo. TCPA/CASL compliant. Opt‑out anytime.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Why Only 10 Dealerships - Full Width */}
          <motion.div 
            variants={fadeInUp}
            className="mt-8 lg:mt-12"
          >
            <div className="p-4 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/50 rounded-lg">
              <h3 className="text-center text-purple-800 dark:text-purple-200 font-semibold text-base mb-3">
                Why Only 10 Dealerships?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-bold text-sm">✓</span>
                  <span className="text-purple-800 dark:text-purple-200 text-sm">Dedicated implementation specialist for each dealer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-bold text-sm">✓</span>
                  <span className="text-purple-800 dark:text-purple-200 text-sm">Custom AI training on your specific dealership</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-bold text-sm">✓</span>
                  <span className="text-purple-800 dark:text-purple-200 text-sm">White-glove setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500 font-bold text-sm">✓</span>
                  <span className="text-purple-800 dark:text-purple-200 text-sm">No long term commitment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ComponentTransition>
    </div>
  );
};

export default VSLLanding01;
