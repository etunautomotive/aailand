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
import { Bot, Brain, FileText, TrendingUp, PhoneCall, Target } from "lucide-react";
import PurpleHighlight from "@/common/component/Herohighlight/hero-highlight";
import Pricing from "@/common/module/Pricing/Pricing";

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

export default function AAILanding() {
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
          heading="Run Your Dealership On Auto Pilot"
          subheading="Discover the power of AutomotiveAI's 6 Pillars of Automation the complete solution for modern dealerships looking to scale without the stress."
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
        <WhatYoullLearn 
          title={<>
            The 6 Pillars of Automation We Deliver for Guaranteed Scale While <PurpleHighlight>Increasing Profit</PurpleHighlight>
          </>}
          features={[
            {
              icon: <Bot className="text-purple-600 w-8 h-8" />, // Sales Automation
              title: "Sales Automation",
              description: "AI agents revive old leads, follow up instantly, and pre-qualify buyers 24/7. Say goodbye to missed opportunities and bottlenecks.",
            },
            {
              icon: <Brain className="text-purple-600 w-8 h-8" />, // Staffing & Training
              title: "Staffing & Training",
              description: "From job ads to onboarding and role-based training, we equip your team to perform — faster and with less turnover.",
            },
            {
              icon: <FileText className="text-purple-600 w-8 h-8" />, // Sales Process Compliance
              title: "Sales Process Compliance",
              description: "Centralized logs of all texts, calls, and follow-ups. Catch dropped balls, protect customer data, and enforce consistency.",
            },
            {
              icon: <TrendingUp className="text-purple-600 w-8 h-8" />, // Finance Department Automation
              title: "Finance Department Automation",
              description: "Push credit apps into Dealertrack or Canada Drives, and package every deal for speed and precision.",
            },
            {
              icon: <PhoneCall className="text-purple-600 w-8 h-8" />, // Internal Staff Optimization
              title: "Internal Staff Optimization",
              description: "Let AI handle inbound calls, outbound follow-up, appointment booking, and routing — freeing your best closers to focus.",
            },
            {
              icon: <Target className="text-purple-600 w-8 h-8" />, // Fixed Operations
              title: "Fixed Operations",
              description: "Drive more service traffic, automate parts inventory outreach, and boost service revenue year-round.",
            },
          ]}
        />
        {/* Inserted Get Module 1 Free button between WhatYoullLearn and CurriculumSection */}
        <div className="flex justify-center my-10">
          <SparkleButton
            className="!text-base !py-4 !px-8 !flex !items-center"
            onClick={onOpen}
          >
            Get Module 1 Free
          </SparkleButton>
        </div>
        <AgentsPage />
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
          <FAQ 
            title="Frequently Asked Questions"
            faqs={[
              {
                question: "What does Automotive AI actually do?",
                answer: "Automotive AI is a sales and finance system built to engage leads, collect full credit applications, and hand off ready-to-close deals to your team. It's used to activate old CRM data, work paid or organic leads, and even bring in new applications directly from your website. From lead engagement to full deal structuring, the system streamlines every step—while giving you full visibility into conversations, applications, and progress."
              },
              {
                question: "Can it really talk to leads like a human?",
                answer: "Yes—and that's where it shines. The AI agents use custom-built conversation flows that mirror real sales conversations. They acknowledge customer messages, respond naturally, and stay on track even if a lead goes off-topic. You can even adjust the pacing of replies to avoid that 'bot' feel. Over time, the AI gets smarter, but it always stays within the approved tone and flow you choose."
              },
              {
                question: "What happens if someone mentions a co-applicant?",
                answer: "The AI is trained to recognize when a customer mentions a second applicant and will prompt for those details at the right moment. It won't rush into it right away, which helps avoid unnecessary drop-offs. If needed, a dedicated co-applicant agent can follow up separately to gather the right info."
              },
              {
                question: "What's included in the system?",
                answer: "You get a complete pipeline view of every deal stage, real-time updates during every conversation, and access to call recordings and transcripts. The system can also generate cover sheets for paper files and supports team collaboration across departments. It comes with access to a full sales academy—complete with training videos, interactive workbooks, and mindset development to help your reps improve performance fast."
              },
              {
                question: "Can it connect with our current systems?",
                answer: "Yes. It already connects with all common lead providers and is built with future integrations in mind, including trade valuation tools, insurance providers, and more. If you have a lead source we don't support yet, we'll work with your team to connect it directly."
              },
              {
                question: "What's the rollout process like?",
                answer: "Implementation is phased. Most teams start by using the system on their oldest data to see immediate results. From there, your staff moves through the training academy to get fully onboarded. As new hires come in, they follow the same path, with the option for in-person coaching and advanced strategy support. It's structured to get quick wins without overwhelming your team."
              },
              {
                question: "How is support handled?",
                answer: "You're never left on your own. You'll have access to video tutorials, a private support chat, and ongoing optimization sessions. Whether you want help improving your scripts, adjusting compliance settings, or reviewing performance, our team is here to make sure the system continues to evolve with your goals."
              },
              {
                question: "Is there a long-term commitment?",
                answer: "No. Everything is month-to-month. The platform is designed to prove its value quickly—most dealers see ROI within the first few days of going live. You stay because it works, not because you're locked into a contract."
              }
            ]}
          />
        </div>
        {/* Pricing Section */}
        <Pricing 
          sectionTitle="AutomotiveAI Platform Pricing"
          mainTitle="Monthly pricing, no long-term commitment required"
          subtitle={"We believe in earning your business every single month.\nNo contracts. No pressure. Just results."}
        />
        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
}