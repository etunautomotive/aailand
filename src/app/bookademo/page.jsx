"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, ChevronDown } from "lucide-react";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import { InfiniteMovingCards } from "@/common/component/testimonial/infinitemovingcards";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import ScrollingBrands from "@/common/component/scrolling-brands/ScrollingBrands";
import GlassNavbar from "@/components/ui/GlassNavbar";
import GlassButton from "@/components/ui/GlassButton";
import { useTheme } from "next-themes";

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
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

const BookADemo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full">
      {/* Glass Navbar */}
      <GlassNavbar />
      
      <div className="relative flex justify-center w-full">
        {/* Subtle Animated Background - visible above the fold only */}
        {mounted && (
          <BackgroundGradientAnimation 
            containerClassName="absolute inset-0 z-10 h-screen w-full"
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
        
        <div className="w-full max-w-[1500px] mx-auto pt-20 sm:pt-24 md:pt-28 relative z-20">
        {/* Hero Section */}
        <div className="relative min-h-[calc(100vh-3rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4rem)] flex flex-col">


          {/* Hero Content */}
          <motion.section 
            className="flex-1 flex items-center md:mb-10 px-4 sm:px-6 lg:px-10 mt-1 relative"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="flex flex-col justify-center md:top-0 mt-2 lg:mt-3 items-center w-full">
              <div className="relative z-10 flex flex-col items-center justify-center">
                <motion.div 
                  className="text-lg md:text-xl lg:text-2xl text-center text-gray-500 dark:text-gray-400 mb-6 md:mb-8 px-4 tracking-tight"
                  variants={fadeInUp}
                >
                  We help you capture the other 90% while lowering BDC costs, so you can scale your dealership.
                </motion.div>
                
                <motion.div
                  className="w-full xl:w-[85%] 2xl:w-[85%] flex justify-center"
                  variants={fadeInUp}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent px-4 mb-8 md:mb-12 leading-[1.1] tracking-tight py-2">
                    <span className="block">Spending Money on Leads or Advertising?</span>
                    <span className="block">9 Out of 10 of Your Dollars</span>
                    <span className="block">Are Going to Waste..</span>
                  </h1>
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                  className="w-full flex justify-center mt-4 mb-20 md:mb-28 z-20"
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

                {/* Trusted By Banner */}
                <motion.div 
                  className="w-full max-w-[1500px] mx-auto mt-0"
                  variants={fadeInUp}
                >
                  <div className="text-center mb-2">
                    <p className="text-xs text-gray-600 dark:text-gray-400 tracking-tight">
                      Trusted by leading automotive brands
                    </p>
                  </div>
                  <ScrollingBrands />
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                  className="flex justify-center mt-12 md:mt-16 pb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  <motion.div
                    className="flex flex-col items-center cursor-pointer"
                    variants={bounce}
                    animate="animate"
                  >
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 tracking-tight">
                      Scroll to see more
                    </p>
                    <ChevronDown 
                      className="w-5 h-5 text-gray-400 dark:text-gray-500" 
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Problem vs Solution Section */}
        <motion.section 
          className="w-full py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            {/* Section Heading */}
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent tracking-tight leading-tight">
                Where Leads Slip Through The Cracks, And How We Stop It.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Every step of the lead journey has gaps where potential customers disappear. Here's how AI seals every crack.
              </p>
            </motion.div>

            {/* Comparison Headers */}
            <motion.div 
              className="grid grid-cols-2 gap-8 mb-12"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-start">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" />
                <h3 className="text-lg font-medium text-red-600 dark:text-red-400">
                  Where Leads Are Lost Across the Industry
                </h3>
              </div>
              <div className="flex items-center justify-start">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                <h3 className="text-lg font-medium text-green-600 dark:text-green-400">
                  How Automotive Ai Stops The Loss
                </h3>
              </div>
            </motion.div>

            {/* Comparison Items */}
            <div className="space-y-8">
              {/* Leads never make it into CRM */}
              <motion.div 
                className="grid grid-cols-2 gap-8 items-center py-6 border-b border-gray-200 dark:border-gray-700"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Leads never captured in CRM</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">14%</div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">AI captures every lead</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">100%</div>
                </div>
              </motion.div>

              {/* Speed to lead */}
              <motion.div 
                className="grid grid-cols-2 gap-8 items-center py-6 border-b border-gray-200 dark:border-gray-700"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Average speed to lead</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">47 <span className="text-lg">hours</span></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Ai speed to lead</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">30 <span className="text-lg">seconds</span></div>
                </div>
              </motion.div>

              {/* Follow up rate */}
              <motion.div 
                className="grid grid-cols-2 gap-8 items-center py-6 border-b border-gray-200 dark:border-gray-700"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Average Times Followed Up</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">1.2x</div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Ai follow up on paid traffic</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">14x</div>
                </div>
              </motion.div>

              {/* Contact rate */}
              <motion.div 
                className="grid grid-cols-2 gap-8 items-center py-6 border-b border-gray-200 dark:border-gray-700"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Average contact rate on paid traffic</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">60%</div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Ai contact rate on paid traffic</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">85%+</div>
                </div>
              </motion.div>

              {/* Staff turnover */}
              <motion.div 
                className="grid grid-cols-2 gap-8 items-center py-6 border-b border-gray-200 dark:border-gray-700"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Average staff turnover annually</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">67-80%</div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Ai staff turnover</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">0%</div>
                </div>
              </motion.div>

              {/* Paid leads that sell */}
              <motion.div 
                className="grid grid-cols-2 gap-8 items-center py-6 border-b border-gray-200 dark:border-gray-700"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Average closing rate on internet leads</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">6.2%</div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Re-engagment rate on old leads</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">4-19%</div>
                </div>
              </motion.div>

              {/* Human vs AI Capacity */}
              <motion.div 
                className="grid grid-cols-2 gap-8 items-center py-6"
                variants={fadeInUp}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">Amount of leads a human can work at once</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">1</div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700 dark:text-gray-300">AI capacity</p>
                  <div className="text-4xl font-medium text-gray-900 dark:text-white">1000's</div>
                </div>
              </motion.div>
            </div>

            {/* Bottom CTA Box */}
            <motion.div 
              className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center border border-blue-200/50 dark:border-blue-800/30"
              variants={fadeInUp}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                391% boost in conversions with 30-second speed to lead
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Stop losing leads to competitors. 78% of buyers choose the first company that respond first, our AI ensure you're first every time.
              </p>
              <GlassButton href="/vsldemo" size="lg" variant="primary">
                See AI In Action
              </GlassButton>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonial Section */}
        <motion.div
          className="mt-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl text-center mb-2 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent tracking-tight leading-[1.2] py-2"
            variants={fadeInUp}
          >
            Real Dealerships. Real Results.
          </motion.h1>
          <motion.h2
            className="text-lg text-center text-neutral-600 dark:text-neutral-200 mb-8 tracking-tight"
            variants={fadeInUp}
          >
            Here's what 45+ dealers are saying about their results
          </motion.h2>
          <motion.div variants={scaleIn}>
            <InfiniteMovingCards
              direction="right"
              speed="slower"
            />
          </motion.div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="w-full py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <div className="max-w-[1500px] mx-auto px-5 lg:px-10">
            <motion.div 
              className="bg-gradient-to-r from-purple-100/40 to-blue-100/40 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 border border-purple-200/50 dark:border-purple-800/30 text-center"
              variants={fadeInUp}
            >
              <h3 className="text-xl md:text-2xl mb-4 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent tracking-tight leading-[1.2] py-1">
                Ready to Stop the Leak?
              </h3>
              <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-200 mb-8 max-w-3xl mx-auto tracking-tight">
              Join 45+ dealerships using AI to eliminate wasted ad spend and turn lost leads into closed deals.
              </p>
              <GlassButton
                href="/vsldemo"
                size="md"
                variant="primary"
              >
                See How AI Fixes This
              </GlassButton>
            </motion.div>
          </div>
        </motion.div>

        </div>
      </div>
    </div>
  );
};

export default BookADemo;