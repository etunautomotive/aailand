import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ModuleCard from "@/common/component/module-card/module-card";
import { GlowingEffect } from "@/common/component/module-card/glowing-effect";
import { courseData } from "@/common/component/module-card/coursedata";

// Animation variants (outside component for performance)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const moduleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

/**
 * CurriculumSection displays the course curriculum with animated module cards.
 */
const CurriculumSection = () => {
  const [openModule, setOpenModule] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode
    if (typeof window !== 'undefined') {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
      // Observe changes to the dark mode class
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
          }
        });
      });
      observer.observe(document.documentElement, { attributes: true });
      return () => observer.disconnect();
    }
  }, []);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <motion.section
      className="container mx-auto py-16 text-center relative z-10 my-12 rounded-lg bg-white dark:bg-black shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <div className="text-center max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent py-2"
          variants={titleVariants}
        >
          Complete Course Curriculum
        </motion.h2>
        <motion.p
          className="text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-3xl mb-12 text-center"
          variants={titleVariants}
        >
          8 chapters, 74 videos, and downloadable resources to transform your sales process
        </motion.p>
        <div className="grid gap-4 mt-12 max-w-5xl mx-auto">
          {courseData.map((module, idx) => (
            <motion.div
              key={idx}
              className="relative"
              variants={moduleVariants}
              custom={idx}
              whileHover="hover"
            >
              <ModuleCard
                chapter={module.chapter}
                title={module.title}
                description={module.description}
                videos={module.videos}
                lessons={module.lessons}
                isOpen={openModule === idx}
                onClick={() => toggleModule(idx)}
                animationDelay={`animation-delay-${idx * 100}`}
              />
              {openModule !== idx && (
                <GlowingEffect
                  disabled={false}
                  glow={true}
                  variant={isDarkMode ? "white" : "default"}
                  blur={5}
                  spread={20}
                  borderWidth={1}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CurriculumSection; 