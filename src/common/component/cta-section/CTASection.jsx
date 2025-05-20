"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SparkleButton from "../sparkle-button/SparkleButton";
import { Shield, Check, Star, ChevronRight, Sparkles } from "lucide-react";
import styles from "./cta-section.module.css";
import { useTheme } from "next-themes";
import PixelCanvas from "../element/PixelCanvas";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

const AnimatedCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, detail, isDarkMode, color = "purple" }) => {
  const [hovered, setHovered] = useState(false);
  // Color classes for title text
  const colorClass =
    color === "green"
      ? "text-green-500 dark:text-green-400"
      : color === "yellow"
      ? "text-yellow-400 dark:text-yellow-300"
      : "text-purple-500 dark:text-purple-400";

  // Transparent background in dark mode, white in light mode
  const bgClass = isDarkMode
    ? "bg-transparent border border-white/20"
    : "bg-white border border-gray-200";

  return (
    <div
      className={`rounded-2xl p-5 relative overflow-visible transition-colors duration-200 ${bgClass} group shadow-sm`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      style={{ minHeight: 120 }}
    >
      {/* Pixel effect always mounted, opacity transitions on hover */}
      <PixelCanvas
        color={color}
        gap={10}
        speed={45}
        className={`opacity-5 group-hover:opacity-40 transition-opacity duration-500 absolute inset-0 w-full h-full z-0`}
      />
      <div className="relative z-10 flex items-start gap-4">
        <div
          className={`rounded-full p-2 flex-shrink-0 bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300`}
        >
          {icon}
        </div>
        <div className="text-left">
          <h3 className={`font-semibold text-lg mb-1 ${colorClass}`}>
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
};

const CTASection = ({
  badgeText = "Limited Time Opportunity",
  mainHeading = "Ready to Add $300k in Monthly Gross Profit?",
  subheading = "Join hundreds of dealerships who are already using our proven system to increase their sales and profits.",
  features = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "30-Day Money-Back Guarantee",
      detail: "Risk-free investment in your business growth",
      color: "purple",
    },
    {
      icon: <Check className="w-5 h-5" />,
      text: "Used by 237+ Dealerships",
      detail: "Proven results across North America",
      color: "purple",
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Lifetime Access",
      detail: "One-time payment, permanent resources",
      color: "purple",
    },
  ],
  ctaButtonText = "Book a Strategy Call",
  testimonial = {
    quote:
      "We added $78,451 in gross profit in the first month alone by implementing this system.",
    author: "Michael Jensen",
    position: "Sales Director — AutoPrime Motors — Calgary, AB",
  },
  contactEmail = "justin@automotiveai.ca",
  useModalInsteadOfCalendly = false,
  onCtaClick,
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the current theme
  const isDarkMode =
    mounted &&
    (theme === "dark" || (theme === "system" && resolvedTheme === "dark"));

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

  // Special handling for phone number
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

  // Client-side validation
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

      // Prepare payload - using same values as main form
      const payload = {
        dealershipId: "677cfadeab5b29fd94679b71", // hardcoded dealership ID
        userId: "aneeshbhat3719@gmail.com", // hardcoded user ID
        firstName: form.firstName,
        lastName: form.lastName,
        phoneNumber: formattedPhone,
      };

      // Make API call to backend
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
      } catch (parseError) {
        throw new Error(
          "Please try again. There was a problem with your submission."
        );
      }

      // Check if response is ok (status in the range 200-299)
      if (!response.ok) {
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

      // Track successful submission if Facebook Pixel is available
      if (window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Sales Landing Page Form",
          content_category: "Sales Module",
        });
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Please check your information and try again.");
      setSubmitted(false);
    } finally {
      setSubmitting(false);
    }
  };

  // Default feature and testimonial values can be used directly from props
  // since they are already provided in the parameters

  return (
    <section className="w-full py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
        <AnimatedCard>
          <motion.div
            className={`inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium ${
              isDarkMode
                ? "bg-purple-900/30 text-purple-300 border border-purple-700/30"
                : "bg-purple-100 text-purple-800 border border-purple-200"
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="flex items-center justify-center">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>{badgeText}</span>
            </span>
          </motion.div>
        </AnimatedCard>

        <AnimatedCard delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Ready to Add <span className={styles.gradientText}>$300k</span> in
            Monthly Gross Profit?
          </h2>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <p className="text-lg md:text-xl mb-10 mx-auto max-w-3xl text-gray-700 dark:text-gray-300">
            Join hundreds of dealerships who are already using our proven system
            to increase their sales and profits.
          </p>
        </AnimatedCard>

        <AnimatedCard delay={0.3}>
          <div className="grid md:grid-cols-3 gap-6 mb-10 relative z-10">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.text}
                detail={feature.detail}
                isDarkMode={isDarkMode}
                color={feature.color}
              />
            ))}
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.4}>
          <div className="flex justify-center mb-8 relative z-0">
            <SparkleButton
              className="!text-base !py-4 !px-8 !flex !items-center"
              onClick={useModalInsteadOfCalendly ? onOpen : onCtaClick}
            >
              {ctaButtonText}
            </SparkleButton>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.5}>
          <div className="text-center mb-10">
            <blockquote className="text-xl font-medium mb-3 italic">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500 mr-3">
                <div className="w-full h-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={0.6}>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Questions? Contact us at{" "}
            <a
              href="mailto:support@automotiveai.ca"
              className="font-medium underline text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
            >
              justin@automotiveai.ca
            </a>
          </p>
        </AnimatedCard>
      </div>
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
                  This free training has already helped hundreds of dealerships
                  boost profit fast. Enter your info, and we'll send you the
                  first module right away. no credit card, no strings attached.
                </p>
              </div>
              <ModalBody className="px-7 pt-1 pb-4">
                {submitted ? (
                  <div className="text-center font-semibold py-6 text-green-500">
                    Thank you! We'll be in touch soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
    </section>
  );
};

export default CTASection;
