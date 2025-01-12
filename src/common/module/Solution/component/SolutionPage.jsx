"use client";

import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import React, { useState } from "react";
import { SolutionAllItem } from "@/common/constant/CardItem";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import ImageModal from "@/common/component/element/ImageModal";

export default function SolutionPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <ComponentTransition className="h-auto w-full">
      <div className="max-w-[1500px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col gap-2 mb-10">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Solution Management
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Track and manage all your automotive solutions
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            <div className="flex gap-4 items-center flex-1 w-full">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search solutions..."
                  className="w-full px-4 py-2.5 bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 17.5L13.875 13.875"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <button className="px-4 py-2.5 border border-neutral-300 dark:border-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex gap-3">
              <SparkleButton variant="glow" className="!text-sm !py-2.5 !px-5">
                Add Solution
              </SparkleButton>
              <button className="px-4 py-2.5 border border-neutral-300 dark:border-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900">
                Export
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SolutionAllItem?.map((item, index) => (
              <ComponentTransition
                key={index}
                delay={index * 0.1}
                className="group bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <button
                    onClick={() => setSelectedImage(item.img)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:scale-105 transform"
                  >
                    Click to Expand
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {item.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {item.content}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button className="px-4 py-2 text-sm bg-neutral-100 dark:bg-neutral-900 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                      View Details
                    </button>
                    <button className="px-4 py-2 text-sm bg-neutral-100 dark:bg-neutral-900 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                      Configure
                    </button>
                  </div>
                </div>
              </ComponentTransition>
            ))}
          </div>
        </div>

        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage}
        />
      </div>
    </ComponentTransition>
  );
}
