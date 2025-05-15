"use client";
import VslHero from "@/common/module/Hero/VslHero";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import Testimonial, { testimonialsData, testimonialsMovingCardsData } from "@/common/component/testimonial/testimonial";
import { InfiniteMovingCards } from "@/common/component/testimonial/infinitemovingcards";
import WhatYoullLearn from "@/common/component/what-you-learn/whatyoulearn.jsx";
import ModuleCard from "@/common/component/module-card/module-card";
import { GlowingEffect } from "@/common/component/module-card/glowing-effect";
import { courseData } from "@/common/component/module-card/coursedata";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FAQ from "@/common/component/faq/faq";
import CTASection from "@/common/component/cta-section/CTASection";

const playbookFeatures = [
  {
    icon: "📞",
    title: "Master the non-prime phone script that closes at 22%+",
    description: "The exact words that convert leads to appointments, even with credit-challenged buyers.",
  },
  {
    icon: "🧠",
    title: "Build trust without a showroom",
    description: "Psychological techniques to establish rapport and comfort remotely.",
  },
  {
    icon: "🎯",
    title: "Reprogram mindset for high-volume deals",
    description: "Shift from traditional sales thinking to the volume-focused approach.",
  },
  {
    icon: "📈",
    title: "Scale a pipeline that consistently grosses $50K+/month",
    description: "Systems to manage and track your growing pipeline of opportunities.",
  },
  {
    icon: "🤖",
    title: "Learn the exact framework our AI agents are trained on",
    description: "See the structure that powers our automated AI sales system.",
  },
  {
    icon: "📄",
    title: "Get battle-tested scripts and templates",
    description: "Ready-to-use assets you can implement immediately in your dealership.",
  },
];

const CurriculumSection = () => {
  const [openModule, setOpenModule] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apple-inspired animation variants
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

  useEffect(() => {
    // Check initial dark mode
    if (typeof window !== 'undefined') {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
      
      // Set up an observer to detect changes to the dark mode class
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
    if (openModule === index) {
      setOpenModule(null);
    } else {
      setOpenModule(index);
    }
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

export default function SalesLanding() {

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Apple-like cubic bezier curve
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.2
      }
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1500px] mx-auto">
        <VslHero
          heading="Add $300K in Gross Profit This Month Without Changing Your Inventory or Hiring More Staff"
          subheading="Learn the exact sales system used by top-performing used car dealers in Canada."
          videoId="TECDj4JUx7o"
          actionButton={
            <SparkleButton
              className="!text-sm !py-2 !px-6 hover:scale-105 transition-transform duration-200 !z-50"
              onClick={() => window.open("https://calendly.com/wes-automotiveai/30min?hide_event_type_details=1", "_blank")}
            >
              Book a strategy call
            </SparkleButton>
          }
        />
        {/* Testimonial Section */}
        <motion.div 
          className="mt-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl font-bold text-center mb-2 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Real Dealerships. Real Results.
          </motion.h1>
          <motion.h2 
            className="text-xl text-center text-gray-600 mb-8"
            variants={fadeInUp}
          >
            Proven transformations from real sales teams
          </motion.h2>
          <motion.div variants={scaleIn}>
            <InfiniteMovingCards items={testimonialsMovingCardsData} direction="right" speed="fast" />
          </motion.div>
        </motion.div>
        {/* What You'll Learn Section */}
        <WhatYoullLearn />
        {/* Curriculum Section */}
        <CurriculumSection />
        {/* FAQ Section */}
        <div className="w-full flex justify-center mt-16">
          <FAQ />
        </div>
        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
}