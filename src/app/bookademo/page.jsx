"use client";
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, ChevronDown } from "lucide-react";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import { InfiniteMovingCards } from "@/common/component/testimonial/infinitemovingcards";
import DiaBackground from "@/common/component/element/DiaBackground";
import ScrollingBrands from "@/common/component/scrolling-brands/ScrollingBrands";
import TextType from "@/components/ui/TextType";

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

  return (
    <div className="relative flex justify-center w-full">
      {/* Dia background - only above the fold */}
      <DiaBackground className="absolute inset-0 z-0 h-screen" />
      
      <div className="w-full max-w-[1500px] mx-auto pt-32 sm:pt-36 md:pt-40 relative z-10">
        {/* Hero Section */}
        <div className="relative min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-7rem)] flex flex-col">


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
                  className="text-base md:text-lg text-center text-gray-500 dark:text-gray-400 mb-4 md:mb-6 px-4 tracking-tight"
                  variants={fadeInUp}
                >
                  We help you capture the other 90% while lowering BDC costs, so you can scale your dealership.
                </motion.div>
                
                <motion.div
                  className="w-full xl:w-[80%] 2xl:w-[80%] flex justify-center"
                  variants={fadeInUp}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center break-words bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent px-4 mb-6 md:mb-8 leading-[1.2] tracking-tight py-2">
                    Spending Money on Leads or Advertising?
                    <br />
                    9 Out of 10 of Your Dollars
                    <br />
                    Are Going to Waste..
                  </h1>
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                  className="w-full flex justify-center mt-0 mb-16 md:mb-24 z-20"
                  variants={fadeInUp}
                >
                  <SparkleButton
                    className="!text-sm !py-2 !px-4 md:!py-2.5 md:!px-5 transition-transform duration-200"
                    href="/vsldemo"
                  >
                    See How AI Fixes This
                  </SparkleButton>
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
          className="w-full py-12 md:py-16 text-black dark:text-white"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-[1500px] mx-auto px-5 lg:px-10">
            {/* Section Heading */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-12 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent tracking-tight leading-[1.2] py-2"
              variants={fadeInUp}
            >
              Where Leads Slip Through The Cracks, And How We Stop It.
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {/* Industry Problems */}
              <motion.div 
                className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 md:p-8 border border-red-200 dark:border-red-800/30"
                variants={fadeInUp}
              >
                <h3 className="text-lg text-red-600 dark:text-red-400 mb-6 text-center tracking-tight">
                  Industry Problems
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">14% of leads never make it into CRM</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Average speed to lead is 47 hours</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Only 8% of salespeople follow up 5+ times</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">60% avg contact rate on internet leads</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Salespeople follow up an average of 1.2×</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Sales burnout from deal fatigue and objection handling</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Humans can only work one lead at a time</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Data entry wastes salespeople &amp; BDC time</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">67-80% staff turnover annually</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Only 6.2% of paid leads actually sell</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">90+ days to train new hires</p>
                  </div>
                </div>
              </motion.div>

              {/* Automotive AI Solutions */}
              <motion.div 
                className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 md:p-8 border border-green-200 dark:border-green-800/30"
                variants={fadeInUp}
              >
                <h3 className="text-lg text-green-600 dark:text-green-400 mb-6 text-center tracking-tight">
                  Automotive AI Solutions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">100% lead capture and instant CRM entry</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">30-second speed to lead, boosting conversions by 391%</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">100% follow-up rate</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">80%+ contact rate</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">14 automated follow-ups, then long-term nurture</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Veteran‑level AI objection handling reduces sales burnout</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Unlimited conversations (scale to thousands)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Automatic data entry</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Zero staff turnover or training costs</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Convert 4-19% of dead leads back into the sales cycle</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300 tracking-tight">Instant expertise across every lead source</p>
                  </div>
                </div>
              </motion.div>
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
              <SparkleButton
                className="!text-sm !py-2 !px-4 md:!py-2.5 md:!px-5 transition-transform duration-200"
                href="/vsldemo"
              >
                See How AI Fixes This
              </SparkleButton>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default BookADemo;