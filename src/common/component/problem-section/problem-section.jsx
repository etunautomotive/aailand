"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Clock, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Calendar 
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
  const problemStats = [
    {
      icon: <Clock className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "78% of leads are never followed up within the first hour",
      subtitle: "(when they're hottest)",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "94% of sales people don't follow up more than 3 times",
      subtitle: "Missing countless opportunities",
    },
    {
      icon: <Users className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "Your best salesperson just quit... again",
      subtitle: "(average turnover: 67% annually)",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "You're spending $49-200 per lead",
      subtitle: "but only converting 4-12% because of poor follow-up",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "Legacy CRM systems require 47 clicks",
      subtitle: "just to update a customer record (ours does it for you)",
    },
    {
      icon: <Calendar className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />,
      title: "New hires take 90+ days to become productive",
      subtitle: "(if they last that long)",
    },
  ];

  return (
    <motion.section 
      className="w-full py-16 md:py-24 bg-black text-white"
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
            The <span className="text-red-500">$2.3 Million Problem</span> Every Dealer Faces
            <br />
            <span className="text-gray-300">(But Nobody Talks About)</span>
          </h2>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="bg-gray-900/50 rounded-2xl p-8 md:p-12 mb-12 border border-gray-800"
          variants={scaleIn}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200">
              It's 9 PM on a Tuesday. Another hot lead just submitted their information on your website. But your sales
              team went home hours ago.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200">
              By morning, that lead has already applied to 3 more competitors, has booked an appointment to the top
              sales guy across the street, and is ready to buy...
            </p>
            <p className="text-2xl md:text-3xl font-bold text-red-400 text-center">
              Sound familiar? You're not alone.
            </p>
          </div>
        </motion.div>

        {/* Problems Grid */}
        <motion.div 
          className="mb-12"
          variants={staggerContainer}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-red-400"
            variants={fadeInUp}
          >
            The brutal reality every dealer faces:
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {problemStats.map((problem, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:bg-gray-900/50 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {problem.icon}
                <div>
                  <p className="text-lg font-semibold mb-2 text-white">
                    {problem.title}
                  </p>
                  <p className="text-gray-400">{problem.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Impact */}
        <motion.div 
          className="bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-2xl p-8 md:p-12 border border-red-800/30"
          variants={scaleIn}
        >
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-bold mb-4 text-red-400">
              Weekend and after-hours leads sit cold until Monday morning
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent my-8"></div>
            <p className="text-2xl md:text-3xl font-bold mb-6 text-white">
              The real cost? The average dealer loses{" "}
              <span className="text-red-400 text-4xl md:text-5xl">$2.3 million annually</span> in missed opportunities
              from poor lead management alone.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              While you're dealing with staff drama, training nightmares, and clunky software...{" "}
              <span className="text-white font-semibold">
                dealers adopting new technology (your competition) are stealing your customers.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProblemSection;
