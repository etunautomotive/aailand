"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlassButton from "@/components/ui/GlassButton";
import TextType from "@/components/ui/TextType";
import ScrollingBrands from "@/common/component/scrolling-brands/ScrollingBrands";
import { ChevronDown } from "lucide-react";
import ShinyTextOnLoad from "@/components/ui/ShinyTextOnLoad";

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

const bounce = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {

  return (
    <div className="relative min-h-screen flex flex-col px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-28">
      {/* Above-the-fold wrapper with improved flex layout */}
      <div className="relative min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero Content with improved flex properties */}
      <motion.div
        className="flex-1 flex items-center justify-center min-h-0"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="w-full max-w-[1500px] mx-auto flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center text-center w-full flex-shrink-0">
            {/* Subtitle with better mobile spacing */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 tracking-tight flex-shrink-0"
              variants={fadeInUp}
            >
              A new AI system created by Auto Sales People, for Sales People.
            </motion.p>
            
            {/* Main Heading with TextType Effect - improved flex layout */}
            <motion.div
              className="w-full max-w-6xl mx-auto flex justify-center flex-shrink-0"
              variants={fadeInUp}
            >
              <div className="text-center px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 md:mb-10 w-full max-w-5xl mx-auto">
                {/* Main Header */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent leading-tight tracking-tight py-1 sm:py-2 whitespace-nowrap mb-4 sm:mb-6">
                  The AI Way to Work Leads
                </h1>
                
                {/* Dynamic typing text with improved mobile scaling */}
                <div className="mt-4 sm:mt-6 md:mt-8">
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
                    as="h3"
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-black dark:text-white font-medium leading-relaxed break-words"
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

            {/* CTA Button with improved mobile spacing */}
            <motion.div 
              className="w-full flex justify-center mt-2 sm:mt-4 mb-6 sm:mb-8 md:mb-12 z-20 flex-shrink-0"
              variants={fadeInUp}
            >
              <GlassButton
                href="/vsldemo"
                size="lg"
                variant="primary"
              >
                See How It Works
              </GlassButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scrolling Brands - above the fold with improved mobile layout */}
      <div className="w-full max-w-[1500px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 mt-4 sm:mt-6 mb-0 flex-shrink-0">
        <div className="text-center mb-2">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 tracking-tight">
            Trusted by leading automotive brands
          </p>
        </div>
        <ScrollingBrands />
      </div>

      {/* Scroll Indicator with improved mobile spacing */}
      <motion.div
        className="flex justify-center mt-4 sm:mt-6 md:mt-8 pb-8 sm:pb-12 md:pb-16 flex-shrink-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a href="#paid-leads" className="flex flex-col items-center">
          <motion.div className="flex flex-col items-center cursor-pointer" variants={bounce} animate="animate">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 tracking-tight">Scroll to see more</p>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 dark:text-gray-500" />
          </motion.div>
        </a>
      </motion.div>

      </div>


      {/* AAI Works Your Paid Leads Section with improved mobile layout */}
      <motion.div
        id="paid-leads"
        className="w-full max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 mb-12 sm:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 px-2">
            <ShinyTextOnLoad 
              text="AAI Works Your Paid Leads" 
              shimmerWords={["Paid", "Leads"]}
              speed={2}
              shimmerDuration={4000}
              className="text-2xl sm:text-3xl md:text-4xl font-light"
            />
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 max-w-2xl mx-auto px-2">
            Transform your paid campaigns with AI-powered automation that never sleeps
          </p>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="relative group"
        >
          {/* Glass morphism container for video with improved mobile padding */}
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden p-2 sm:p-4">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            
            {/* Video container with aspect ratio */}
            <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-black/20">
              <video
                className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="" // You can add a poster image if you have one
              >
                <source src="/videos/canadadrives-lead-qualifcation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-lg sm:rounded-xl" />
            </div>
            
            {/* Video description with improved mobile text */}
            <div className="mt-3 sm:mt-4 text-center px-2">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Watch how AAI works with third party lead providers to maximize conversions
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* AAI Reactivates Dormant Leads Section - Commented out for now */}
      {/* <motion.div
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
            AAI Reactivates Dormant Leads
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            Turn your old leads into new opportunities with intelligent re-engagement campaigns
          </p>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="relative group"
        >
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-lg overflow-hidden p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <p>Content frame for dormant lead reactivation</p>
            </div>
          </div>
        </motion.div>
      </motion.div> */}

      {/* AAI Takes Your Notes For You Section with improved mobile layout */}
      <motion.div
        className="w-full max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 mb-12 sm:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 px-2">
            <ShinyTextOnLoad 
              text="AAI Takes Your Notes" 
              shimmerWords={["Notes"]}
              speed={2}
              shimmerDuration={4000}
              className="text-2xl sm:text-3xl md:text-4xl font-light"
            />
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 max-w-2xl mx-auto px-2">
            Automatically capture and organize customer interactions without lifting a finger
          </p>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="relative group"
        >
          {/* Glass morphism container for video with improved mobile padding */}
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden p-2 sm:p-4">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            
            {/* Video container with aspect ratio */}
            <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-black/20">
              <video
                className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="" // You can add a poster image if you have one
              >
                <source src="/videos/data-extraction-highlight-ricky-daily.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-lg sm:rounded-xl" />
            </div>
            
            {/* Video description with improved mobile text */}
            <div className="mt-3 sm:mt-4 text-center px-2">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Watch how AAI automatically extracts and organizes customer data from conversations
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* AAI Handles Your Follow-ups Section with improved mobile layout */}
      <motion.div
        className="w-full max-w-[1200px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 mb-12 sm:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 px-2">
            <ShinyTextOnLoad 
              text="AAI Handles Your Follow-ups" 
              shimmerWords={["Follow-ups"]}
              speed={2}
              shimmerDuration={4000}
              className="text-2xl sm:text-3xl md:text-4xl font-light"
            />
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 max-w-2xl mx-auto px-2">
            Never miss another follow-up with AI that remembers every conversation and next steps
          </p>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="relative group"
        >
          {/* Glass morphism container for video with improved mobile padding */}
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden p-2 sm:p-4">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            
            {/* Video container with aspect ratio */}
            <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-black/20">
              <video
                className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="" // You can add a poster image if you have one
              >
                <source src="/videos/automated follow ups.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-lg sm:rounded-xl" />
            </div>
            
            {/* Video description with improved mobile text */}
            <div className="mt-3 sm:mt-4 text-center px-2">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Watch how AAI automatically manages follow-ups and keeps your leads engaged
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* AAI Manages Your Pipeline Section - Commented out for now */}
      {/* <motion.div
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
            AAI Manages Your Pipeline
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            Keep your sales pipeline organized and moving with intelligent lead management
          </p>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="relative group"
        >
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-lg overflow-hidden p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <p>Content frame for pipeline management</p>
            </div>
          </div>
        </motion.div>
      </motion.div> */}

    </div>
  );
};

export default Hero;
