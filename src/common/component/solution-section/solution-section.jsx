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
  console.log("SolutionSection: Component is rendering");
  
  // Add a simple test render first
  if (typeof window !== 'undefined') {
    console.log("SolutionSection: Running on client side");
  } else {
    console.log("SolutionSection: Running on server side");
  }
  
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
        "Turns skeptics into buyers"
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
      title: "Profit Recovery Engine",
      benefits: [
        "Converts that 37% of lost leads back into your sales funnel",
        "Eliminates the $710,000 annual loss from missed opportunities",
        "Pays for itself in the first 2 weeks"
      ]
    }
  ];

  const problemSolutions = [
    {
      problem: "37% of leads lost to poor follow-up and CRM gaps",
      solution: "100% lead capture and instant response"
    },
    {
      problem: "65% of leads don&apos;t hear back within 24 hours",
      solution: "Under 30-second response time, 24/7"
    },
    {
      problem: "Only 2-6% conversion rates industry-wide",
      solution: "3x higher conversion with AI qualification"
    },
    {
      problem: "67-80% annual staff turnover costs",
      solution: "Reliable, consistent performance that never quits"
    },
    {
      problem: "90+ days to train new hires",
      solution: "Instant expertise, no learning curve"
    },
    {
      problem: "Weekend and after-hours leads sit cold",
      solution: "24/7/365 lead engagement"
    },
    {
      problem: "Legacy systems require 47 clicks per update",
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
    "Direct Integration with Dealertrack to Push Qualified Lead Information",
    "CRM-integrated credit pulls via Credit App",
    "Real-time objection handling and tailored sales scripts",
    "Reactivation of dead leads using trained AI agents",
    "Full AI Agent Customization to Match Your Brand & Dealership",
  ];

  console.log("SolutionSection: About to return JSX");
  
  // Temporary simple test render - commenting out to test full component
  // return <div className="w-full py-16 bg-red-500 text-white text-center">SOLUTION SECTION TEST</div>;
  
  return (
    <motion.section 
      className="w-full py-16 md:py-24 text-black dark:text-white"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="max-w-[1500px] mx-auto px-5 lg:px-10">
        {/* Main Title */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The <span className="text-green-400">$710,000 Solution</span>: Meet Your New{" "}
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
              What if I told you there&apos;s a way to capture EVERY lead, respond in under 60 seconds, and convert 391% more
              prospects into buyers... (yes 391% is the true number)
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
              <span className="text-green-600 dark:text-green-400 font-bold">40+ dealerships</span>, we&apos;ve cracked the code on the biggest
              problem in automotive sales:
            </p>
            <p className="text-xl md:text-2xl font-bold text-center text-black dark:text-white bg-green-100/20 dark:bg-green-900/20 rounded-xl p-6 border border-green-300/30 dark:border-green-800/30">
              How to scale your best salesperson&apos;s performance across unlimited leads, 24/7, without the human
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
            The World&apos;s First Automotive, RV, & Powersports Sales Operating System
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            This isn&apos;t just another chatbot or CRM tool. This is a complete AI-powered system that works alongside
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
            Here&apos;s what your new AI sales army does:
          </motion.h3>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group hover:bg-gray-50/50 dark:hover:bg-gray-900/20 rounded-2xl p-6 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  {feature.icon}
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-2 text-black dark:text-white">
                      {feature.title}
                    </h4>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 ml-14">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
                {index < features.length - 1 && (
                  <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Game Changer Section */}
        <motion.div 
          className="bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-8 md:p-12 mb-12 border border-green-300/50 dark:border-green-700/40"
          variants={scaleIn}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-200 font-bold">
              If you&apos;re spending money on ad spend or third-party leads, you&apos;re going to convert instantly higher on those...
            </p>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-400 text-center">
              But here&apos;s the REAL game-changer:
            </h3>
            
            <p className="text-xl md:text-2xl font-bold mb-6 text-gray-700 dark:text-gray-200 text-center">
              What about all that previous data you&apos;ve already paid for?
            </p>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                Right now, sitting in your CRM, you have thousands of leads you spent good money on. Leads that went cold. Prospects who &quot;weren&apos;t ready.&quot; Customers who bought elsewhere.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                Your competition considers this data worthless. Dead leads. Sunk costs.
              </p>
              
              <p className="text-xl font-bold text-green-600 dark:text-green-400 text-center">
                They&apos;re dead wrong.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                We&apos;re seeing dealers <span className="font-bold text-green-600 dark:text-green-400">re-engage 4-19% on every 100 old leads</span> they upload into their AI sales team and bringing them back into the sales cycle without spending a single dollar on new advertising.
              </p>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/50 rounded-xl p-6 mb-8 border border-green-300/30 dark:border-green-800/30">
              <h4 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
                Think about the math (using just the LOW end):
              </h4>
              
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex justify-between items-center">
                  <span>• 5,000 old leads in your database</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• 4% re-engagement rate</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">= 200 re-engaged customers</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• 6% of those actually close</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">= 12 deals</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>• Average gross profit per deal: $5,000</span>
                </div>
                <div className="border-t border-green-300/30 dark:border-green-800/30 pt-3 mt-3">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total profit from &quot;dead&quot; customers:</span>
                    <span className="text-green-600 dark:text-green-400">$60,000</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-4 space-y-2">
                <p className="font-bold text-gray-800 dark:text-gray-200">Zero ad spend. Zero new leads. Pure profit.</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                And that&apos;s at the <span className="font-bold">LOWEST</span> conversion rate. Imagine what happens when you hit 10%... 15%... or even 19% like one of our dealers on the east coast...
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                This is where dealers are making their real money - not chasing expensive new leads, but reviving the goldmine they already own and using AI to fund the machine instead of going backwards.
              </p>
              
              <p className="text-xl font-bold text-center text-green-600 dark:text-green-400">
                While your competition burns cash on new traffic, you&apos;re turning previous &quot;failures&quot; into today&apos;s deals.
              </p>
              
              <p className="text-xl font-bold text-center text-gray-800 dark:text-gray-200 bg-green-100/30 dark:bg-green-900/20 rounded-xl p-4 border border-green-300/30 dark:border-green-800/30">
                This is how smart dealers stop paying for leads... and start printing money from customers they already have.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Unfair Advantage */}
        <motion.div 
          className="bg-gray-100 dark:bg-gray-900/50 rounded-2xl p-8 md:p-12 mb-12 border border-gray-300 dark:border-gray-800"
          variants={fadeInUp}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-600 dark:text-green-400 text-center">The Unfair Advantage:</h3>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200 max-w-4xl mx-auto text-center">
            This isn&apos;t about replacing your sales team. It&apos;s about{" "}
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
            Built Specifically for Automotive, RV, & Powersports (Not Generic Software)
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
                inexperienced salespeople. (Seriously, we&apos;ve seen the reviews)
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
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200 max-w-4xl mx-auto text-center mb-6">
            In the next 30 days, you&apos;ll watch your dealership transform from a lead-losing, staff-dependent operation
            into a <span className="text-green-600 dark:text-green-400 font-bold">profit-generating machine</span> that captures every opportunity and converts prospects at rates your competition can only dream of.
          </p>
                     <p className="text-xl md:text-2xl font-bold text-center text-green-600 dark:text-green-400">
             Stop losing $710,000 every year. Start recovering it instead.
           </p>
        </motion.div>

        {/* Transition */}
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full px-6 py-3 mb-6 text-white">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Don&apos;t just take our word for it.</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here&apos;s what happened when 40+ dealers implemented this system...
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionSection;
