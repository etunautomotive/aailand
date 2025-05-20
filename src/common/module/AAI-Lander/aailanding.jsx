"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
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
import { motion } from "framer-motion";
import FAQ from "@/common/component/faq/faq";
import CTASection from "@/common/component/cta-section/CTASection";
import AgentsPage from "@/common/module/AgentsPage";
import Agents from "@/common/module/Agents";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import {
  Bot,
  Brain,
  FileText,
  TrendingUp,
  PhoneCall,
  Target,
  Shield,
  Check,
  Star,
} from "lucide-react";
import PurpleHighlight from "@/common/component/Herohighlight/hero-highlight";
import Pricing from "@/common/module/Pricing/Pricing";
import { Timeline } from "@/components/ui/timeline";

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

// Modal form as a separate component
function FreeModuleModal({
  isOpen,
  onOpenChange,
  submitted,
  submitting,
  error,
  form,
  onChange,
  onSubmit,
}) {
  return (
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
                Book Your Strategy Call
              </h2>
              <p className="text-sm text-gray-500 text-center my-3">
                Join the growing network of forward-thinking dealers who are
                leveraging AI to increase sales, reduce costs, and boost
                profits.
              </p>
            </div>
            <ModalBody className="px-7 pt-1 pb-4">
              {submitted ? (
                <div className="text-center font-semibold py-6 text-green-500">
                  Thank you! We'll be in touch soon.
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-3">
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
                      onChange={onChange}
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
                      onChange={onChange}
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
                      onChange={onChange}
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
  );
}

export default function AAILanding() {
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

  // State
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Handlers
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    // Special handling for phone number
    if (name === "phone") {
      // If it's empty, just set the empty value
      if (!value) {
        setForm((prev) => ({ ...prev, phone: "" }));
        return;
      }

      // If it doesn't start with +, add it
      if (!value.startsWith("+")) {
        setForm((prev) => ({
          ...prev,
          phone: "+" + value.replace(/^\+/g, ""),
        }));
      } else {
        // Otherwise just set the value as is
        setForm((prev) => ({ ...prev, phone: value }));
      }
    } else {
      // Normal handling for other fields
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  // Function to format phone number
  const formatPhoneNumber = useCallback((phone) => {
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
  }, []);

  // Client-side validation to prevent invalid form submissions
  const validateForm = useCallback(() => {
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
  }, [form, formatPhoneNumber]);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    async (e) => {
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
          dealershipId: "677cfadeab5b29fd94679b71", // hardcoded dealership ID
          userId: "aneeshbhat3719@gmail.com", // hardcoded user ID
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
              throw new Error(
                data.error || "Please enter a valid phone number"
              );
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
            content_name: "AAI Landing Page Form",
            content_category: "AAI Module",
          });
        }

        setSubmitted(true);
      } catch (err) {
        setError(err.message || "Please check your information and try again.");
        setSubmitted(false);
      } finally {
        setSubmitting(false);
      }
    },
    [form, submitting, validateForm, formatPhoneNumber]
  );

  // Static Data (memoized)
  const agentsData = useMemo(
    () => [
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
    ],
    []
  );
  const timelineData = useMemo(
    () => [
      {
        title: "Step 1: Customize Your Agents",
        content: (
          <>
            <p>
              We start by mapping out your dealership's ideal sales process and
              defining the outcomes you want to achieve — whether it's more
              approvals, faster speed to contact, or closing higher-value deals.
              From there, we break your lead flow into key stages and assign
              specialized AI agents to each one.
            </p>
            <p>
              Each agent is designed with a distinct personality, purpose, and
              script logic that mirrors your best-performing reps from tone of
              voice to how objections are handled. This gives you a masterfully
              engineered, repeatable system that runs 24/7, and never needs
              retraining. Once it's live, your team can plug in and scale
              without missing a beat.
            </p>
          </>
        ),
      },
      {
        title: "Step 2: Integrate & Connect",
        content: (
          <p>
            We seamlessly connect your traffic sources and AI agents to your
            existing CRM, website, and lead channels—without disrupting your
            current sales process. While your team keeps selling, the system
            quietly learns and optimizes in the background.{" "}
          </p>
        ),
      },
      {
        title: "Step 3: Activate Your AI Workforce",
        content: (
          <p>
            With your system fully mapped and agents trained, it's time to put
            them to work. Your AI agents immediately begin handling live leads
            engaging, qualifying, following up, and pushing deals forward around
            the clock. As they work, we monitor real-time performance, fine-tune
            workflows, and optimize messaging to drive stronger results with
            every conversation.
          </p>
        ),
      },
      {
        title: "Step 4: Optimize & Scale",
        content: (
          <p>
            Once your agents are in motion, we shift focus to performance tuning
            and expansion. We analyze response rates, conversion data, and
            workflow efficiency to identify what's working best. From there, we
            double down optimizing scripts, expanding to new lead sources, and
            cloning top-performing agents across more campaigns. You'll also get
            direct access to our strategy team through a private WhatsApp group
            and scheduled check-ins, ensuring you're always a step ahead as the
            system scales with your dealership.
          </p>
        ),
      },
    ],
    []
  );
  const pricingFeatures = useMemo(
    () => [
      "AI-powered lead engagement and qualification",
      "Real-time deal tracking and analytics",
      "Customizable conversation flows",
      "Integration with major CRMs and DMS",
      "24/7 customer support",
      "Monthly performance reviews",
      "No long-term contracts",
    ],
    []
  );
  const faqData = useMemo(
    () => [
      {
        question: "What does Automotive AI actually do?",
        answer:
          "Automotive AI is a sales and finance system built to engage leads, collect full credit applications, and hand off ready-to-close deals to your team. It's used to activate old CRM data, work paid or organic leads, and even bring in new applications directly from your website. From lead engagement to credit submissions, the system streamlines every step—while giving you full visibility into conversations, applications, and progress.",
      },
      {
        question: "Can it really talk to leads like a human?",
        answer:
          "Yes—and that's where it shines. The AI agents use custom-built conversation flows that mirror real sales conversations. They acknowledge customer messages, respond naturally, and stay on track even if a lead goes off-topic. You can even adjust the pacing of replies to avoid that 'bot' feel. Over time, the AI gets smarter, but it always stays within the approved tone and flow you choose.",
      },
      {
        question: "What happens if someone mentions a co-applicant?",
        answer:
          "The AI is trained to recognize when a customer mentions a second applicant and will prompt for those details at the right moment. It won't rush into it right away, which helps avoid unnecessary drop-offs. If needed, a dedicated co-applicant agent can follow up separately to gather the right info.",
      },
      {
        question: "What's included in the system?",
        answer:
          "You get a complete pipeline view of every deal stage, real-time updates during every conversation, and access to call recordings and transcripts. The system can also generate cover sheets for paper files and supports team collaboration across departments. It comes with access to a full sales academy—complete with training videos, interactive workbooks, and mindset development to help your reps improve performance fast.",
      },
      {
        question: "Can it connect with our current systems?",
        answer:
          "Yes. It already connects with all common lead providers and is built with future integrations in mind, including trade valuation tools, insurance providers, and more. If you have a lead source we don't support yet, we'll work with your team to connect it directly.",
      },
      {
        question: "What's the rollout process like?",
        answer:
          "Implementation is phased. Most teams start by using the system on their oldest data to see immediate results. From there, your staff moves through the training academy to get fully onboarded. As new hires come in, they follow the same path, with the option for in-person coaching and advanced strategy support. It's structured to get quick wins without overwhelming your team.",
      },
      {
        question: "How is support handled?",
        answer:
          "You're never left on your own. You'll have access to video tutorials, a private support chat, and ongoing optimization sessions. Whether you want help improving your agents, adjusting compliance settings, or reviewing performance, our team is here to make sure the system continues to evolve with your goals.",
      },
      {
        question: "Is there a long-term commitment?",
        answer:
          "No. Everything is month-to-month. The platform is designed to prove its value quickly—most dealers see ROI within the first few days of going live. You stay because it works, not because you're locked into a contract.",
      },
    ],
    []
  );
  const ctaFeatures = useMemo(
    () => [
      {
        icon: <Shield className="w-5 h-5" />,
        text: "30-Day Money-Back Guarantee",
        detail: "Try our system risk-free with our satisfaction guarantee",
        color: "purple",
      },
      {
        icon: <Check className="w-5 h-5" />,
        text: "Used by 74+ Dealerships",
        detail: "Proven results across North America",
        color: "purple",
      },
      {
        icon: <Star className="w-5 h-5" />,
        text: "Dedicated Support",
        detail: "24/7 access to our expert implementation team",
        color: "purple",
      },
    ],
    []
  );

  // Main render
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[1500px] mx-auto">
        <VslHero
          heading={
            <>
              Welcome to the operating system for the{" "}
              <PurpleHighlight>modern dealer.</PurpleHighlight>
            </>
          }
          subheading="Lean team. Smart tech. More Revenue. Massive profits."
          videoId="TECDj4JUx7o"
          aboveVideoText="Watch: How Dealers Are using Automotive AI's 6 pillars of automation to Stop Bleeding Profit in 2025"
          actionButton={
            <>
              <SparkleButton
                className="!text-sm !py-2 !px-6 hover:scale-105 transition-transform duration-200 !z-50"
                onClick={onOpen}
              >
                Book a Strategy Call
              </SparkleButton>
            </>
          }
          dealerCount={74}
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
        <WhatYoullLearn
          title={
            <>
              The 6 Pillars of Automation We Deliver for Guaranteed Scale While{" "}
              <PurpleHighlight>Increasing Profit</PurpleHighlight>
            </>
          }
          features={[
            {
              icon: <Bot className="text-purple-600 w-8 h-8" />,
              title: "Sales Automation",
              description:
                "AI agents revive old leads, follow up instantly, and pre-qualify buyers 24/7. Say goodbye to missed opportunities and bottlenecks.",
            },
            {
              icon: <Brain className="text-purple-600 w-8 h-8" />,
              title: "Staffing & Training",
              description:
                "From job ads to onboarding and role-based training, we equip your team to perform — faster and with less turnover.",
            },
            {
              icon: <FileText className="text-purple-600 w-8 h-8" />,
              title: "Sales Process Compliance",
              description:
                "Centralized logs of all texts, calls, and follow-ups. Catch dropped balls, protect customer data, and enforce consistency.",
            },
            {
              icon: <TrendingUp className="text-purple-600 w-8 h-8" />,
              title: "Finance Department Automation",
              description:
                "Push credit apps into Dealertrack or Credit App, and package every deal for speed and precision.",
            },
            {
              icon: <PhoneCall className="text-purple-600 w-8 h-8" />,
              title: "Internal Staff Optimization",
              description:
                "Let AI handle inbound leads, outbound follow-up, appointment booking, and routing freeing your best closers to focus.",
            },
            {
              icon: <Target className="text-purple-600 w-8 h-8" />,
              title: "Fixed Operations",
              description:
                "Drive more service traffic, automate service reminders, and boost service revenue year-round.",
            },
          ]}
        />
        <AgentsPage
          header="Meet Your New Co-Pilots, Built For Scale."
          subheader="Our platform features specialized AI agents designed specifically for automotive dealerships. Each agent is trained on industry-specific processes and optimized to handle different aspects of the sales journey, from initial contact to deal closure."
          agentData={agentsData}
          ctaTitle="Ready to transform your dealership?"
          ctaSubtitle="Our AI agents work together seamlessly to optimize every step of your sales process, from lead generation to deal closure."
          onCtaClick={onOpen}
        />
        <Timeline data={timelineData} />
        <Pricing
          sectionTitle="AutomotiveAI Platform Pricing"
          mainTitle="Monthly pricing, no long-term commitment required"
          subtitle={
            "We believe in earning your business every single month.\nNo contracts. No pressure. Just results."
          }
          badgeText="Limited Time Offer"
          offerTitle="Automotive AI Dealer Advantage"
          offerSubtitle="Early Adopter Pricing"
          features={pricingFeatures}
          buttonText="Book a Strategy Call"
          useModalInsteadOfCalendly={true}
          onCtaClick={onOpen}
        />
        <div className="w-full flex justify-center mt-16">
          <FAQ title="Frequently Asked Questions" faqs={faqData} />
        </div>
        <CTASection
          badgeText="Early Adopter Special"
          mainHeading="Transform Your Dealership with AI-Powered Automation"
          subheading="Join the growing network of forward-thinking dealers who are leveraging AI to increase sales, reduce costs, and boost profits."
          features={ctaFeatures}
          ctaButtonText="Book a Strategy Call"
          testimonial={{
            quote:
              "AAI helped me break every 30-day record I had. 20 deals, over $30K profit all in one month.",
            author: "Jaedynn Cutler",
            position:
              "Finance Manager — Approval Express Canada — Vancouver, BC",
          }}
          contactEmail="justin@automotiveai.ca"
          useModalInsteadOfCalendly={true}
          onCtaClick={onOpen}
        />
        <FreeModuleModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          submitted={submitted}
          submitting={submitting}
          error={error}
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
