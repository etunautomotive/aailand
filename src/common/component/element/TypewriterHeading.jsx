"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const headlines = [
  ["AI-powered text and calls", "that work 24/7", "for your dealership."],
  ["Smart finance tools", "that streamline", "deal structuring."],
  ["Automated customer data", "collection saves hours", "of manual entry."],
  ["25-30% response rates", "with intelligent bulk", "SMS campaigns."],
  ["Vertical AI that understands", "automotive sales", "inside and out."],
  ["Close more deals with", "AI-powered negotiation", "insights."],
  ["Manage thousands of leads", "with intelligent", "automation."],
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
          className="text-2xl sm:text-3xl md:text-4xl text-neutral-700 dark:text-neutral-300 font-medium text-center h-[6em] flex items-center px-4"
        >
          {headlines.map((lines, index) => (
            <motion.div
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
                top: "50%",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden",
                gap: "0",
              }}
            >
              {lines.map((line, lineIndex) => (
                <motion.div
                  key={lineIndex}
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    height: "1.2em",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: lineIndex === 0 ? "0" : "-0.2em",
                  }}
                >
                  <motion.span
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: ["0%", "100%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      times: [0, 0.2, 0.8, 1],
                      delay: index * 6 + lineIndex * 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: headlines.length * 6 - 6,
                    }}
                    style={{
                      display: "block",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      position: "relative",
                      textAlign: "center",
                      lineHeight: "1.1",
                      transformOrigin:
                        lineIndex === lines.length - 1 ? "right" : "left",
                    }}
                  >
                    {line}
                    {lineIndex ===
                      lines.length -
                        1 -
                        Math.floor(
                          (Date.now() % (1500 * lines.length)) / 1500
                        ) && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [1, 1, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 6 + (lines.length - 1) * 1.5,
                          repeatDelay:
                            headlines.length * 6 - 6 - (lines.length - 1) * 1.5,
                        }}
                        style={{
                          position: "absolute",
                          right: "-2px",
                          height: "100%",
                          width: "2px",
                          backgroundColor: "currentColor",
                        }}
                      />
                    )}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TypewriterHeading;
