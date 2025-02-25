"use client";

import React from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import GridSparkles from "@/common/component/element/GridSparkles";
import PixelCanvas from "@/common/component/element/PixelCanvas";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiPhone, FiMessageSquare } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { TbPlugConnected } from "react-icons/tb";

const ServicesPage = () => {
  // Service categories with their respective services
  const serviceCategories = [
    {
      id: "sales-training",
      title: "Sales Training & Development",
      color: "green",
      services: [
        {
          title: "Advanced Video Sales Training",
          description:
            "Improved closing rates through on-demand and in-person coaching.",
          metric: "Higher close rate",
        },
        {
          title: "In-Store Sales Training",
          description:
            "Transform your team's performance with hands-on training.",
          metric: "Proven results",
        },
        {
          title: "DIY Lead Gen Training",
          description:
            "Build self-sufficient teams that create and optimize campaigns.",
          metric: "Self-sufficiency",
        },
      ],
    },
    {
      id: "ai-automation",
      title: "AI Platform - Our Core Product",
      color: "purple",
      services: [
        {
          title: "Communication Hub",
          description:
            "One place for texts, calls, and customer info that your whole team can access.",
          metric: "Core Tools",
        },
        {
          title: "AI Agents",
          description:
            "Digital assistants that help with texting, calling, financing, and closing deals.",
          metric: "AI Help",
        },
        {
          title: "Automatic Data Capture",
          description:
            "System records all customer interactions so you don't have to type anything.",
          metric: "No Typing",
        },
        {
          title: "Database Marketing",
          description:
            "Automatically contacts potential customers in your database to generate new leads.",
          metric: "More Leads",
        },
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      color: "red",
      services: [
        {
          title: "Digital Marketing Excellence",
          description: "Custom websites and campaigns that deliver strong ROI.",
          metric: "Strong ROI",
        },
        {
          title: "High-Quality Lead Generation",
          description: "Pre-qualified leads with higher conversion potential.",
          metric: "Higher conversion",
        },
      ],
    },
    {
      id: "business-operations",
      title: "Business Operations",
      color: "yellow",
      services: [
        {
          title: "Recruitment & Onboarding",
          description: "Reduce training time while improving retention.",
          metric: "Better retention",
        },
        {
          title: "Technology Integration",
          description:
            "Seamless connectivity that saves hours weekly per salesperson.",
          metric: "Time saved",
        },
        {
          title: "Mobile Sales Team",
          description:
            "Remote experts who close effectively like your in-house team.",
          metric: "Effective closing",
        },
        {
          title: "Business Coaching",
          description: "Structured growth planning that increases revenue.",
          metric: "Revenue growth",
        },
      ],
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

  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-5 md:px-10 xl:px-20">
      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <GridSparkles />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl py-5 px-5 md:px-10 text-center dark:bg-gradient-to-r from-white from-50% to-black bg-text bg-clip-text text-transparent font-bold mb-4 pt-20">
            AAI Services
          </h1>
          <p className="text-base md:text-xl text-neutral-700 dark:text-neutral-300 mb-6 px-4">
            We help dealerships sell more cars through AI-powered software and
            hands-on services. We don&apos;t just give you tools - we work
            alongside you with expertise from top dealers.
          </p>
        </div>
      </section>

      {/* System Benefits Section */}
      <section className="py-10 relative">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <PixelCanvas
              color="purple"
              gap={10}
              speed={45}
              className="opacity-5 hover:opacity-20 transition-opacity duration-500"
            />

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center dark:text-white">
              Why Dealers Choose Us
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 text-center">
              One system that handles communication, automates tasks, and
              eliminates busywork
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Better Communication",
                  description:
                    "Text and call customers with AI help - no more missed opportunities",
                  icon: <FiPhone className="w-6 h-6" />,
                },
                {
                  title: "AI Assistants",
                  description:
                    "Smart agents handle routine tasks so your team can focus on selling",
                  icon: <RiRobot2Line className="w-6 h-6" />,
                },
                {
                  title: "No Data Entry",
                  description:
                    "System captures all customer info automatically - no more typing",
                  icon: <HiOutlineClipboardCheck className="w-6 h-6" />,
                },
                {
                  title: "Works With Your Tools",
                  description:
                    "Connects with your existing systems while adding powerful new features",
                  icon: <TbPlugConnected className="w-6 h-6" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Our Services
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 mb-2">
            Our AI platform is the foundation of everything we do
          </p>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            We combine technology with hands-on services to transform your
            dealership
          </p>
        </div>

        <div className="space-y-12">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.id} className="relative" id={category.id}>
              <ComponentTransition delay={categoryIndex * 0.1}>
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 inline-block bg-gradient-to-r dark:from-white dark:to-neutral-400 from-black to-neutral-700 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                  <div
                    className="h-1 w-16 bg-gradient-to-r rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${getTypeColor(
                        category.color
                      )
                        .split(" ")[1]
                        .replace("via-", "")} 0%, ${getTypeColor(category.color)
                        .split(" ")[1]
                        .replace("via-", "")} 100%)`,
                    }}
                  ></div>
                  {category.id === "ai-automation" && (
                    <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                      <svg
                        className="w-4 h-4 mr-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12L11 14L15 10M12 3L4 10V20H20V10L12 3Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Main Product
                    </div>
                  )}
                </div>

                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${
                    category.id === "ai-automation"
                      ? "bg-purple-50/50 dark:bg-purple-900/10 p-4 rounded-xl border border-purple-200/50 dark:border-purple-800/30"
                      : ""
                  }`}
                >
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 relative overflow-hidden group"
                      style={{
                        borderColor: `${getTypeColor(category.color)
                          .split(" ")[1]
                          .replace("via-", "")}/20`,
                        "--hover-border-color": `${getTypeColor(category.color)
                          .split(" ")[1]
                          .replace("via-", "")}/40`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          e.currentTarget.style.getPropertyValue(
                            "--hover-border-color"
                          );
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = `${getTypeColor(
                          category.color
                        )
                          .split(" ")[1]
                          .replace("via-", "")}/20`;
                      }}
                    >
                      <div
                        className="absolute -inset-0.5 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
                        style={{
                          background: `linear-gradient(90deg, ${getTypeColor(
                            category.color
                          )
                            .split(" ")[1]
                            .replace("via-", "")} 0%, ${getTypeColor(
                            category.color
                          )
                            .split(" ")[1]
                            .replace("via-", "")} 100%)`,
                        }}
                      />

                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold dark:text-white">
                          {service.title}
                        </h4>
                        <span className="text-xs font-medium px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300">
                          {service.metric}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </ComponentTransition>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
            See It For Yourself
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6">
            Book a demo to see how our platform can help your dealership sell
            more cars with less work
          </p>
          <div className="flex justify-center">
            <SparkleButton
              onClick={() =>
                window.open(
                  "https://calendly.com/wes-automotiveai/30min?hide_event_type_details=1",
                  "_blank"
                )
              }
            >
              Schedule a Demo
            </SparkleButton>
          </div>
        </div>
      </section>
    </ComponentTransition>
  );
};

export default ServicesPage;
