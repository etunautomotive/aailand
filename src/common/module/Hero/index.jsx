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
    <div className="relative min-h-screen flex flex-col px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Above-the-fold wrapper (match bookademo height) */}
      <div className="relative min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero Content */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="w-full max-w-[1500px] mx-auto">
          <div className="flex flex-col items-center justify-center text-center h-full">
            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 mb-6 md:mb-8 px-4 tracking-tight"
              variants={fadeInUp}
            >
              A new AI system created by sales people, for sales people.
            </motion.p>
            
            {/* Main Heading with TextType Effect */}
            <motion.div
              className="w-full xl:w-[85%] 2xl:w-[85%] flex justify-center"
              variants={fadeInUp}
            >
              <div className="text-center px-4 mb-8 md:mb-10">
                {/* Static part */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent leading-[1.3] tracking-tighter py-4">
                  The AI way to work leads
                </h1>
                
                {/* Dynamic typing text */}
                <div className="mt-8">
                  <TextType
                    text={[
                      "Engage your leads in 30 seconds",
                      "Increase your conversion by 391%",
                      "Maximize your lead spend",
                      "Re-engage your old leads",
                      "Turn wasted spend into revenue",
                      "Let AI handle your follow ups",
                      "Let AI handle your objections",
                      "Let AI do your data entry",
                      "Book more appointments",
                      "Close more deals",
                      "Increase your revenue",
                      "Increase your profitability",
                      "Increase your ROI",
                      "Scale your dealership",
                    ]}
                    as="h2"
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black dark:text-white font-medium leading-relaxed"
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
              className="w-full flex justify-center mt-4 mb-8 md:mb-12 z-20"
              variants={fadeInUp}
            >
              <GlassButton
                href="/vsldemo"
                size="lg"
                variant="primary"
              >
                Maximize Your Leads Today
              </GlassButton>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scrolling Brands - above the fold */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-0">
        <div className="text-center mb-2">
          <p className="text-xs text-gray-600 dark:text-gray-400 tracking-tight">
            Trusted by leading automotive brands
          </p>
        </div>
        <ScrollingBrands />
      </div>

      {/* Scroll Indicator - match bookademo styling */}
      <motion.div
        className="flex justify-center mt-6 md:mt-8 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a href="#paid-leads" className="flex flex-col items-center">
          <motion.div className="flex flex-col items-center cursor-pointer" variants={bounce} animate="animate">
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 tracking-tight">Scroll to see more</p>
            <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          </motion.div>
        </a>
      </motion.div>

      </div>


      {/* AAI Works Your Paid Leads Section */}
      <motion.div
        id="paid-leads"
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <ShinyTextOnLoad 
              text="AAI Works Your Paid Leads" 
              shimmerWords={["Paid", "Leads"]}
              speed={2}
              shimmerDuration={4000}
              className="text-3xl md:text-4xl font-light"
            />
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            Transform your paid campaigns with AI-powered automation that never sleeps
          </p>
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
                <source src="/videos/canadadrives-lead-qualifcation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl" />
            </div>
            
            {/* Video description */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
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

      {/* AAI Takes Your Notes For You Section */}
      <motion.div
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <ShinyTextOnLoad 
              text="AAI Takes Your Notes" 
              shimmerWords={["Notes"]}
              speed={2}
              shimmerDuration={4000}
              className="text-3xl md:text-4xl font-light"
            />
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            Automatically capture and organize customer interactions without lifting a finger
          </p>
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
                <source src="/videos/data-extraction-highlight-ricky-daily.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl" />
            </div>
            
            {/* Video description */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Watch how AAI automatically extracts and organizes customer data from conversations
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* AAI Handles Your Follow-ups Section */}
      <motion.div
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <ShinyTextOnLoad 
              text="AAI Handles Your Follow-ups" 
              shimmerWords={["Follow-ups"]}
              speed={2}
              shimmerDuration={4000}
              className="text-3xl md:text-4xl font-light"
            />
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            Never miss another follow-up with AI that remembers every conversation and next steps
          </p>
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
                <source src="/videos/automated follow ups.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl" />
            </div>
            
            {/* Video description */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
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
