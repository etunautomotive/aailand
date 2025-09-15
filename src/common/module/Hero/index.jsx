"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlassButton from "@/components/ui/GlassButton";
import TextType from "@/components/ui/TextType";

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

const Hero = () => {

  return (
    <div className="relative min-h-screen flex flex-col px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Hero Content */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="w-full max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 mb-6 md:mb-8 px-4 tracking-tight"
              variants={fadeInUp}
            >
              A new AI system created by Auto Sales People, forSales People.
            </motion.p>
            
            {/* Main Heading with TextType Effect */}
            <motion.div
              className="w-full xl:w-[85%] 2xl:w-[85%] flex justify-center"
              variants={fadeInUp}
            >
              <div className="text-center px-4 mb-8 md:mb-12">
                {/* Static part */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent leading-[1.15] sm:leading-[1.1] tracking-tight py-2">
                  The AI Way to Work Leads
                </h1>
                
                {/* Dynamic typing text */}
                <div className="mt-4">
                  <TextType
                    text={[
                      "For All Auto Dealerships",
                      "For All Lead Sources",
                      "Engage Your Leads in 30 Seconds",
                      "Increase Your Conversion by 391%",
                      "Maximize Your Lead Spend",
                      "Re-engage Your Old Leads",
                      "Turn Wasted Spend into Revenue",
                      "Let AI Handle Your Follow Ups",
                      "Let AI Handle Your Objections",
                      "Let AI Do Your Data Entry",
                      "Book More Appointments",
                      "Close More Deals",
                      "Increase Your Revenue",
                      "Increase Your Profitability",
                      "Increase Your ROI",
                      "Scale Your Dealership",
                    ]}
                    as="h2"
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black dark:text-white font-medium"
                    typingSpeed={80}
                    deletingSpeed={50}
                    pauseDuration={2500}
                    initialDelay={1000}
                    loop={true}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName="text-purple-600 dark:text-purple-400"
                    startOnVisible={true}
                  />
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="w-full flex justify-center mt-4 mb-12 md:mb-16 z-20"
              variants={fadeInUp}
            >
              <GlassButton
                href="/vsldemo"
                size="lg"
                variant="primary"
              >
                See How AI Fixes This
              </GlassButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h3 className="text-lg text-gray-600 dark:text-gray-400 font-medium">
            See AAI in Action - Full Lead Qualification Demo
          </h3>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="relative group"
        >
          {/* Glass morphism container for video */}
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-lg overflow-hidden p-4">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            
            {/* Video container with aspect ratio */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/20">
              <video
                className="w-full h-full object-cover rounded-xl"
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="" // You can add a poster image if you have one
              >
                <source src="/videos/Full Lead Qualification AAI.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl" />
            </div>
            
            {/* Video description */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Watch how AAI automatically qualifies leads, handles objections, and books appointments
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional features callouts */}
        <motion.div 
          variants={fadeInUp}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { title: "30 Second Response", desc: "AI responds to leads instantly" },
            { title: "Full Qualification", desc: "Asks all the right questions" },
            { title: "Books Appointments", desc: "Schedules directly to your calendar" }
          ].map((feature, index) => (
            <div key={index} className="bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-lg p-4 text-center">
              <h4 className="text-sm font-semibold text-black dark:text-white mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Hero;
