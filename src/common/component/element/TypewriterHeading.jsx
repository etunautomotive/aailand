"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const headlines = [
  "AI-powered text and calls that work 24/7 for your dealership",
  "Smart finance tools that streamline deal structuring",
  "Automated customer data collection saves hours of manual entry",
  "25-30% response rates with intelligent bulk SMS campaigns",
  "Vertical AI that understands automotive sales inside and out",
  "Close more deals with AI-powered negotiation insights",
  "Manage thousands of leads with intelligent automation",
];

const TypewriterHeading = () => {
  return (
    <div className="z-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-neutral-900 dark:text-white text-center mb-12">
        Welcome to{" "}
        <span className="dark:bg-gradient-to-r from-white from-50% to-[#9c9c9c] bg-text bg-clip-text text-transparent">
          Automotive AI
        </span>
      </h1>
      <div className="relative flex justify-center w-full mb-12">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl text-neutral-700 dark:text-neutral-300 font-medium text-center min-h-[3em] flex items-center"
        >
          {headlines.map((text, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: index * 6,
                repeat: Infinity,
                repeatDelay: headlines.length * 6 - 6,
              }}
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <motion.span
                initial={{
                  width: "0%",
                  borderRight: "2px solid transparent",
                }}
                animate={{
                  width: ["0%", "100%", "100%", "0%"],
                  borderRight: [
                    "2px solid currentColor",
                    "2px solid currentColor",
                    "2px solid currentColor",
                    "2px solid transparent",
                  ],
                }}
                transition={{
                  duration: 5,
                  times: [0, 0.2, 0.8, 1],
                  delay: index * 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: headlines.length * 6 - 6,
                }}
                style={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {text}
              </motion.span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TypewriterHeading;
