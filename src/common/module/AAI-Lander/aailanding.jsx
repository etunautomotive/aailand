"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import VslHero from "@/common/module/Hero/VslHero";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import { testimonialsMovingCardsData } from "@/common/component/testimonial/testimonial";
import { InfiniteMovingCards } from "@/common/component/testimonial/infinitemovingcards";
import WhatYoullLearn from "@/common/component/what-you-learn/whatyoulearn.jsx";
import { motion } from "framer-motion";
import FAQ from "@/common/component/faq/faq";
import CTASection from "@/common/component/cta-section/CTASection";
import AgentsPage from "@/common/module/AgentsPage";
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
import { Timeline } from "@/components/ui/timeline";
import { DEALERSHIP_ID, USER_ID } from "@/common/constant/form";
import ProblemSection from "@/common/component/problem-section/problem-section";
import SolutionSection from "@/common/component/solution-section/solution-section";
import LeadIntegrations from "@/common/component/lead-integrations/lead-integrations";
import LandingAgents from "@/common/component/landing-agents/landing-agents";
import ScrollingBrands from "@/common/component/scrolling-brands/ScrollingBrands";



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
                See it For Yourself
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
                  Thank you! We&apos;ll be in touch soon.
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
        title: "Step 0: You Are Here",
        content: (
          <p>
            Losing $50,000+ monthly to unworked leads and staff turnover.
          </p>
        ),
      },
      {
        title: "Step 1: Create and Connect Your Twilio Account",
        content: (
          <p>
            Plug into enterprise-grade communication in under 10 minutes. We&apos;ll connect your Twilio account so AI agents can text and call through your existing channels.
          </p>
        ),
      },
      {
        title: "Step 2: Access Our Platform",
        content: (
          <p>
            Get your AI command center in 24 hours. Monitor every conversation and performance metric from your personalized dashboard. No technical setup required.
          </p>
        ),
      },
      {
        title: "Step 3: Customize Your Agents For Each Lead Source",
        content: (
          <p>
            Mirror your best reps, but better. We map your sales process and create specialized AI agents for each stage. Each agent has distinct personality and scripts that match your top performers - running 24/7 without retraining.
          </p>
        ),
      },
      {
        title: "Step 4: Launch Database Reactivation",
        content: (
          <p>
           See ROI in 7 days. Re-engage dormant leads and past customers with 4-19% converting to appointments in week one often covering your entire monthly investment from this campaign alone.
          </p>
        ),
      },
      {
        title: "Step 5: Integrate & Connect",
        content: (
          <p>
            Zero disruption integration. We connect to your DMS and lead sources while your team keeps selling. Your staff won&apos;t notice until they see more qualified leads in Automotive AI.
          </p>
        ),
      },
      {
        title: "Step 6: Activate Your AI Workforce",
        content: (
          <p>
            24/7 sales army goes live. AI agents handle all leads instantly. Engaging, qualifying, and following up around the clock. Response times drop from hours to seconds, follow-up rates hit 100%.
          </p>
        ),
      },
      {
        title: "Step 7: Optimize & Scale",
        content: (
          <p>
            Continuous improvement that compounds results. We analyze performance data and optimize everything from responses, workflows, and expansion to new lead sources. Plus direct access to our strategy team via WhatsApp.
          </p>
        ),
      },
    ],
    []
  );
  const faqData = useMemo(
    () => [
      {
        question: "This sounds too good to be true. How do I know it actually works?",
        answer:
          "I get it. You've probably been burned by software promises before. Here's the difference: We're not some generic chatbot company. We built this specifically for automotive after losing $710,000 ourselves from poor lead management. Look at the results: Our dealers are going from zero subprime experience to breaking every 30-day record. 20 deals, $30K profit in one month. We have dealers telling us it's \"by far the best system we have ever used.\" These aren't paid testimonials. These are real dealers solving the same problems you face. Plus, we're so confident it works that we offer white glove service to ensure your AI implementation is a success.",
      },
      {
        question: "We already have a CRM/BDC system. Why do we need another one?",
        answer:
          "You don't need to replace anything. We can assist with pulling your data from PBS, Activix, whatever you're using. Think of it this way: Your current CRM is like having a filing cabinet. Our AI is like having a world-class salesperson who never sleeps, never calls in sick, and works that filing cabinet 24/7. Our dealers keep their existing systems AND add ours because now their leads actually get worked properly. Dealers paying $2,500/month for their current CRM go from 3-9% closing ratio to seeing instant improvements because every lead gets touched within 30 seconds instead of sitting until morning.",
      },
      {
        question: "Our sales team won't want to use this. They like doing things their own way.",
        answer:
          "Here's what actually happens: Your sales team will LOVE this system because it makes their job easier, not harder. Instead of chasing cold leads and doing data entry, they get pre-qualified, ready-to-buy customers handed to them. Our dealers tell us they were skeptical at first, but now they say they'd \"never go back to doing things the old way.\" The AI handles the grunt work. The follow-ups, the qualification, the objection handling. Your salespeople get to do what they do best: close deals. It's like giving them a personal assistant who works 24/7.",
      },
      {
        question: "What if the AI says something wrong or offends a customer?",
        answer:
          "This isn't some generic ChatGPT bot. Every AI agent is custom-trained on YOUR processes, YOUR brand voice, and YOUR dealership values. We spend the first 48 hours programming it to sound exactly like your best salesperson. And your BDC/Sales people monitor every conversation and can jump in anytime. Plus, after handling millions of automotive conversations, our AI actually handles objections BETTER than most salespeople. It never gets frustrated, never has a bad day, and always follows your proven scripts perfectly.",
      },
      {
        question: "This seems expensive. How do I know I'll get ROI?",
        answer:
          "Let's do the math. You're currently losing $710,000 annually from poor lead management. That's $59,000 per month in missed opportunities. Our system costs $5,000/month. If it captures just ONE additional deal per month (which is conservative since most dealers see 10-20 more), you've paid for it. But here's the real kicker: Remember those \"dead\" leads in your database? We're seeing 4-19% conversion on old data. If you have 1,000 old leads and convert just 4%, that's 40 re-engaged customers. Close 15% of those (6 deals) at $5,000 gross profit each = $30,000 profit from leads you already paid for. Most dealers cover their entire monthly investment just from database reactivation in 1-2 weeks.",
      },
      {
        question: "We're a small dealership. Is this only for big stores?",
        answer:
          "Actually, smaller dealerships see the biggest impact because you can't afford to waste ANY leads. Look at it this way: If you're getting 50 leads per month and only converting 6% (3 deals), our system typically gets you to 31% conversion (15+ deals). That's 12 additional deals per month from the same lead spend. The beauty is it scales to your size. Small store? You get the same AI power as the big guys. You're not paying per lead or per conversation. It's one flat rate whether you process 50 leads or 500.",
      },
      {
        question: "What happens if we want to cancel? Are we locked into a contract?",
        answer:
          "Zero contracts. Month-to-month only. We earn your business every single month. Why? Because we're confident in our results. If we locked you into a contract and the system didn't work, you'd hate us and tell everyone. Instead, we focus on delivering value every month so you WANT to stay. Most software companies demand contracts because they know their product doesn't deliver. We do the opposite. Prove our worth first, then earn your continued business.",
      },
      {
        question: "How long does it take to set up? We don't have time for a complicated implementation.",
        answer:
          "You'll be live and generating results in 48 hours. Not weeks or months. 48 hours. Here's the process: Day 1, we set up your pre-onboarding meeting to create and connect your twilio and preferred large language model. Day 2, we create your database reactivation agent and set your agents persona fields, objections handles etc and we launch your database reactivation campaign. By Day 3, you're seeing appointments and credit applications from leads you thought were dead. No complicated training. No disruption to your current operations. Your team keeps doing what they do best while the AI handles everything else in the background.",
      },
      {
        question: "How do I know you'll be around in a year? What if you go out of business?",
        answer:
          "Fair question. We're not some venture-funded startup burning cash. We're profitable from day one because our system actually works and dealers gladly pay for results. We're already at 40+ dealerships in just 3 months since launch, with zero churn. When dealers see 10-20 additional deals per month, they don't cancel. They refer their friends. Plus, all your data stays in your control. You own your customer information, your conversations, everything. We're the tool, you own the results.",
      },
      {
        question: "Our salespeople have their own style and process. Will AI sound robotic or generic?",
        answer:
          "The opposite. Each salesperson gets their own AI agent trained on THEIR specific style and process. We ask detailed questions about how they communicate, their selling approach, even which sales trainers they follow. The AI learns to sound like them, not like a robot. We can make it sound like Grant Cardone, Jeremy Miner, or however your team naturally communicates. Customers often prefer talking to our AI over inexperienced salespeople because it's consistent and knowledgeable. Your top performer's approach can now be replicated across unlimited leads simultaneously. It's like cloning your best salesperson's skills without the human limitations.",
      },
      {
        question: "We've tried other AI chatbots before and they were terrible. How is this different?",
        answer:
          "Those were generic chatbots built for every industry. We're built specifically for automotive, RV, and powersports. We understand your inventory, your financing, your trade-in process. Generic AI says \"let me connect you with an agent\" when asked about interest rates. Our AI knows your lenders, your approval rates, your inventory levels. It can handle real objections and actually move deals forward. Plus, we're not just a chatbot. We're a complete operating system that handles lead management, follow-ups, credit pulls, and integrates with DealerTrack and Credit App. It's like comparing a toy car to a Ferrari.",
      },
      {
        question: "Our market is different. Will this work in our specific area or customer base?",
        answer:
          "We customize everything for your specific market and customer base. Whether you're working with prime customers and want to book appointments or working subprime leads over the phone, we adapt to your process. We've worked with dealers from coast to coast, different demographics, different credit profiles. The beauty of AI is you can train it exactly to your specific customer language and objections, then handles them consistently. Your market isn't different in terms of basic human psychology. People want to be heard, understood, and helped. Our AI does that better than most humans because it never gets tired, frustrated, or has a bad day.",
      },
      {
        question: "Is our data protected?",
        answer:
          "Absolutely. We use enterprise-grade security with 99.9% uptime and bank-level encryption to protect all your information. But here's what's most important: YOU own all your data. Every customer record, every piece of information belongs to you, not us. We're just the tool processing it. Unlike some companies that hold your data hostage, you can export everything at any time. We're not in the business of owning your customer relationships we're in the business of helping you work them better. Plus, this is actually MORE secure than your current process. No more customer data sitting on salespeople's personal phones or scattered across different systems. Everything is centralized, sanitized, and tracked. If you ever decide to leave the system, you take all your data with you. We believe in earning your business through results, not by trapping your information.",
      },
      {
        question: "What does Automotive AI actually do?",
        answer:
          "Automotive AI is a sales and finance system built to engage leads, collect full credit applications, and hand off ready-to-close deals to your team. It's used to activate old CRM data, work paid or organic leads, and even bring in new applications directly from your website. From lead engagement to credit submissions, the system streamlines every step while giving you full visibility into conversations, applications, and progress.",
      },
      {
        question: "Can it really talk to leads like a human?",
        answer:
          "Yes, and that's where it shines. The AI agents use custom-built conversation flows that mirror real sales conversations. They acknowledge customer messages, respond naturally, and stay on track even if a lead goes off-topic. You can even adjust the pacing of replies to avoid that 'bot' feel. Over time, the AI gets smarter, but it always stays within the approved tone and flow you choose.",
      },
      {
        question: "What happens if someone mentions a co-applicant?",
        answer:
          "The AI is trained to recognize when a customer mentions a second applicant and will prompt for those details at the right moment. It won't rush into it right away, which helps avoid unnecessary drop-offs. If needed, a dedicated co-applicant agent can follow up separately to gather the right info.",
      },
      {
        question: "What's included in the system?",
        answer:
          "You get a complete pipeline view of every deal stage, real-time updates during every conversation, and access to call recordings and transcripts. The system can also generate cover sheets for paper files and supports team collaboration across departments. It comes with access to a full sales academy complete with training videos, interactive workbooks, and mindset development to help your reps improve performance fast.",
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
          "No. Everything is month-to-month. The platform is designed to prove its value quickly. Most dealers see ROI within the first few days of going live. You stay because it works, not because you're locked into a contract.",
      },
    ],
    []
  );
  const ctaFeatures = useMemo(
    () => [
      {
        icon: <Shield className="w-5 h-5" />,
        text: "White Glove Service",
        detail: "Our team ensure's your AI implentation is a sucess.",
        color: "purple",
      },
                  {
              icon: <Check className="w-5 h-5" />,
              text: "Trusted by 40+ Dealerships",
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
              Revolutionary Auto, RV & Powersports AI Sales Force That{" "}
              <PurpleHighlight>Works Your Leads 24/7</PurpleHighlight>
            </>
          }
          subheading="Lean team. Smart tech. More Revenue. Massive profits."
          videoId="wamN2O6Zo2U"
          aboveVideoText="Watch: How AI Sales Force is Recapturing $50,000+ in Lost Deals Every Month"
          actionButton={
            <>
              <SparkleButton
                href="/vsldemo"
              >
                See it For Yourself
              </SparkleButton>
            </>
          }
          dealerCount={40}
        />

        {/* Scrolling Brands */}
        <div className="mt-8 mb-8 relative z-10">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Trusted by leading automotive brands
            </p>
          </div>
          <ScrollingBrands />


        </div>
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
        {/* Problem Section */}
        <ProblemSection />
        
        {/* Schedule Demo CTA - After Problem Section */}
        <div className="w-full flex justify-center py-8">
          <SparkleButton
            className="!text-lg !py-4 !px-8 hover:scale-105 transition-transform duration-200"
            href="/vsldemo"
          >
            See it For Yourself
          </SparkleButton>
        </div>
        
        {/* Solution Section */}
        {console.log("AAI Landing: About to render SolutionSection")}
        <SolutionSection />
        
        {/* Schedule Demo CTA - After Solution Section */}
        <div className="w-full flex justify-center py-8">
          <SparkleButton
            className="!text-lg !py-4 !px-8 hover:scale-105 transition-transform duration-200"
            href="/vsldemo"
          >
            See it For Yourself
          </SparkleButton>
        </div>
        {/* Additional Testimonials Section */}
        <motion.div
          className="mt-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.div variants={scaleIn}>
            <InfiniteMovingCards
              items={testimonialsMovingCardsData}
              direction="left"
              speed="fast"
            />
          </motion.div>
        </motion.div>
        {/* What You'll Learn Section */}
        <WhatYoullLearn
          title={
            <>
              <PurpleHighlight>AI-Powered</PurpleHighlight> Support Across Departments
            </>
          }
          features={[
            {
              icon: <Bot className="text-purple-600 w-8 h-8" />,
              title: "Retail Sales",
              description:
                "Our AI sales agents provide comprehensive support for your frontline retail sales team, helping close more deals and improve customer interactions.",
            },
            {
              icon: <TrendingUp className="text-purple-600 w-8 h-8" />,
              title: "Non-Prime Financing",
              description:
                "Specialized AI assistance for qualifying leads with customers facing challenging financing scenarios, ensuring customers are qualified and ready to buy.",
            },
            {
              icon: <Target className="text-purple-600 w-8 h-8" />,
              title: "Fixed Operations",
              description:
                "Streamlined support for service, parts, and maintenance departments to maximize efficiency and bookings",
            },
            {
              icon: <PhoneCall className="text-purple-600 w-8 h-8" />,
              title: "BDC",
              description:
                "Enhanced capabilities for your Business Development Center, improving lead management and customer communication.",
            },
          ]}
        />
        {/* Lead Integrations Section */}
        <LeadIntegrations />
        
        {/* Schedule Demo CTA - After Lead Integrations Section */}
        <div className="w-full flex justify-center py-8">
          <SparkleButton
            className="!text-lg !py-4 !px-8 hover:scale-105 transition-transform duration-200"
            href="/vsldemo"
          >
            See it For Yourself
          </SparkleButton>
        </div>
        {/* Timeline Section */}
        <Timeline data={timelineData} />
        {/* Landing Agents Section */}
        <LandingAgents />
        
        {/* Schedule Demo CTA - After Landing Agents Section */}
        <div className="w-full flex justify-center py-8">
          <SparkleButton
            className="!text-lg !py-4 !px-8 hover:scale-105 transition-transform duration-200"
            href="/vsldemo"
          >
            See it For Yourself
          </SparkleButton>
        </div>
        <AgentsPage
          header="Don't have an Agent You're Looking for? Build a Custom One."
          subheader="Our foundational technology empowers you to create custom AI agents tailored to any process or department within your dealership. Choose from our proven foundation models and leverage our intuitive AI Agent Builder to design specialized solutions that fit your unique workflow requirements. Whether you need support for service scheduling, parts inventory, finance processing, or any other dealership operation, our platform provides the flexibility to build exactly what your business needs."
          agentData={agentsData}
          ctaTitle="Ready to transform your dealership?"
          ctaSubtitle="Our AI agents work together seamlessly to optimize every step of your sales process, from lead generation to deal closure."
        />
        <div className="w-full flex justify-center mt-16">
          <FAQ title="Frequently Asked Questions" faqs={faqData} />
        </div>
        <CTASection
          badgeText="Early Adopter Special"
          mainHeading="Ready to Plug the $710,000 Leak That's Draining Your Dealership?"
          subheading="Join 40+ smart dealerships who are already using our proven AI Sales Army to eliminate the annual loss from poor lead management and turn 'dead' data into profit-generating machines."
          features={ctaFeatures}
          ctaButtonText="See it For Yourself"
          testimonial={{
            quote:
              "System is amazing, I have 10 out so far this month and pushing for 15-20 for 100+k doing it all front to back myself. Couldnt do it without AAI",
            author: "Thomas",
            position: "Superior Motors",
          }}
          contactEmail="sales@automotiveai.ca"
          useModalInsteadOfCalendly={false}
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
