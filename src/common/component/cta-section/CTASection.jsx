"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SparkleButton from '../sparkle-button/SparkleButton';
import { Shield, Check, Star, ChevronRight, Sparkles } from 'lucide-react';
import styles from './cta-section.module.css';
import { useTheme } from 'next-themes';
import PixelCanvas from '../element/PixelCanvas';
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
        delay 
      }}
    >
      {children}
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, detail, isDarkMode, color = "purple" }) => {
  const [hovered, setHovered] = useState(false);
  // Color classes for title text
  const colorClass = color === 'green'
    ? 'text-green-500 dark:text-green-400'
    : color === 'yellow'
      ? 'text-yellow-400 dark:text-yellow-300'
      : 'text-purple-500 dark:text-purple-400';

  // Transparent background in dark mode, white in light mode
  const bgClass = isDarkMode
    ? 'bg-transparent border border-white/20'
    : 'bg-white border border-gray-200';

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
        <div className={`rounded-full p-2 flex-shrink-0 bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300`}>
          {icon}
        </div>
        <div className="text-left">
          <h3 className={`font-semibold text-lg mb-1 ${colorClass}`}>{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{detail}</p>
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the current theme
  const isDarkMode = mounted && (theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark'));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: handle form submission (API call, etc.)
  };

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "30-Day Money-Back Guarantee",
      detail: "Risk-free investment in your business growth",
      color: "purple"
    },
    {
      icon: <Check className="w-5 h-5" />,
      text: "Used by 237+ Dealerships",
      detail: "Proven results across North America",
      color: "purple"
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Lifetime Access",
      detail: "One-time payment, permanent resources",
      color: "purple"
    }
  ];

  const testimonial = {
    quote: "We added $78,451 in gross profit in the first month alone by implementing this system.",
    author: "Michael Jensen",
    position: "Sales Director — AutoPrime Motors — Calgary, AB"
  };

  return (
    <section className="w-full py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
        <AnimatedCard>
          <motion.div 
            className={`inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium ${
              isDarkMode 
                ? 'bg-purple-900/30 text-purple-300 border border-purple-700/30' 
                : 'bg-purple-100 text-purple-800 border border-purple-200'
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="flex items-center justify-center">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Limited Time Opportunity</span>
            </span>
          </motion.div>
        </AnimatedCard>
        
        <AnimatedCard delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Ready to Add <span className={styles.gradientText}>$300k</span> in Monthly Gross Profit?
          </h2>
        </AnimatedCard>
        
        <AnimatedCard delay={0.2}>
          <p className="text-lg md:text-xl mb-10 mx-auto max-w-3xl text-gray-700 dark:text-gray-300">
            Join hundreds of dealerships who are already using our proven system to increase their sales and profits.
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
              onClick={onOpen}
            >
              Book a Strategy Call
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
                <p className="font-semibold">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard delay={0.6}>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Questions? Contact us at <a href="mailto:support@automotiveai.ca" className="font-medium underline text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">support@automotiveai.ca</a>
          </p>
        </AnimatedCard>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-2xl font-bold">
                Book a Strategy Call
              </ModalHeader>
              <ModalBody>
                {submitted ? (
                  <div className="text-center text-green-600 font-semibold py-6">
                    Thank you! We'll be in touch soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <Button color="primary" type="submit" className="w-full mt-2">
                      Submit
                    </Button>
                  </form>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default CTASection; 