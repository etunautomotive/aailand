"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "@/common/component/element/Image";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { HeroImage } from "@/common/constant/HeroImage";
import { Parallax } from "@/common/constant/Parallax";
import ImageModal from "@/common/component/element/ImageModal";
import { useTheme } from "next-themes";
import TypewriterHeading from "@/common/component/element/TypewriterHeading";
import GridSparkles from "@/common/component/element/GridSparkles";
import Rails from "@/common/component/element/Rails";

const Hero = () => {
  const { scrollY } = useScroll();
  const { c, r, ry, rz, scale, t, y } = Parallax(scrollY);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-auto md:mb-20 max-w-[1500px] px-5 lg:px-10 mt-20 relative overflow-hidden">
      <div className="flex flex-col justify-center md:top-0 mt-28 lg:mt-36 items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="xl:w-[80%] 2xl:w-[80%] flex justify-center">
            <TypewriterHeading />
          </div>

          <p className="lg:w-[70%] text-center lg:text-2xl mt-16 mb-20 dark:text-neutral-300 text-neutral-700">
            One platform with industry-specific AI agents for every step of the automotive sales process, from lead generation to loan approval, built with decades of dealership expertise.
          </p>
        </div>

        <div className="absolute w-[100%] top-[20%] h-[500px] z-[-1]">
          <Rails />
          <GridSparkles />
          <div className="bg-gradient-to-b from-white dark:from-black from-0% via-white/80 dark:via-black/80 to-transparent absolute inset-0"></div>
          <div className="bg-gradient-to-l from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
          <div className="bg-gradient-to-r from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
        </div>

        <motion.div
          className="w-[100%] h-full xl:mt-20 mt-40 sm:mt-36 flex gap-4 lg:px-20 overflow-hidden relative z-10"
          style={{
            translateY: t,
            translateX: c,
            rotateX: r,
            position: "relative",
            transformPerspective: 819,
            rotateZ: rz,
            rotateY: ry,
          }}
        >
          {HeroImage.map((item, index) => (
            <ComponentTransition
              delay={index * 0.1}
              key={index}
              className="overflow-hidden rounded-xl w-full relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500 animate-pulse-slow" />
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-500" />
              <div className="relative">
                <Image
                  alt="Hero"
                  className="overflow-hidden w-full h-auto hover:scale-105 transition-transform duration-300 rounded-xl"
                  height={800}
                  src={currentTheme === "dark" ? item.darkImg : item.lightImg}
                  width={800}
                  priority
                />
                <button
                  onClick={() =>
                    setSelectedImage(
                      currentTheme === "dark" ? item.darkImg : item.lightImg
                    )
                  }
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:scale-105 transform"
                >
                  Click to Expand
                </button>
              </div>
            </ComponentTransition>
          ))}
        </motion.div>

        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage}
        />
      </div>
    </div>
  );
};

export default Hero;
