"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const GridSparkles = () => {
  const sparkleCount = 50;
  const gridSize = 20;

  const agentColors = {
    light: [
      "text-green-500/60",
      "text-purple-500/60",
      "text-red-500/60",
      "text-yellow-500/60",
    ],
    dark: [
      "text-green-400/40",
      "text-purple-400/40",
      "text-red-400/40",
      "text-yellow-400/40",
    ],
  };

  const getRandomGridPosition = () => {
    const positions = [];
    for (let i = 0; i < sparkleCount; i++) {
      const isHorizontal = Math.random() > 0.5;
      const size = Math.random() * 1.2 + 1.2;
      const colorIndex = Math.floor(Math.random() * 4);
      if (isHorizontal) {
        positions.push({
          x: -20,
          y: Math.floor(Math.random() * 25) * gridSize,
          isHorizontal: true,
          size,
          colorIndex,
        });
      } else {
        positions.push({
          x: Math.floor(Math.random() * 25) * gridSize,
          y: -20,
          isHorizontal: false,
          size,
          colorIndex,
        });
      }
    }
    return positions;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {getRandomGridPosition().map((pos, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: pos.x,
            y: pos.y,
            opacity: 0,
            scale: pos.size,
          }}
          animate={{
            x: pos.isHorizontal ? window.innerWidth + 20 : pos.x,
            y: pos.isHorizontal ? pos.y : window.innerHeight + 20,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        >
          <svg
            className={`w-2.5 h-2.5 ${agentColors.light[pos.colorIndex]} dark:${
              agentColors.dark[pos.colorIndex]
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default GridSparkles;
