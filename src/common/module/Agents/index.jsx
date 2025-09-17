"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { VerticalIntelligenceCards } from "@/common/constant/CardItem";
import GridSparkles from "@/common/component/element/GridSparkles";
import PixelCanvas from "@/common/component/element/PixelCanvas";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";


const getTypeColor = (type) => {
  switch (type.toLowerCase()) {
    case "aai text":
      return "from-green-500 via-green-500/90 to-green-500";
    case "aai call":
      return "from-purple-500 via-purple-500/90 to-purple-500";
    case "aai finance":
      return "from-red-500 via-red-500/90 to-red-500";
    case "aai close":
      return "from-yellow-500 via-yellow-500/90 to-yellow-500";
    default:
      return "from-blue-500 via-blue-500/90 to-blue-500";
  }
};

const getGradientText = (type) => {
  // Use a consistent gradient to avoid hydration mismatch
  switch (type.toLowerCase()) {
    case "aai text":
      return "from-green-400 to-green-200";
    case "aai call":
      return "from-purple-400 to-purple-200";
    case "aai finance":
      return "from-red-400 to-red-200";
    case "aai close":
      return "from-yellow-400 to-yellow-200";
    default:
      return "from-blue-400 to-blue-200";
  }
};

// Agent status
const agentStatus = {
  "AAI Text": {
    status: "stable",
    text: "High Stability Across Early Adopters",
  },
  "AAI Call": { status: "development", text: "In Development - Coming Soon" },
  "AAI Finance": {
    status: "development",
    text: "In Development - Coming Soon",
  },
  "AAI Close": { status: "planning", text: "Wrapping Everything Together" },
};

const getStatusBadge = (status) => {
  switch (status) {
    case "stable":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800";
    case "development":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800";
    case "planning":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border border-gray-200 dark:border-gray-800";
  }
};

const AgentCard = ({ agent, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.5 });
  const status = agentStatus[agent.title];

  // Get color for PixelCanvas
  const getAgentColor = (title) => {
    switch (title.toLowerCase()) {
      case "aai text":
        return "green";
      case "aai call":
        return "purple";
      case "aai finance":
        return "red";
      case "aai close":
        return "yellow";
      default:
        return "blue";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8 relative"
    >
      <ComponentTransition
        delay={index * 0.1}
        className="relative group z-[9] overflow-hidden rounded-3xl transition-all duration-300 h-full"
      >
        {/* Glass morphism container */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl shadow-lg p-6 flex flex-col h-full">
          {/* Add PixelCanvas for the pixel art effect */}
          <PixelCanvas
            color={getAgentColor(agent.title)}
            gap={10}
            speed={45}
            className="opacity-5 group-hover:opacity-40 transition-opacity duration-500"
          />

          <div
            className="absolute -inset-0.5 bg-gradient-to-r rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
            style={{
              background: `linear-gradient(90deg, ${getTypeColor(agent.title)
                .split(" ")[1]
                .replace("via-", "")} 0%, ${getTypeColor(agent.title)
                .split(" ")[1]
                .replace("via-", "")} 100%)`,
            }}
          />

          <div className="flex flex-col h-full relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h2
                  className={`text-xl font-semibold tracking-tight bg-gradient-to-r ${getGradientText(
                    agent.title
                  )} bg-clip-text text-transparent`}
                >
                  {agent.title}
                </h2>

                <span
                  className={`px-2 py-0.5 text-xs rounded-full ${getStatusBadge(
                    status.status
                  )}`}
                >
                  {status.text}
                </span>
              </div>
            </div>

            <p className="text-neutral-700 dark:text-neutral-300 flex-grow">
              {agent.content}
            </p>

            <a
              href={`/agents#${agent.title.toLowerCase().replace(" ", "-")}`}
              className={`mt-6 inline-flex items-center text-sm font-medium bg-gradient-to-r ${getGradientText(
                agent.title
              )} bg-clip-text text-transparent group-hover:underline`}
            >
              Learn more
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </ComponentTransition>
    </motion.div>
  );
};

const Agents = ({ onCtaClick, buttonText = "Book a Strategy Call", useModalInsteadOfCalendly = false }) => {
  return (
    <div className="h-auto max-w-[1500px] px-5 lg:px-10 py-20 relative">
      <div className="absolute w-[100%] h-full z-[-1]">
        <GridSparkles />
        <div className="bg-gradient-to-b from-white dark:from-black from-0% via-white/80 dark:via-black/80 to-transparent absolute inset-0"></div>
        <div className="bg-gradient-to-l from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
        <div className="bg-gradient-to-r from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
      </div>

      <div className="flex justify-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-black from-50% to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent py-4 px-2">
          Our Intelligent Agents
        </h1>
      </div>

      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Our platform features specialized AI agents designed specifically for
          automotive dealerships. Each agent is trained on industry-specific
          processes and optimized to handle different aspects of the sales
          journey.
        </p>
      </div>

      {/* Agent cards in grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {VerticalIntelligenceCards.map((agent, index) => (
          <AgentCard key={index} agent={agent} index={index} />
        ))}
      </div>

      {/* View all agents button */}
      <div className="text-center mt-8">
        <div className="w-auto inline-block">
          <SparkleButton 
            className="!text-sm !py-2.5 !px-5 scale-95"
            onClick={useModalInsteadOfCalendly ? onCtaClick : undefined}
          >
            {buttonText}
          </SparkleButton>
        </div>
      </div>
    </div>
  );
};

export default Agents;
