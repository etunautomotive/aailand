"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Clock, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Calendar,
  FileX,
  Target,
  UserX
} from "lucide-react";

// Animation variants following the project's pattern
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
    },
  },
};

const ProblemSection = () => {
  const leadFollowUpStats = [
    {
      icon: <FileX className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "14.1% of new sales leads never even get logged",
      subtitle: "into dealer CRMs (Foureyes 2025 Automotive Dealer Benchmarks)",
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "65% of leads don&apos;t hear back within 24 hours of visiting your site",
      subtitle: "(Foureyes 2025)",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "80% of sales require at least 5 follow-ups to close",
      subtitle: "(Grant Cardone, Marketing Donut)",
    },
    {
      icon: <UserX className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "Only 8% of salespeople follow up more than 5 times",
      subtitle: "(industry research)",
    },
  ];

  const conversionStats = [
    {
      icon: <Target className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "Automotive conversion rates average just 2%",
      subtitle: "(top performers hit 16%) - Ruler Analytics",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "Only 6.2% of third-party leads result in a sale",
      subtitle: "(some sources as low as 4%) - Cox Automotive",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "Only 10.2% of all sales leads end up buying",
      subtitle: "(Foureyes reports)",
    },
  ];

  const staffStats = [
    {
      icon: <Users className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "67-80% annual staff turnover",
      subtitle: "(your best people keep leaving)",
    },
    {
      icon: <Calendar className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "New hires take 90+ days to become productive",
      subtitle: "(if they last that long)",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "Legacy CRM systems require 47 clicks just to update a customer record",
      subtitle: "(creates more work)",
    },
  ];

  return (
    <motion.section 
      className="w-full py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer}
    >
      <div className="max-w-[1500px] mx-auto px-5 lg:px-10">
        {/* Main Title */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The <span className="text-red-500">$710,000 Problem</span> Every Dealer Faces
            <br />
            <span className="text-gray-300">(But Nobody Talks About)</span>
          </h2>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="bg-gray-100 dark:bg-gray-900/50 rounded-2xl p-8 md:p-12 mb-12 border border-gray-300 dark:border-gray-800"
          variants={scaleIn}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-200">
              It&apos;s 9 PM on a Tuesday. Another hot lead just submitted their information on your website. But your sales
              team went home hours ago.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-200">
              By morning, that lead has already applied to 3 more competitors, has booked an appointment with the top
              sales guy across the street, and is ready to buy...
            </p>
            <p className="text-2xl md:text-3xl font-bold text-red-400 text-center mb-6">
              Sound familiar? You&apos;re not alone.
            </p>
            <p className="text-xl md:text-2xl font-bold text-center text-black dark:text-white">
              Here&apos;s what the industry research reveals:
            </p>
          </div>
        </motion.div>

        {/* Lead Follow-Up Crisis */}
        <motion.div 
          className="mb-12"
          variants={staggerContainer}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-red-400"
            variants={fadeInUp}
          >
            The Lead Follow-Up Crisis
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {leadFollowUpStats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {stat.icon}
                <div>
                  <p className="text-lg font-semibold mb-2 text-black dark:text-white">
                    {stat.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800/30 text-center"
            variants={scaleIn}
          >
            <p className="text-2xl md:text-3xl font-bold text-red-500 dark:text-red-400">
                              That&apos;s 37% of your online leads lost
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-2">
              due to poor follow-up and CRM gaps alone.
            </p>
          </motion.div>
        </motion.div>

        {/* Conversion Catastrophe */}
        <motion.div 
          className="mb-12"
          variants={staggerContainer}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-red-400"
            variants={fadeInUp}
          >
            The Conversion Catastrophe
          </motion.h3>

          <motion.p 
            className="text-lg md:text-xl text-center mb-8 text-gray-700 dark:text-gray-300"
            variants={fadeInUp}
          >
            While you&apos;re losing leads, here&apos;s what&apos;s happening to the ones you do contact:
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {conversionStats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {stat.icon}
                <div className="mt-4">
                  <p className="text-lg font-semibold mb-2 text-black dark:text-white">
                    {stat.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Real Cost */}
        <motion.div 
          className="bg-gradient-to-r from-red-100/40 to-red-50/40 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl p-8 md:p-12 border border-red-200/50 dark:border-red-800/30 mb-12"
          variants={scaleIn}
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-400">
              The Real Cost of Doing Nothing
            </h3>
            <p className="text-lg md:text-xl mb-4 text-gray-700 dark:text-gray-300">
              Let&apos;s do the math on what this costs you:
            </p>
            
            <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 mb-6 border border-red-200 dark:border-red-800/30">
              <div className="space-y-3 text-left">
                <p className="text-lg text-black dark:text-white">
                  <strong>Average dealership receives/purchases 400 leads per month (4,800 per year)</strong>
                </p>
                <p className="text-lg text-black dark:text-white">
                  <strong>37% lost to poor follow-up = 1,776 wasted leads</strong>
                </p>
                <p className="text-lg text-black dark:text-white">
                  If you properly followed up with just an <strong>8% conversion rate</strong> (well below top performers), that&apos;s <strong>142 additional sales per year</strong>.
                </p>
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
                              At an average <span className="text-red-500 dark:text-red-400">$5,000 gross profit per sale</span>, you&apos;re losing{" "}
              <span className="text-red-500 dark:text-red-400 text-4xl md:text-5xl">$710,000 annually</span>.
            </p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent my-8"></div>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Cox Automotive</strong> confirms this pain is real: Just <strong>10 unsold new units per month</strong> costs dealers <strong>$28,730/month</strong> in lost gross profit and holding costs<strong>over $340,000 per year</strong> from missed opportunities alone.
            </p>
          </div>
        </motion.div>

        {/* Staff Nightmare */}
        <motion.div 
          className="mb-12"
          variants={staggerContainer}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-red-400"
            variants={fadeInUp}
          >
            The Staff Nightmare Making It Worse
          </motion.h3>

          <motion.p 
            className="text-lg md:text-xl text-center mb-8 text-gray-700 dark:text-gray-300"
            variants={fadeInUp}
          >
            <strong>Industry data shows:</strong>
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {staffStats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {stat.icon}
                <div className="mt-4">
                  <p className="text-lg font-semibold mb-2 text-black dark:text-white">
                    {stat.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-gray-100 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center"
            variants={scaleIn}
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
              <strong>40% of sales leads close after three days</strong>, but most dealerships&apos; follow-up drops off after initial contact.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              While you&apos;re dealing with staff drama, training nightmares, and clunky software...
            </p>
          </motion.div>
        </motion.div>

        {/* Final Impact */}
        <motion.div 
          className="bg-gradient-to-r from-red-100/40 to-red-50/40 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl p-8 md:p-12 border border-red-200/50 dark:border-red-800/30"
          variants={scaleIn}
        >
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-bold mb-6 text-black dark:text-white">
              <span className="text-red-500 dark:text-red-400">Your competition is stealing your customers</span> with technology that works 24/7, never calls in sick, and converts leads while you sleep.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent my-8"></div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The question isn&apos;t whether you can afford to fix this problem.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              <span className="text-red-500 dark:text-red-400">The question is: Can you afford to keep losing $710,000 every year?</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProblemSection;
