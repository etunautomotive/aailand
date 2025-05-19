import React, { useRef } from 'react';
import { PhoneCall, Brain, Target, TrendingUp, Bot, FileText } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import PurpleHighlight from '@/common/component/Herohighlight/hero-highlight';
import { GlowingEffect } from '@/common/component/ui/glowing-effect';

// Default features for fallback
const defaultFeatures = [
  {
    icon: <PhoneCall className="text-purple-600 w-8 h-8" />,
    title: "Master the non-prime phone script that closes at 17%+",
    description: "The exact words that convert leads to appointments, even with credit-challenged buyers.",
  },
  {
    icon: <Brain className="text-purple-600 w-8 h-8" />,
    title: "Build trust without a showroom",
    description: "Psychological techniques to establish rapport and comfort remotely.",
  },
  {
    icon: <Target className="text-purple-600 w-8 h-8" />,
    title: "Reprogram mindset for high-volume deals",
    description: "Shift from traditional sales thinking to the volume-focused approach.",
  },
  {
    icon: <TrendingUp className="text-purple-600 w-8 h-8" />,
    title: "Scale a pipeline that consistently grosses $300K+/month",
    description: "Systems to manage and track your growing pipeline of opportunities.",
  },
  {
    icon: <Bot className="text-purple-600 w-8 h-8" />,
    title: "Learn the exact framework our AI agents are trained on",
    description: "See the structure that powers our automated AI sales system.",
  },
  {
    icon: <FileText className="text-purple-600 w-8 h-8" />,
    title: "Get battle-tested scripts and templates",
    description: "Ready-to-use assets you can implement immediately in your dealership.",
  },
];

const WhatYoullLearn = ({ title, features, subtitle }) => {
  // Apple-inspired animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.06,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        delay: 0.1
      }
    },
    hover: {
      rotate: [0, 10, -10, 0],
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  // Add ref and inView for scroll-triggered animation
  const cardRefs = (features || defaultFeatures).map(() => useRef(null));
  const inViews = cardRefs.map(ref => useInView(ref, { once: true, amount: 0.5 }));

  return (
    <motion.section 
      className="container mx-auto py-16 text-center relative z-12 my-16 rounded-lg bg-white dark:bg-black shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <div className="text-center max-w-5xl mx-auto py-3 overflow-visible">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent leading-[1.4] pb-2 overflow-visible"
          variants={titleVariants}
        >
          {title || (<>
            This Isn't Just Sales Training. It's the Playbook That <PurpleHighlight>Changed the Game</PurpleHighlight>.
          </>)}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-3xl mb-12 text-center leading-relaxed"
            variants={titleVariants}
          >
            {subtitle}
          </motion.p>
        )}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {(features || defaultFeatures).map((feature, idx) => (
            <div key={idx} className="relative rounded-xl min-h-[160px] flex">
              <GlowingEffect glow className="z-0" disabled={false} borderWidth={3} />
              <motion.div
                ref={cardRefs[idx]}
                initial={{ opacity: 0, y: 50 }}
                animate={inViews[idx] ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-white-border flex items-start p-6 shadow-md hover:shadow-lg transition relative z-10 w-full h-full rounded-xl"
                style={{ borderWidth: '1px' }}
                whileHover="hover"
              >
                <motion.div 
                  className="mr-4 flex-shrink-0"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {feature.icon}
                </motion.div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhatYoullLearn;
