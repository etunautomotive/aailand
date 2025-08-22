"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import GridSparkles from "@/common/component/element/GridSparkles";
import PixelCanvas from "@/common/component/element/PixelCanvas";
import VideoPlayer from "@/common/component/video player/videoplayer";
import SocialProof from "@/common/component/social-proof/SocialProof";
import PurpleHighlight from "@/common/component/Herohighlight/hero-highlight";
import Script from "next/script";
import { Check, Play, Users, TrendingUp, Calendar } from "lucide-react";

// Custom scrolling brands component
const ScrollingBrands = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      if (containerRef.current) {
        containerRef.current.style.setProperty("--animation-duration", "120s");
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      }
      setStart(true);
    }
  };

  const brands = [
    { light: "/aec-light.png", dark: "/aec-dark.png", alt: "AEC" },
    { light: "/autofinancecanada-dark.png", dark: "/autofinancecanada-light.png", alt: "Auto Finance Canada" },
    { light: "/candadrives-light.png", dark: "/candadrives-dark.png", alt: "Canada Drives" },
    { light: "/creditapp-light.png", dark: "/creditapp-dark.png", alt: "CreditApp" },
    { light: "/elm-light.png", dark: "/elm-dark.png", alt: "Elm Auto" },
    { light: "/fullcircle-light.png", dark: "/fullcircle-dark.png", alt: "Full Circle AI Solutions" },
    { light: "/pbs-light.png", dark: "/pbs-dark.png", alt: "PBS" },
    { light: "/skip;ight.png", dark: "/skip-dark.png", alt: "Skip with AI" },
    { light: "/sturgeon-light.png", dark: "/sturgeon-dark.png", alt: "Sturgeon" },
    { light: "/2ndchance-light.png", dark: "/2ndchance-dark.png", alt: "2nd Chance" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      style={{
        '--animation-duration': '120s',
        '--animation-direction': 'forwards'
      }}
    >
      <div
        ref={scrollerRef}
        className={`flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4 ${
          start ? 'animate-scroll' : ''
        }`}
      >
        {brands.map((brand, idx) => (
          <div key={idx} className="flex-shrink-0 relative">
            <img 
              src={brand.light} 
              alt={brand.alt} 
              className="h-[60px] w-auto object-contain dark:hidden"
            />
            <img 
              src={brand.dark} 
              alt={brand.alt} 
              className="h-[60px] w-auto object-contain hidden dark:block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

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
  // Ensure Calendly script is loaded and widgets are initialized
  useEffect(() => {
    const initCalendly = () => {
      if (window.Calendly) {
        // Force re-initialize any existing widgets
        const widgets = document.querySelectorAll('.calendly-inline-widget');
        widgets.forEach(widget => {
          if (widget && !widget.querySelector('iframe')) {
            widget.innerHTML = '';
          }
        });
        
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          if (window.Calendly && window.Calendly.initInlineWidget) {
            const widget = document.querySelector('.calendly-inline-widget');
            if (widget) {
              window.Calendly.initInlineWidget({
                url: 'https://calendly.com/wes-automotiveai/automotive-ai-demo-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=b400ff',
                parentElement: widget
              });
            }
          }
        }, 100);
      }
    };

    // Check if Calendly is already loaded
    if (window.Calendly) {
      initCalendly();
    } else {
      // Listen for script load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initCalendly();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkCalendly), 10000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* Background Effects */}
      <div className="absolute w-full h-full z-[-1]">
        <GridSparkles />
        <div className="bg-gradient-to-b from-white dark:from-black from-0% via-white/80 dark:via-black/80 to-transparent absolute inset-0"></div>
        <div className="bg-gradient-to-l from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
        <div className="bg-gradient-to-r from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
      </div>

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
                ⚠️ CRITICAL: Only 4 Implementation Slots Remaining in August 2025 - Next Available: September 2025
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
                  <PurpleHighlight>Never Work A Lead Again</PurpleHighlight>
                </h1>
                
                <h2 className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  AI replies in &lt;60s, follows up 24/7, qualifies, and books (Fresh + Old). Our AI agents automate entire first contact on new leads, revive "dead" leads, overcome objections, and sync everything to your CRM/Dealertrack—so your team only closes.
                </h2>
              </motion.div>

              {/* VSL Video */}
              <motion.div variants={fadeInUp} className="w-full">
                <div className="relative">
                  <VideoPlayer videoId="wamN2O6Zo2U" />
                </div>
              </motion.div>

              {/* Microproof Bullets */}
              <motion.div variants={fadeInUp} className="space-y-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="flex-shrink-0 w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-black dark:text-white">71 appointments</strong> from 40 "dead" leads in 7 days
                  </span>
                </div>
                
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="flex-shrink-0 w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-black dark:text-white">12 cars Sold</strong> in 18 days from reactivated pipeline ONLY
                  </span>
                </div>
                
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <div className="flex-shrink-0 w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Users className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong className="text-black dark:text-white">Trusted by 40 dealers</strong> across auto, RV, and powersports
                  </span>
                </div>
              </motion.div>

              {/* Limited Availability Section */}
              <motion.div variants={fadeInUp}>
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
                    What Happens on This Call?
                  </h2>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-bold mt-0.5 text-sm">✓</span>
                    <div>
                      <p className="text-black dark:text-white font-semibold text-sm">Live scan of your fresh + old lead flows</p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs">We'll analyze your current lead management and identify immediate opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-bold mt-0.5 text-sm">✓</span>
                    <div>
                      <p className="text-black dark:text-white font-semibold text-sm">See the exact scripts booking in your market</p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs">Watch proven AI conversation flows that are converting in your area</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-bold mt-0.5 text-sm">✓</span>
                    <div>
                      <p className="text-black dark:text-white font-semibold text-sm">14‑day rollout plan (integrations + compliance)</p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs">Get a clear roadmap to implementation with all technical details covered</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-bold mt-0.5 text-sm">✓</span>
                    <div>
                      <p className="text-black dark:text-white font-semibold text-sm">Revenue Recovery Guarantee</p>
                      <p className="text-gray-700 dark:text-gray-300 text-xs">If we don't book qualified appts from existing leads in 14 days, you don't pay</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scheduler Widget */}
              <div className="bg-white dark:bg-gray-900/30 p-3 rounded-xl border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden group shadow-sm">
                
                {/* Pixel effects */}
                <div className="absolute top-0 left-0 w-24 h-24 z-0 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
                  <PixelCanvas color="blue" gap={10} speed={45} />
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 z-0 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
                  <PixelCanvas color="purple" gap={10} speed={45} />
                </div>

                {/* Header */}
                <div className="relative z-10 text-center mb-3">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      Book Your Profit Recovery Call
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">
                    30-minute call • No commitment required • See immediate results
                  </p>
                </div>



                {/* Calendly Widget */}
                <div className="relative z-10" id="calendly-inline-widget">
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/wes-automotiveai/automotive-ai-demo-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=b400ff" 
                    style={{minWidth: "320px", height: "380px", position: "relative", zIndex: 1}}
                  />
                </div>

                {/* Bottom urgency */}
                <div className="relative z-10 mt-3 text-center">
                  <p className="text-red-600 dark:text-red-300 font-semibold text-xs">
                    (Only 4 August slots remaining)
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
        </div>
      </ComponentTransition>
    </div>
  );
};

export default VSLLanding01;
