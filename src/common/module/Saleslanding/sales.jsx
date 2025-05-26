"use client";
import VslHero from "@/common/module/Hero/VslHero";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import Testimonial, {
  testimonialsData,
  testimonialsMovingCardsData,
} from "@/common/component/testimonial/testimonial";
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
import { DEALERSHIP_ID, USER_ID } from "@/common/constant/form";

const playbookFeatures = [
  {
    icon: "📞",
    title: "Master the non-prime phone script that closes at 22%+",
    description:
      "The exact words that convert leads to appointments, even with credit-challenged buyers.",
  },
  {
    icon: "🧠",
    title: "Build trust without a showroom",
    description:
      "Psychological techniques to establish rapport and comfort remotely.",
  },
  {
    icon: "🎯",
    title: "Reprogram mindset for high-volume deals",
    description:
      "Shift from traditional sales thinking to the volume-focused approach.",
  },
  {
    icon: "📈",
    title: "Scale a pipeline that consistently grosses $50K+/month",
    description:
      "Systems to manage and track your growing pipeline of opportunities.",
  },
  {
    icon: "🤖",
    title: "Learn the exact framework our AI agents are trained on",
    description: "See the structure that powers our automated AI sales system.",
  },
  {
    icon: "📄",
    title: "Get battle-tested scripts and templates",
    description:
      "Ready-to-use assets you can implement immediately in your dealership.",
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
      when: "beforeChildren",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
    },
  },
};

