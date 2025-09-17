"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { useTheme } from "next-themes";
import GridSparkles from "@/common/component/element/GridSparkles";
import Image from "@/common/component/element/Image";
import PixelCanvas from "@/common/component/element/PixelCanvas";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import Link from "next/link";
// AppleCards removed from bottom section

// Default agent data with detailed information and status
const defaultAgentData = [
  {
    id: "aai-text",
    title: "AAI Text",
    content:
      "AAI Text is well-trained on every process your dealership handles through text communication. From managing cold contacts to collecting trade-in pictures and documents, it leverages our foundation to ensure every step is seamless and efficient, handling everything from initial contact to credit pull authorization.",
    status: "stable",
    statusText: "High Stability Across Early Adopters",
    features: [
      "Automated Text Communication",
      "Document Collection",
      "Credit Authorization",
      "Trade-in Picture Collection",
      "Cold Contact Management",
      "Seamless Process Integration",
    ],
    benefits: [
      "Reduces response time significantly",
      "Increases lead conversion",
      "Automates document collection",
      "24/7 customer engagement",
    ],
    icon: "/agent-text-icon.svg",
    color: "green",
  },
  {
    id: "aai-call",
    title: "AAI Call",
    content:
      "AAI Call is your calling co-pilot, serving as an invaluable helper in voice communications. It meticulously tracks calls, schedules follow-ups, and runs second confirmations to ensure settlement accuracy. Every conversation is monitored to maintain perfect information flow throughout the process.",
    status: "development",
    statusText: "In Development - Coming Soon",
    features: [
      "Call Tracking",
      "Follow-up Scheduling",
      "Settlement Confirmation",
      "Conversation Monitoring",
      "Voice Communication Assistant",
      "Information Flow Management",
    ],
    benefits: [
      "Never miss a follow-up call",
      "Ensures accurate settlement details",
      "Provides real-time conversation insights",
      "Reduces miscommunication",
    ],
    icon: "/agent-call-icon.svg",
    color: "purple",
  },
  {
    id: "aai-finance",
    title: "AAI Finance",
    content:
      "AAI Finance activates once AAI Text collects the necessary information for credit and lender submissions. Drawing from experience with hundreds of thousands of deals, it operates like a seasoned finance manager who knows every deal across your team and optimizes each submission.",
    status: "development",
    statusText: "In Development - Coming Soon",
    features: [
      "Credit Analysis",
      "Lender Submission",
      "Deal Optimization",
      "Finance Manager Expertise",
      "Cross-team Deal Awareness",
      "Submission Optimization",
    ],
    benefits: [
      "Increases approval rates",
      "Reduces submission errors",
      "Optimizes terms for both dealer and customer",
      "Accelerates the financing process",
    ],
    icon: "/agent-finance-icon.svg",
    color: "red",
  },
  {
    id: "aai-close",
    title: "AAI Close",
    content:
      "AAI Close builds the ultimate strategy for every deal by analyzing credit information from AAI Finance. It generates tailored scripts for salespeople, enabling them to approach each conversation with the expertise and insights of seasoned finance managers for optimal outcomes.",
    status: "planning",
    statusText: "Wrapping Everything Together",
    features: [
      "Deal Strategy",
      "Tailored Scripts",
      "Finance Expertise",
      "Credit Analysis Integration",
      "Conversation Strategy",
      "Outcome Optimization",
    ],
    benefits: [
      "Increases closing rate",
      "Provides personalized negotiation strategies",
      "Equips salespeople with finance expertise",
      "Creates consistent closing experiences",
    ],
    icon: "/agent-close-icon.svg",
    color: "yellow",
  },
];

const getTypeColor = (color) => {
  switch (color.toLowerCase()) {
    case "green":
      return "from-green-500 via-green-500/90 to-green-500";
    case "purple":
      return "from-purple-500 via-purple-500/90 to-purple-500";
    case "red":
      return "from-red-500 via-red-500/90 to-red-500";
    case "yellow":
      return "from-yellow-500 via-yellow-500/90 to-yellow-500";
    default:
      return "from-blue-500 via-blue-500/90 to-blue-500";
  }
};

