"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Target, 
  MessageSquare, 
  Calendar, 
  Settings, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  X 
} from "lucide-react";

// Animation variants following the project's pattern
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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

const SolutionSection = () => {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-green-400 flex-shrink-0 mt-1" />,
      title: "Instant Lead Response (Under 30 Seconds, 24/7)",
      benefits: [
        "Captures that 9 PM Tuesday lead while your competition sleeps",
        "Responds to weekend leads before Monday morning coffee",
        "Never misses a lead, never takes a sick day, never goes on vacation"
      ]
    },
    {
      icon: <Target className="w-10 h-10 text-green-400 flex-shrink-0 mt-1" />,
      title: "Master-Level Qualification (Better Than Your Best)",
      benefits: [
        "Asks the right questions in the right order",
        "Identifies buying intent, timeline, and budget instantly",
        "Pre-qualifies prospects so your team only talks to buyers"
      ]
    },
    {
      icon: <Calendar className="w-10 h-10 text-green-400 flex-shrink-0 mt-1" />,
      title: "Automatic Appointment Booking",
      benefits: [
        "Books appointments while prospects are hot",
        "Handles scheduling conflicts and reschedules automatically",
        "Sends confirmations and reminders to reduce no-shows"
      ]
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-green-400 flex-shrink-0 mt-1" />,
      title: "Veteran-Level Objection Handling",
      benefits: [
        "Trained on millions of automotive conversations",
        "Knows exactly what to say to every objection",
        "Turns skeptics into scheduled appointments"
      ]
    },
    {
      icon: <Settings className="w-10 h-10 text-green-400 flex-shrink-0 mt-1" />,
      title: "Seamless System Integration",
      benefits: [
        "Works with your existing CRM, DMS",
        "No disruption to current operations",
        "Your team keeps doing what they do best...closing deals"
      ]
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-green-400 flex-shrink-0 mt-1" />,
      title: "Profit Multiplication Engine",
      benefits: [
        "Converts 4-12% lead conversion to 31%+ average",
        "Eliminates the $2.3M annual loss from missed opportunities",
        "Pays for itself in the first 2 weeks"
      ]
    }
  ];

  const problemSolutions = [
    {
      problem: "No more missed leads",
      solution: "100% lead capture and response"
    },
    {
      problem: "No more poor follow-up",
      solution: "Systematic, persistent follow-up"
    },
    {
      problem: "No more staff turnover drama",
      solution: "Reliable, consistent performance"
    },
    {
      problem: "No more training nightmares",
      solution: "Instant expertise, no learning curve"
    },
    {
      problem: "No more weekend lead loss",
      solution: "24/7/365 lead engagement"
    },
    {
      problem: "No more clunky systems",
      solution: "Seamless, automated workflows"
    }
  ];

  const gameChangerStats = [
    "Responded to 47 new leads",
    "Qualified 23 serious buyers",
    "Booked 11 appointments for tomorrow",
    "Followed up with 156 previous prospects",
    "Collected trade-in information from 8 customers",
    "Scheduled 4 service appointments",
    "Updated CRM records automatically",
    "Sent personalized follow-up messages"
  ];

  const automotiveFeatures = [
    "AI-powered lead qualification and engagement via text",
    "Direct Integration with Dealertrack to Push Qualify Leads Information",
    "CRM-integrated credit pulls Via Credit App",
    "Real-time objection handling and tailored sales scripts",
    "Reactivation of dead leads using trained AI agents",
    "Full AI Agent Customization to Match Your Brand & Dealership",
  ];

  return (
    <motion.section 
      className="w-full py-16 md:py-24 text-black dark:text-white"
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
            The <span className="text-green-400">$2.3 Million Solution</span>: Meet Your New{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Profit-Generating Sales Army
            </span>
          </h2>
        </motion.div>

        {/* Opening Hook */}
        <motion.div 
          className="bg-gradient-to-r from-green-50/40 to-emerald-50/40 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 md:p-12 mb-12 border border-green-200/50 dark:border-green-800/30"
          variants={scaleIn}
        >
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-bold mb-6 text-green-400">
              What if I told you there's a way to capture EVERY lead, respond in under 60 seconds, and convert 3x more
              prospects into buyers...
            </p>
            <p className="text-2xl md:text-3xl font-bold text-black dark:text-white">without hiring a single new salesperson?</p>
          </div>
        </motion.div>

        {/* The Breakthrough */}
        <motion.div 
          className="mb-12"
          variants={fadeInUp}
        >
          <div className="bg-gray-100 dark:bg-gray-900/50 rounded-2xl p-8 md:p-12 border border-gray-300 dark:border-gray-800">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-400 text-center">The Breakthrough:</h3>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-200">
              After 18 months of development and testing with{" "}
              <span className="text-green-600 dark:text-green-400 font-bold">123+ dealerships</span>, we've cracked the code on the biggest
              problem in automotive sales:
            </p>
            <p className="text-xl md:text-2xl font-bold text-center text-black dark:text-white bg-green-100/20 dark:bg-green-900/20 rounded-xl p-6 border border-green-300/30 dark:border-green-800/30">
              How to scale your best salesperson's performance across unlimited leads, 24/7, without the human
              limitations.
            </p>
          </div>
        </motion.div>

        {/* Product Introduction */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Introducing{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Automotive AI
            </span>
          </h3>
          <p className="text-xl md:text-2xl text-green-400 font-semibold mb-6">
            The World's First Automotive, RV, & Powersports Sales Operating System
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            This isn't just another chatbot or CRM tool. This is a complete AI-powered sales team that works alongside
            your existing staff to eliminate every single pain point you just read about.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="mb-12"
          variants={staggerContainer}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-400"
            variants={fadeInUp}
          >
            Here's what your new AI sales army does:
          </motion.h3>

          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-white/5 rounded-2xl p-8 border border-green-300/30 dark:border-green-800/30 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  {feature.icon}
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-2 text-black dark:text-white">
                      {feature.title}
                    </h4>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 ml-14">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-gray-700 dark:text-gray-300">{benefit}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Game Changer Section */}
        <motion.div 
          className="bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-8 md:p-12 mb-12 border border-green-300/50 dark:border-green-700/40"
          variants={scaleIn}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-400 text-center">
            But Here's The Real Game-Changer:
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-200">
              While your competition is still playing phone tag with leads from last week, your AI sales army has
              already:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {gameChangerStats.map((stat, index) => (
                <p key={index} className="text-green-600 dark:text-green-300">{stat}</p>
              ))}
            </div>
            <p className="text-xl md:text-2xl font-bold text-center text-green-400">All while you slept.</p>
          </div>
        </motion.div>

        {/* Unfair Advantage */}
        <motion.div 
          className="bg-gray-100 dark:bg-gray-900/50 rounded-2xl p-8 md:p-12 mb-12 border border-gray-300 dark:border-gray-800"
          variants={fadeInUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-600 dark:text-green-400 text-center">The Unfair Advantage:</h3>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200 max-w-4xl mx-auto text-center">
            This isn't about replacing your sales team - it's about{" "}
            <span className="text-green-600 dark:text-green-400 font-bold">multiplying their effectiveness by 10x</span>. Your salespeople
            stop chasing cold leads and start closing pre-qualified, ready-to-buy customers who are already excited to
            meet them.
          </p>
        </motion.div>

        {/* Built for Automotive */}
        <motion.div 
          className="mb-12"
          variants={fadeInUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-green-400 text-center">
            Built Specifically for Automotive (Not Generic Software)
          </h3>
          <div className="bg-white/80 dark:bg-white/5 rounded-2xl p-8 md:p-12 border border-green-300/30 dark:border-green-800/30">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-200">
              Unlike generic chatbots that give robotic responses, Automotive AI understands:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {automotiveFeatures.map((feature, index) => (
                <p key={index} className="text-green-600 dark:text-green-300">{feature}</p>
              ))}
            </div>
            <div className="mt-8 p-6 bg-green-100/30 dark:bg-green-900/20 rounded-xl border border-green-300/30 dark:border-green-800/30">
              <p className="text-xl font-bold text-center text-green-600 dark:text-green-400">
                The result? Conversations so natural and knowledgeable, customers prefer talking to our AI over
                inexperienced salespeople.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Problem Solution Comparison */}
        <motion.div 
          className="mb-12"
          variants={staggerContainer}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-8 text-green-400 text-center"
            variants={fadeInUp}
          >
            The Bottom Line:
          </motion.h3>
          <motion.p 
            className="text-lg md:text-xl text-center mb-8 text-gray-700 dark:text-gray-300"
            variants={fadeInUp}
          >
            Automotive AI solves every single problem you just read about:
          </motion.p>
          <div className="grid gap-4 max-w-4xl mx-auto">
            {problemSolutions.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-4 bg-white/80 dark:bg-white/5 rounded-xl border border-green-300/30 dark:border-green-800/30 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center space-x-3">
                  <X className="w-6 h-6 text-red-400" />
                  <span className="text-gray-700 dark:text-gray-300">{item.problem}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300 font-semibold">{item.solution}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Promise */}
        <motion.div 
          className="bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-8 md:p-12 mb-12 border border-green-300/50 dark:border-green-700/40"
          variants={scaleIn}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-400 text-center">The Promise:</h3>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200 max-w-4xl mx-auto text-center">
            In the next 30 days, you'll watch your dealership transform from a lead-losing, staff-dependent operation
            into a <span className="text-green-600 dark:text-green-400 font-bold">profit-generating machine</span> that captures every
            opportunity and converts prospects at rates your competition can only dream of.
          </p>
        </motion.div>

        {/* Transition */}
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full px-6 py-3 mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Don't just take our word for it.</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here's what happened when 123+ dealers implemented this system...
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionSection;