export default function SalesLanding() {
  // Facebook Pixel: fire on page load
  useEffect(() => {
    if (!window.fbq) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
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

  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for phone number
    if (name === "phone") {
      // If it's empty, just set the empty value
      if (!value) {
        setForm({ ...form, phone: "" });
        return;
      }

      // If it doesn't start with +, add it
      if (!value.startsWith("+")) {
        setForm({ ...form, phone: "+" + value.replace(/^\+/g, "") });
      } else {
        // Otherwise just set the value as is
        setForm({ ...form, phone: value });
      }
    } else {
      // Normal handling for other fields
      setForm({ ...form, [name]: value });
    }
  };

  // Function to format phone number
  const formatPhoneNumber = (phone) => {
    if (!phone) return null;

    // If already has +, check it's a proper format
    if (phone.startsWith("+")) {
      // Remove non-digit characters after +
      const cleanedPhone = "+" + phone.substring(1).replace(/\D/g, "");
      // Ensure we have a proper E.164 format (at least 11 digits including country code)
      return cleanedPhone.length >= 11 ? cleanedPhone : null;
    }

    // Remove non-digit characters
    const digits = phone.replace(/\D/g, "");

    // For North American numbers, should be 10 digits without country code
    // or 11 digits with country code (usually 1)
    if (digits.length === 10) {
      return `+1${digits}`; // Add North American country code
    } else if (digits.length === 11 && digits.startsWith("1")) {
      return `+${digits}`; // Add + for E.164 format
    }

    // Invalid format
    return null;
  };

  // Client-side validation to prevent invalid form submissions
  const validateForm = () => {
    if (!form.firstName || !form.lastName) {
      setError("Please enter both first and last name");
      return false;
    }

    if (!form.phone) {
      setError("Please enter your phone number");
      return false;
    }

    // Check if phone is valid before submission
    const formattedPhone = formatPhoneNumber(form.phone);
    if (!formattedPhone) {
      setError("Please enter a valid phone number in format +12345678901");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return; // Prevent multiple submissions

    setSubmitting(true);
    setError("");

    // Validate form before submission
    if (!validateForm()) {
      setSubmitting(false);
      return;
    }

    try {
      // Format phone number
      const formattedPhone = formatPhoneNumber(form.phone);

      // Prepare payload
      const payload = {
        dealershipId: DEALERSHIP_ID,
        userId: USER_ID,
        firstName: form.firstName,
        lastName: form.lastName,
        phoneNumber: formattedPhone,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contacts/sales-landing`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      // Always parse the response regardless of status
      let data;
      try {
        data = await response.json();
        console.log("Response data:", data);
      } catch (parseError) {
        console.error("Error parsing response:", parseError);
        throw new Error(
          "Please try again. There was a problem with your submission."
        );
      }

      // Check if response is ok (status in the range 200-299)
      if (!response.ok) {
        console.error("Server returned error:", data);

        // Map error messages to user-friendly versions
        if (data.error) {
          if (
            data.error.includes("phone number") ||
            data.error.includes("number")
          ) {
            throw new Error(data.error || "Please enter a valid phone number");
          } else if (data.error.includes("exists")) {
            throw new Error(
              "You're already registered! We'll contact you soon."
            );
          } else {
            throw new Error(
              data.error || "Please check your information and try again"
            );
          }
        } else {
          throw new Error("Please check your information and try again");
        }
      }

      // Track successful submission with Facebook Pixel
      if (window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Sales Landing Page Form",
          content_category: "Sales Module",
        });
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err.message || "Please check your information and try again.");
      setSubmitted(false); // Ensure we're not showing success message
    } finally {
      setSubmitting(false);
    }
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
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable
                hideCloseButton
              >
                <ModalContent
                  className="bg-white text-neutral-900 rounded-3xl shadow-xl max-w-sm mx-auto"
                  hideCloseButton
                >
                  {(onClose) => (
                    <>
                      <div className="p-7 pb-3">
                        <h2 className="text-xl font-semibold text-center">
                          Text Us Now For Module 1 Free!
                        </h2>
                        <p className="text-sm text-gray-500 text-center my-3">
                          This free training has already helped hundreds of
                          dealerships boost profit fast. Enter your info, and
                          we&apos;ll send you the first module right away. no
                          credit card, no strings attached.
                        </p>
                      </div>
                      <ModalBody className="px-7 pt-1 pb-4">
                        {submitted ? (
                          <div className="text-center font-semibold py-6 text-green-500">
                            Thank you! We&apos;ll be in touch soon.
                          </div>
                        ) : (
                          <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-3"
                          >
                            {error && (
                              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 flex items-start">
                                <svg
                                  className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <div className="text-sm">{error}</div>
                              </div>
                            )}
                            <div className="bg-gray-100 rounded-2xl px-4 py-2">
                              <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={form.firstName}
                                onChange={handleChange}
                                className="w-full bg-transparent border-none p-1 focus:outline-none text-gray-700 placeholder-gray-400"
                                required
                                disabled={submitting}
                              />
                            </div>
                            <div className="bg-gray-100 rounded-2xl px-4 py-2">
                              <input
                                id="lastName"
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={form.lastName}
                                onChange={handleChange}
                                className="w-full bg-transparent border-none p-1 focus:outline-none text-gray-700 placeholder-gray-400"
                                required
                                disabled={submitting}
                              />
                            </div>
                            <div className="bg-gray-100 rounded-2xl px-4 py-2">
                              <input
                                id="phone"
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full bg-transparent border-none p-1 focus:outline-none text-gray-700 placeholder-gray-400"
                                required
                                disabled={submitting}
                                pattern="^\+[0-9]{11,}"
                                title="Phone number in international format (e.g., +12345678901)"
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-full text-center font-medium transition-colors text-gray-800 mt-2 mb-4"
                              disabled={submitting}
                            >
                              {submitting ? (
                                <span className="flex items-center justify-center">
                                  <svg
                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                    ></circle>
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                  </svg>
                                  Processing...
                                </span>
                              ) : (
                                "Submit"
                              )}
                            </button>
                          </form>
                        )}
                      </ModalBody>
                      <div className="flex justify-end mb-6 pr-7">
                        <button
                          className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-full text-center text-gray-500 text-sm"
                          onClick={onClose}
                        >
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
            <InfiniteMovingCards
              items={testimonialsMovingCardsData}
              direction="right"
              speed="fast"
            />
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
