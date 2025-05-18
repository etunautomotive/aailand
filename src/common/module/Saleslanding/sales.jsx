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
import CurriculumSection from "@/common/component/curriculum-stack/CurriculumSection";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

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

// Animation variants for SalesLanding page (outside component for performance)
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
      ease: [0.22, 1, 0.36, 1],
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

export default function SalesLanding() {
  // Facebook Pixel: fire on page load
  useEffect(() => {
    if (!window.fbq) {
      !(function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = "https://connect.facebook.net/en_US/fbevents.js";
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, "script");
      window.fbq("init", "661936249783343");
    }
    window.fbq("track", "PageView");
  }, []);

  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: handle form submission (API call, etc.)
  };

  // Main render
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1500px] mx-auto">
        <VslHero
          heading="Add $300K in Gross Profit This Month Without Changing Your Inventory or Hiring More Staff"
          subheading="Learn the exact sales system used by top-performing used car dealers in Canada."
          videoId="TECDj4JUx7o"
          actionButton={
            <>
              <SparkleButton
                className="!text-sm !py-2 !px-6 hover:scale-105 transition-transform duration-200 !z-50"
                onClick={onOpen}
              >
                Get Module 1 Free
              </SparkleButton>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable hideCloseButton>
                <ModalContent className="modern-modal bg-white text-neutral-900 dark:bg-zinc-900 dark:text-white" hideCloseButton>
                  {(onClose) => (
                    <>
                      <div className="modal-header text-center">Text Us Now For Module 1 Free!
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-4">
                        This free training has already helped hundreds of dealerships boost profit fast. Enter your info, and we'll send you the first module right away. no credit card, no strings attached.
                      </p>
                      <ModalBody>
                        {submitted ? (
                          <div className="text-center font-semibold py-6 text-green-400 dark:text-green-600">
                            Thank you! We'll be in touch soon.
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <input
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={form.firstName}
                              onChange={handleChange}
                              required
                            />
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={form.lastName}
                              onChange={handleChange}
                              required
                            />
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Phone Number"
                              value={form.phone}
                              onChange={handleChange}
                              required
                            />
                            <button type="submit" className="modern-modal__submit">
                              Submit
                            </button>
                          </form>
                        )}
                      </ModalBody>
                      <div className="modal-footer">
                        <button className="modern-modal__close" onClick={onClose}>
                          Close
                        </button>
                      </div>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </>
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
        {/* Inserted Get Module 1 Free button between WhatYoullLearn and CurriculumSection */}
        <div className="flex justify-center my-10">
          <SparkleButton
            className="!text-base !py-4 !px-8 !flex !items-center"
            onClick={onOpen}
          >
            Get Module 1 Free
          </SparkleButton>
        </div>
        <CurriculumSection />
        {/* Inserted Get Module 1 Free button between CurriculumSection and FAQ */}
        <div className="flex justify-center my-10">
          <SparkleButton
            className="!text-base !py-4 !px-8 !flex !items-center"
            onClick={onOpen}
          >
            Get Module 1 Free
          </SparkleButton>
        </div>
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