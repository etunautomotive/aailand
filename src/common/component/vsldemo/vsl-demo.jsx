"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { Calendar } from "lucide-react";
import ScrollingBrands from "@/common/component/scrolling-brands/ScrollingBrands";
import GlassNavbar from "@/components/ui/GlassNavbar";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import { useTheme } from "next-themes";

// Star rating component
const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-3 h-3 ${
            index < rating 
              ? "text-yellow-400 fill-yellow-400" 
              : "text-gray-300 fill-gray-300 dark:text-gray-600 dark:fill-gray-600"
          }`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.612-.921 1.912 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
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

const VSLDemo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Glass Navbar */}
      <GlassNavbar />
      
      {/* Subtle Animated Background - full viewport width */}
      {mounted && (
        <BackgroundGradientAnimation 
          containerClassName="fixed inset-0 z-0 h-screen w-screen"
          gradientBackgroundStart={isDark ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"}
          gradientBackgroundEnd={isDark ? "rgb(15, 15, 15)" : "rgb(255, 255, 255)"}
          firstColor="183, 148, 244"
          secondColor="196, 181, 253"
          thirdColor="167, 139, 250"
          fourthColor="186, 164, 247"
          fifthColor="221, 214, 254"
          pointerColor="196, 181, 253"
          size="30%"
          blendingValue="normal"
          interactive={true}
        />
      )}
      
      <div className="relative flex justify-center w-full">
        <div className="w-full max-w-[1500px] mx-auto pt-20 sm:pt-24 md:pt-28 lg:pt-32 relative z-20">
          <ComponentTransition>
            {/* Main Content Container */}
            <div className="relative z-10 pb-8 sm:pb-12 px-3 sm:px-4 md:px-6 lg:px-8">{/* Optimized spacing and padding for mobile */}
          
          {/* Full Width Headlines */}
          <motion.div variants={fadeInUp} className="space-y-1 mb-6 lg:mb-8 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent px-2 sm:px-4 mb-6 md:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight py-2">
              {/* Mobile-optimized line breaks */}
              <span className="block sm:hidden">Book a Demo Today to See</span>
              <span className="block sm:hidden">Why Dealers are Using</span>
              <span className="block sm:hidden">Automotive Ai</span>
              
              {/* Desktop line breaks */}
              <span className="hidden sm:block">Book a Demo Today to See Why </span>
              <span className="hidden sm:block">Dealers are Using Automotive Ai</span>
            </h1>
          </motion.div>

          {/* Mobile: Stacked layout, Desktop: Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-start min-h-[calc(100vh-10rem)] sm:min-h-[calc(100vh-12rem)] lg:min-h-0">
            
            {/* Left Column - Content */}
            <motion.div
              className="space-y-1.5 sm:space-y-2 lg:space-y-3"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >

              {/* Testimonial Bullets */}
              <motion.div variants={fadeInUp} className="space-y-1 sm:space-y-1.5">
                {/* Named testimonials first */}
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-2 sm:p-2.5 rounded-lg border border-white/20 dark:border-white/10 shadow-lg">
                  <div className="flex flex-col text-xs">
                    <div className="mb-2">
                      <StarRating rating={5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-700 dark:text-gray-200">
                        <strong className="text-black dark:text-white">AAI helped me break every 30-day record. 230 re-engaged customers, $67K Gross in one month from reactivating our old leads.</strong>
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">- Jaedynn Cutler, Approval Express Canada</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-2 sm:p-2.5 rounded-lg border border-white/20 dark:border-white/10 shadow-lg">
                  <div className="flex flex-col text-xs">
                    <div className="mb-2">
                      <StarRating rating={5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-700 dark:text-gray-200">
                        <strong className="text-black dark:text-white">Before Auto AI, we were at a 40-60% contact rate on paid leads, now we are up to 84%!! HUGE DIFFERENCE!!</strong>
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">- Kevin Maisch, Advanced Auto Finance</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-2 sm:p-2.5 rounded-lg border border-white/20 dark:border-white/10 shadow-lg">
                  <div className="flex flex-col text-xs">
                    <div className="mb-2">
                      <StarRating rating={5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-700 dark:text-gray-200">
                        <strong className="text-black dark:text-white">System is amazing, I have 10 out so far this month and pushing for 15-20 for 100k+ doing it all front to back myself. Couldn&apos;t do it without AAI</strong>
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">- Thomas Powell, Straightline Kia</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-2 sm:p-2.5 rounded-lg border border-white/20 dark:border-white/10 shadow-lg">
                  <div className="flex flex-col text-xs">
                    <div className="mb-2">
                      <StarRating rating={5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-700 dark:text-gray-200">
                        <strong className="text-black dark:text-white">It&apos;s like having a sniper on your sales team. Never misses, never gets tired. Total game changer.</strong>
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">- Michael Filzwieser, Vancouver Auto Credit</span>
                    </div>
                  </div>
                </div>

                {/* Company-only testimonials last */}
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-2 sm:p-2.5 rounded-lg border border-white/20 dark:border-white/10 shadow-lg">
                  <div className="flex flex-col text-xs">
                    <div className="mb-2">
                      <StarRating rating={5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-700 dark:text-gray-200">
                        <strong className="text-black dark:text-white"> 19 leads re-engaged in the first 24 hours off 200 old leads.</strong>
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">- The Used Car Depot</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-2 sm:p-2.5 rounded-lg border border-white/20 dark:border-white/10 shadow-lg">
                  <div className="flex flex-col text-xs">
                    <div className="mb-2">
                      <StarRating rating={5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-700 dark:text-gray-200">
                        <strong className="text-black dark:text-white">Our team used to book 60 appointments in a month, we re-activated our old leads with AI and got 71 in the first week. You'd be crazy not to try it.</strong>
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">- Alex, GTA Auto Finance</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* Right Column - Scheduler */}
            <motion.div
              className="lg:sticky lg:top-24 space-y-1.5 sm:space-y-2 mt-4 lg:mt-0"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >

              {/* Scheduler Widget */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-white/20 dark:border-white/10 shadow-lg relative overflow-hidden group">
                {/* Header */}
                <div className="relative z-10 text-center mb-2 sm:mb-3">
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    <h3 className="text-base sm:text-lg font-bold text-black dark:text-white text-center leading-tight">
                      Book a 15-Min Call To See It For Yourself
                    </h3>
                  </div>
                </div>

                {/* Calendly Widget */}
                <div className="relative z-10" id="calendly-inline-widget">
                  <iframe
                    src="https://calendly.com/wes-automotiveai/automotive-ai-demo-clone?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=b400ff"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    title="Book 15-Min Lead Flow Audit"
                    className="rounded-lg"
                  ></iframe>
                </div>

                {/* Bottom features */}
                <div className="relative z-10 mt-3 text-center">
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

          {/* Social Proof at Bottom */}
          <motion.div 
            variants={fadeInUp}
            className="mt-8 lg:mt-12 relative z-10"
          >
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Trusted by leading automotive brands
              </p>
            </div>
            <ScrollingBrands />
          </motion.div>

            </div>
          </ComponentTransition>
        </div>
      </div>
    </div>
  );
};

export default VSLDemo;