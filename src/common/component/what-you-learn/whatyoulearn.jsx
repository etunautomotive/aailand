import React from "react";
import { motion } from "framer-motion";

const WhatYoullLearn = ({ title = "What You'll Learn", features = [], subtitle }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.06,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.section
      className="container mx-auto py-16 text-center relative z-12 my-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <div className="text-center max-w-5xl mx-auto py-3">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-4 bg-gradient-to-r from-black from-50% to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent leading-tight pb-2"
          variants={titleVariants}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mx-auto max-w-3xl mb-12 text-center leading-relaxed"
            variants={titleVariants}
          >
            {subtitle}
          </motion.p>
        )}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {(features || []).map((feature, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              className="flex items-start p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl shadow-lg transition-shadow transform-gpu will-change-transform will-change-opacity"
            >
              <div className="mr-4 flex-shrink-0">
                {feature.icon}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1 transition-none">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-none">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhatYoullLearn;
