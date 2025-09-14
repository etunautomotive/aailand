"use client";
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, DollarSign, CheckCircle, Star } from "lucide-react";
import PurpleHighlight from "@/common/component/Herohighlight/hero-highlight";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import { InfiniteMovingCards } from "@/common/component/testimonial/infinitemovingcards";
import GridBackground from "@/common/component/element/GridBackground";
import ScrollingBrands from "@/common/component/scrolling-brands/ScrollingBrands";

// Animation variants following your app's pattern
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

const BookADemo = () => {
  // Quick industry stats
  const industryStats = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      stat: "14%",
      description: "of leads never make it into CRM"
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-red-500" />,
      stat: "65%",
      description: "don't hear back in 24 hours"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-red-500" />,
      stat: "6.2%",
      description: "of 3rd-party leads actually sell"
    }
  ];

  // Solution points
  const solutionPoints = [
    "30-second response time, 24/7/365",
    "100% follow-up rate (never forgets)",
    "Converts 4-19% of dead leads back to sales",
    "Zero staff turnover or training costs"
  ];

  // Testimonials data for moving cards
  const testimonialsMovingCardsData = [
    {
      quote: "AAI helped me break every 30-day record I had. 20 deals, over $30K profit all in one month.",
      name: "Jaedynn Cutler",
      title: "Finance Manager, Approval Express Canada, Vancouver, BC"
    },
    {
      quote: "This is by far the best system we have ever used. Our team is more efficient than ever and our customers are happier than ever.",
      name: "Jack Ni",
      title: "GM, Ride Collective, Vancouver Island, BC"
    },
    {
      quote: "It's like having a sniper on your sales team. Never misses, never gets tired. Total game changer.",
      name: "Michael Filzwieser",
      title: "GSM, Wutang Auto Group, Vancouver, BC"
    },
    {
      quote: "Zero experience, now hitting record numbers. This system works if you work it.",
      name: "Sarah Kim",
      title: "BDC Manager, Premium Autos, Dallas, TX"
    },
    {
      quote: "This cut out hours of follow-up every day. It's efficient, powerful, and backed by an amazing team.",
      name: "Jacob Rego",
      title: "Sales Manager, Powersport Canada, Edmonton, AB"
    }
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1500px] mx-auto pt-20 sm:pt-24 md:pt-28">
        {/* Grid wraps over brands + hero */}
        <div className="relative">
          {/* Shared grid background behind brands and hero */}
          <GridBackground className="absolute inset-0 z-0 pointer-events-none" />

          {/* Trusted By Banner */}
          <motion.div 
            className="relative z-10 pt-2 pb-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                Trusted by leading automotive brands
              </p>
            </div>
            <ScrollingBrands />
          </motion.div>

          {/* Hero Section - Problem Statement */}
          <motion.section 
          className="h-auto md:mb-10 px-4 sm:px-6 lg:px-10 mt-1 relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="flex flex-col justify-center md:top-0 mt-2 lg:mt-3 items-center">
            <div className="relative z-10 flex flex-col items-center justify-center">
              <motion.div
                className="w-full xl:w-[80%] 2xl:w-[80%] flex justify-center"
                variants={fadeInUp}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center break-words bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent px-4 mb-3 md:mb-4 leading-[1.08]">
                  If You're Spending Money on Leads or Advertising{" "}
                  <PurpleHighlight>9 Out of 10</PurpleHighlight> of Your Dollars Are Going to Waste
                </h1>
              </motion.div>
              
              <motion.div 
                className="text-lg md:text-xl font-semibold text-center text-neutral-600 dark:text-neutral-200 mt-2 md:mt-3 mb-6 md:mb-8 px-4"
                variants={fadeInUp}
              >
               The average dealer only closes 6% of third-party leads. We help you capture the other 94% while lowering costs, so you can scale your dealership.
              </motion.div>

              {/* Grid is now the only background to avoid star overlay */}

              {/* CTA Button */}
              <motion.div 
                className="w-full flex justify-center mt-2 md:mt-3 mb-6 z-20"
                variants={fadeInUp}
              >
                <SparkleButton
                  className="!text-sm !py-2 !px-4 md:!py-2.5 md:!px-5 transition-transform duration-200"
                  href="/vsldemo"
                >
                  See How AI Fixes This
                </SparkleButton>
              </motion.div>

              {/* Section lead-in heading placed at the end of the hero */}
              <motion.div
                className="w-full max-w-[1500px] mx-auto mt-6 md:mt-8"
                variants={fadeInUp}
              >
                <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                  Industry Problems vs <PurpleHighlight>Automotive AI</PurpleHighlight> Solutions
                </h2>
              </motion.div>
            </div>
          </div>
        </motion.section>
        </div>

        {/* Problem vs Solution Section */}
        <motion.section 
          className="w-full py-12 md:py-16 text-black dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <div className="max-w-[1500px] mx-auto px-5 lg:px-10">

            <motion.div 
              className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {/* Industry Problems */}
              <motion.div 
                className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 md:p-8 border border-red-200 dark:border-red-800/30"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-6 text-center">
                  Industry Problems
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">14% of leads never make it into CRM</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Average speed to lead is 47 hours</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Only 8% of salespeople follow up 5+ times</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">60% avg contact rate on internet leads</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Salespeople follow up an average of 1.2×</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Sales burnout from deal fatigue and objection handling</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Humans can only work one lead at a time</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Data entry wastes salespeople &amp; BDC time</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">67-80% staff turnover annually</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Only 6.2% of paid leads actually sell</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">90+ days to train new hires</p>
                  </div>
                </div>
              </motion.div>

              {/* Automotive AI Solutions */}
              <motion.div 
                className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 md:p-8 border border-green-200 dark:border-green-800/30"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-6 text-center">
                  Automotive AI Solutions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">100% lead capture and instant CRM entry</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">30-second speed to lead, boosting conversions by 391%</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">100% follow-up rate</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">80%+ contact rate</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">14 automated follow-ups, then long-term nurture</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Veteran‑level AI objection handling reduces sales burnout</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Unlimited conversations (scale to thousands)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Automatic data entry</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Zero staff turnover or training costs</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Convert 4-19% of dead leads back into the sales cycle</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300">Instant expertise across every lead source</p>
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Real Dealerships. Real Results.
          </motion.h1>
          <motion.h2
            className="text-xl text-center text-neutral-600 dark:text-neutral-200 mb-8"
            variants={fadeInUp}
          >
            Here's what 45+ dealers are saying about their results
          </motion.h2>
          <motion.div variants={scaleIn}>
            <InfiniteMovingCards
              items={testimonialsMovingCardsData}
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Ready to Stop the <PurpleHighlight>Leak?</PurpleHighlight>
              </h3>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-200 mb-8 max-w-3xl mx-auto">
                Join 45+ smart dealerships who are already using AI to eliminate losses on paid advertising and recapture previously lost leads into a profit-generating machine.
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