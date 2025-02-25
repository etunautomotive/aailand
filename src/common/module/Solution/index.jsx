"use client";

import React, { useState } from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { CardItem } from "@/common/constant/CardItem";
import Image from "@/common/component/element/Image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import ImageModal from "@/common/component/element/ImageModal";

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

const getGradientText = (type, theme) => {
  if (theme === "dark") {
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
        return "from-white to-white";
    }
  } else {
    switch (type.toLowerCase()) {
      case "aai text":
        return "from-green-500 to-green-400";
      case "aai call":
        return "from-purple-500 to-purple-400";
      case "aai finance":
        return "from-red-500 to-red-400";
      case "aai close":
        return "from-yellow-500 to-yellow-400";
      default:
        return "from-black to-black";
    }
  }
};

const Solution = () => {
  const { theme, resolvedTheme } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  const firstRowCards = CardItem.slice(0, 3);
  const secondRowCards = CardItem.slice(3);

  return (
    <div className="h-auto max-w-[1500px] px-5 lg:px-10 py-20">
      <div className="flex justify-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-black from-50% to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent py-4 px-2">
          The Foundation
        </h1>
      </div>

      {/* First Row - 3 Cards */}
      <div className="grid gap-6 md:grid-cols-3 py-10">
        {firstRowCards.map((item, index) => (
          <ComponentTransition
            delay={index * 0.1}
            key={index}
            className="flex border-[1px] relative group z-[9] overflow-hidden rounded-3xl flex-col items-center text-center p-6 transition-all duration-300"
            style={{
              borderColor: `${getTypeColor(item.title)
                .split(" ")[1]
                .replace("via-", "")}/20`,
              "--hover-border-color": `${getTypeColor(item.title)
                .split(" ")[1]
                .replace("via-", "")}/40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                e.currentTarget.style.getPropertyValue("--hover-border-color");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${getTypeColor(item.title)
                .split(" ")[1]
                .replace("via-", "")}/20`;
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-auto hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => setSelectedImage(item.img)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:scale-105 transform"
                >
                  Click to Expand
                </button>
              </div>
              <h1 className="text-2xl font-bold mt-4 text-black dark:text-white">
                {item.title}
              </h1>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                {item.content}
              </p>
            </div>
          </ComponentTransition>
        ))}
      </div>

      {/* Second Row - 2 Cards */}
      <div className="grid gap-6 md:grid-cols-2 py-10">
        {secondRowCards.map((item, index) => (
          <ComponentTransition
            delay={index * 0.1}
            key={index}
            className="flex border-[1px] relative group z-[9] overflow-hidden rounded-3xl flex-col items-center text-center p-6 transition-all duration-300"
            style={{
              borderColor: `${getTypeColor(item.title)
                .split(" ")[1]
                .replace("via-", "")}/20`,
              "--hover-border-color": `${getTypeColor(item.title)
                .split(" ")[1]
                .replace("via-", "")}/40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                e.currentTarget.style.getPropertyValue("--hover-border-color");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${getTypeColor(item.title)
                .split(" ")[1]
                .replace("via-", "")}/20`;
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-auto hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => setSelectedImage(item.img)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:scale-105 transform"
                >
                  Click to Expand
                </button>
              </div>
              <h1 className="text-2xl font-bold mt-4 text-black dark:text-white">
                {item.title}
              </h1>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                {item.content}
              </p>
            </div>
          </ComponentTransition>
        ))}
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage}
      />
    </div>
  );
};

export default Solution;