const getGradientText = (color, theme) => {
  // Use consistent gradients to avoid hydration mismatch
  switch (color.toLowerCase()) {
    case "green":
      return "from-green-400 to-green-200";
    case "purple":
      return "from-purple-400 to-purple-200";
    case "red":
      return "from-red-400 to-red-200";
    case "yellow":
      return "from-yellow-400 to-yellow-200";
    default:
      return "from-gray-400 to-gray-200";
  }
};

const getStatusBadge = (status, color) => {
  switch (status) {
    case "stable":
      return `bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800`;
    case "development":
      return `bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800`;
    case "planning":
      return `bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800`;
    default:
      return `bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border border-gray-200 dark:border-gray-800`;
  }
};

const AgentDetailCard = ({ agent, index }) => {
  const { theme, resolvedTheme } = useTheme();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: false,
    amount: 0.15,
    margin: "0px",
    triggerOnce: false,
  });

  const [forceVisible, setForceVisible] = useState(false);

  React.useEffect(() => {
    if (isInView) {
      setForceVisible(true);
      const timer = setTimeout(() => {
        if (!isInView) {
          setForceVisible(false);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const isVisible = isInView || forceVisible;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-32 relative w-full"
      id={agent.id}
    >
      <ComponentTransition
        delay={index * 0.1}
        className={`flex border-[1px] relative group z-[9] overflow-hidden rounded-3xl flex-col p-4 sm:p-8 transition-all duration-300 mx-auto w-full ${
          isVisible ? "border-opacity-40" : "border-opacity-20"
        }`}
        style={{
          borderColor: `${getTypeColor(agent.color)
            .split(" ")[1]
            .replace("via-", "")}/${isVisible ? "40" : "20"}`,
          "--hover-border-color": `${getTypeColor(agent.color)
            .split(" ")[1]
            .replace("via-", "")}/40`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor =
            e.currentTarget.style.getPropertyValue("--hover-border-color");
        }}
        onMouseLeave={(e) => {
          if (!isVisible) {
            e.currentTarget.style.borderColor = `${getTypeColor(agent.color)
              .split(" ")[1]
              .replace("via-", "")}/20`;
          }
        }}
      >
        <PixelCanvas
          color={agent.color}
          gap={10}
          speed={45}
          className={`transition-opacity duration-500 ${
            isVisible ? "opacity-40" : "opacity-5"
          } group-hover:opacity-60`}
        />

        <div
          className={`absolute -inset-0.5 bg-gradient-to-r rounded-3xl transition-all duration-500 ${
            isVisible ? "opacity-20" : "opacity-0"
          } group-hover:opacity-30 blur-xl`}
          style={{
            background: `linear-gradient(90deg, ${getTypeColor(agent.color)
              .split(" ")[1]
              .replace("via-", "")} 0%, ${getTypeColor(agent.color)
              .split(" ")[1]
              .replace("via-", "")} 100%)`,
          }}
        />

        {/* Header section with icon and title */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-8 mb-6 sm:mb-8 relative z-10">
          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r ${getGradientText(
                  agent.color,
                  resolvedTheme
                )} bg-clip-text text-transparent text-center md:text-left break-words`}
              >
                {agent.title}
              </h2>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                  agent.status,
                  agent.color
                )} inline-flex items-center`}
              >
                {agent.statusText}
              </span>
            </div>

            <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 text-center md:text-left relative z-10">
              {agent.content}
            </p>
          </div>
        </div>

        {/* Features and Benefits section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 relative z-10">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
              Key Features
            </h3>
            <ul className="space-y-2">
              {agent.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div
                    className={`mt-1 mr-3 w-4 h-4 rounded-full flex-shrink-0 bg-gradient-to-r ${getGradientText(
                      agent.color,
                      resolvedTheme
                    )}`}
                  ></div>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
              Benefits
            </h3>
            <ul className="space-y-2">
              {agent.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <div
                    className={`mt-1 mr-3 w-4 h-4 rounded-full flex-shrink-0 bg-gradient-to-r ${getGradientText(
                      agent.color,
                      resolvedTheme
                    )}`}
                  ></div>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Integration section - only for stable agents */}
        {agent.status === "stable" && (
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-4">
              Integration
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mb-4">
              AAI Text seamlessly integrates with your existing CRM and
              communication systems, providing a frictionless experience for
              both your team and customers.
            </p>
            <div className="flex justify-center">
              <div className="w-auto inline-block">
                <a href="https://www.automotiveai.ca/demo/" target="_blank" rel="noopener noreferrer">
                  <SparkleButton className="!text-sm !py-2.5 !px-5 scale-95">
                    Learn About Integration
                  </SparkleButton>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Coming soon section - for development agents */}
        {agent.status === "development" && (
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50">
            <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-4">
              Coming Soon
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mb-4">
              Our team is working hard to bring {agent.title} to your
              dealership. Join our early access program to be among the first to
              experience this powerful agent.
            </p>
            <div className="flex justify-center">
              <div className="w-auto inline-block">
                <a href="https://www.automotiveai.ca/demo/" target="_blank" rel="noopener noreferrer">
                  <SparkleButton className="!text-sm !py-2.5 !px-5 scale-95">
                    Join Early Access
                  </SparkleButton>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Planning section - for planning agents */}
        {agent.status === "planning" && (
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800/50">
            <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-4">
              In Development
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mb-4">
              {agent.title} will be the culmination of our agent ecosystem,
              bringing together all the capabilities of our other agents to
              create a comprehensive sales solution.
            </p>
            <div className="flex justify-center">
              <div className="w-auto inline-block">
                <a href="https://www.automotiveai.ca/demo/" target="_blank" rel="noopener noreferrer">
                  <SparkleButton className="!text-sm !py-2.5 !px-5 scale-95">
                    Get Notified
                  </SparkleButton>
                </a>
              </div>
            </div>
          </div>
        )}
      </ComponentTransition>
    </motion.div>
  );
};

const AgentsPage = ({
  agentData = defaultAgentData,
  header = "Our Intelligent Agents",
  subheader = "Our platform features specialized AI agents designed specifically for automotive dealerships. Each agent is trained on industry-specific processes and optimized to handle different aspects of the sales journey, from initial contact to deal closure.",
  ctaTitle = "Ready to transform your dealership?",
  ctaSubtitle = "Our AI agents work together seamlessly to optimize every step of your sales process, from lead generation to deal closure."
}) => {
  const { theme, resolvedTheme } = useTheme();

  return (
    <div className="h-auto w-full max-w-[1500px] px-4 sm:px-5 lg:px-10 py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute w-full h-full z-[-1]">
        <GridSparkles />
        <div className="bg-gradient-to-b from-white dark:from-black from-0% via-white/80 dark:via-black/80 to-transparent absolute inset-0"></div>
        <div className="bg-gradient-to-l from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
        <div className="bg-gradient-to-r from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
      </div>

      {/* Page Header - Added more top padding */}
      <div className="flex justify-center mb-8 sm:mb-16 pt-4 sm:pt-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-black from-50% to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent py-4 px-2">
          {header}
        </h1>
      </div>

      <div className="text-center mb-8 sm:mb-16 max-w-3xl mx-auto px-2 sm:px-4">
        <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
          {subheader}
        </p>
      </div>

      {/* Scroll indicator animation */}
      <div className="flex justify-center items-center mb-12 sm:mb-16">
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            window.scrollBy({
              top: 300,
              behavior: "smooth",
            });
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            Scroll to explore
          </p>
          <motion.div
            className="w-8 h-12 border-2 border-neutral-400 dark:border-neutral-600 rounded-full flex justify-center items-start p-1"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.div
              className="w-1.5 h-3 bg-neutral-500 dark:bg-neutral-400 rounded-full"
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.div
            className="mt-2"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L8 8L15 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Agent cards - Full width content */}
      <div className="max-w-4xl mx-auto">
        {agentData.map((agent, index) => (
          <AgentDetailCard key={agent.id} agent={agent} index={index} />
        ))}
      </div>

      {/* Apple style cards carousel removed */}

      {/* CTA Section */}
      <div className="mt-16 sm:mt-32 text-center px-2 sm:px-4">
        <ComponentTransition delay={0.3}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-black from-50% to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
            {ctaTitle}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {ctaSubtitle}
          </p>
          <div className="flex justify-center">
            <div className="w-auto inline-block">
              <a href="https://www.automotiveai.ca/demo/" target="_blank" rel="noopener noreferrer">
                <SparkleButton className="!text-sm !py-2.5 !px-5 scale-95">
                  Schedule a Demo
                </SparkleButton>
              </a>
            </div>
          </div>
        </ComponentTransition>
      </div>
    </div>
  );
};

export default AgentsPage;
