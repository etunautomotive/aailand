"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  Chip,
  Divider,
  Badge,
} from "@heroui/react";
import { Check, Star, Crown, Zap, Target, Settings } from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";

// Animation variants
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Pricing data structured for comparison table
const pricingTiers = [
  {
    id: "essentials",
    name: "AI Essentials",
    price: "CAD $1,500",
    period: "/rooftop/month",
    description: "Perfect for getting started",
    icon: <Settings className="w-6 h-6" />,
    color: "default",
    popular: false
  },
  {
    id: "fast-track",
    name: "AI Fast Track", 
    price: "CAD $2,500",
    period: "/rooftop/month",
    description: "Most popular choice",
    icon: <Zap className="w-6 h-6" />,
    color: "primary",
    popular: true
  },
  {
    id: "growth-partner",
    name: "AI Growth Partner",
    price: "CAD $3,000",
    period: "/rooftop/month",
    description: "Advanced features & support",
    icon: <Crown className="w-6 h-6" />,
    color: "secondary",
    popular: false
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "CAD $17,997",
    period: "onboarding + CAD $5,000/month",
    description: "Custom enterprise solution",
    icon: <Target className="w-6 h-6" />,
    color: "warning",
    popular: false
  }
];

// Feature comparison data
const featureComparison = [
  {
    category: "Setup & Onboarding",
    features: [
      {
        name: "Setup Fee",
        essentials: "Included",
        fastTrack: "Included", 
        growthPartner: "Included",
        enterprise: "Included in onboarding"
      },
      {
        name: "Onboarding Support",
        essentials: "2-hr call + Q&A",
        fastTrack: "1-week Done-With-You Launch",
        growthPartner: "2-week Done-With-You Launch + Training",
        enterprise: "Onsite week with team"
      }
    ]
  },
  {
    category: "Software & Platform",
    features: [
      {
        name: "Core Text Agents",
        essentials: true,
        fastTrack: true,
        growthPartner: true,
        enterprise: true
      },
      {
        name: "Pipelines & Automations",
        essentials: true,
        fastTrack: true,
        growthPartner: true,
        enterprise: true
      },
      {
        name: "Marketplace Campaigns/Templates",
        essentials: true,
        fastTrack: true,
        growthPartner: true,
        enterprise: true
      },
      {
        name: "First Contact Automation",
        essentials: true,
        fastTrack: true,
        growthPartner: true,
        enterprise: true
      },
      {
        name: "AAI Extension",
        essentials: true,
        fastTrack: true,
        growthPartner: true,
        enterprise: true
      },
      {
        name: "Credit App Integration",
        essentials: true,
        fastTrack: true,
        growthPartner: true,
        enterprise: true
      },
      {
        name: "CRM Integration",
        essentials: false,
        fastTrack: false,
        growthPartner: true,
        enterprise: true
      },
      {
        name: "Custom Software Solutions In App",
        essentials: false,
        fastTrack: false,
        growthPartner: false,
        enterprise: true
      },
      {
        name: "Multi-rooftop Packaging",
        essentials: false,
        fastTrack: false,
        growthPartner: false,
        enterprise: true
      }
    ]
  },
  {
    category: "AI Agents & Features",
    features: [
      {
        name: "Database Reactivation Agent",
        essentials: true,
        fastTrack: true,
        growthPartner: true,
        enterprise: true
      },
      {
        name: "Paid Lead Agent",
        essentials: true,
        fastTrack: true,
        growthPartner: true,
        enterprise: true
      },
      {
        name: "Co-App Agent",
        essentials: false,
        fastTrack: true,
        growthPartner: true,
        enterprise: true
      },
      {
        name: "Service Campaign Agents",
        essentials: false,
        fastTrack: false,
        growthPartner: true,
        enterprise: true
      },
      {
        name: "Custom Agents",
        essentials: false,
        fastTrack: false,
        growthPartner: true,
        enterprise: true
      }
    ]
  },
  {
    category: "Support & Performance",
    features: [
      {
        name: "Support Level",
        essentials: "WhatsApp Group (24 Hour SLA)",
        fastTrack: "WhatsApp group + Zooms (24h SLA)",
        growthPartner: "WhatsApp group (2hr SLA) + Zooms",
        enterprise: "Recurring Meeting Structure"
      },
      {
        name: "Team Support Hours",
        essentials: "No strategy access",
        fastTrack: "5 hrs/month AAI team",
        growthPartner: "5 hrs/month AAI team",
        enterprise: "Strategic alignment"
      },
      {
        name: "Lead Re-activation Throttle",
        essentials: "200/day",
        fastTrack: "500/day",
        growthPartner: "1,500/day",
        enterprise: "Unlimited"
      },
      {
        name: "Users Included",
        essentials: "5 users (+$199/additional)",
        fastTrack: "5 users (+$199/additional)",
        growthPartner: "5 users (+$199/additional)",
        enterprise: "10 users (+$199/additional per user)"
      }
    ]
  }
];

export default function Pricing({
  sectionTitle = "Automotive AI Pricing",
  mainTitle = "Choose Your Growth Plan",
  subtitle = "Select the perfect plan to transform your dealership's lead management and boost your sales performance.",
  buttonText = "Book a Strategy Call",
  useModalInsteadOfCalendly = false,
  onCtaClick
}) {
  const [selectedTier, setSelectedTier] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  }, []);

  const handlePlanSelect = (tier) => {
    setSelectedTier(tier);
    if (useModalInsteadOfCalendly && onCtaClick) {
      onCtaClick();
    } else if (tier.id === 'enterprise') {
      window.location.href = '/bookademo';
    }
    // For other plans, just highlight the column (selectedTier state handles this)
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Subtle Animated Background - same as home page */}
      <div className="fixed inset-0 z-0 h-screen w-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 dark:from-black dark:via-black dark:to-gray-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative flex justify-center w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <Chip
              color="primary"
              variant="flat"
              size="lg"
              startContent={<Star className="w-4 h-4" />}
            >
              {sectionTitle}
            </Chip>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-6"
          >
            {mainTitle}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Plan Headers */}
          <motion.div
            className="mb-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden shadow-xl">
              <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/30 dark:border-gray-700/30 rounded-2xl">
            {/* Plan Headers Row */}
            <div className="grid grid-cols-1 md:grid-cols-5 border-b border-gray-200 dark:border-gray-700">
              {/* Feature column header */}
              <div className="hidden md:block p-8 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Compare Plans</h3>
              </div>
              
              {/* Plan headers */}
              {pricingTiers.map((tier, index) => (
                <motion.div 
                  key={tier.id} 
                  variants={fadeInUp}
                  className={`text-center relative flex flex-col ${
                    index < pricingTiers.length - 1 ? 'border-r border-gray-200 dark:border-gray-700' : ''
                  } p-8 ${tier.popular ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-white dark:bg-gray-800'} ${
                    selectedTier?.id === tier.id ? 'ring-2 ring-blue-500 bg-blue-100 dark:bg-blue-900/30' : ''
                  }`}
                >
                  {/* Fixed height container for chip - always present to maintain consistent spacing */}
                  <div className="h-6 flex items-center justify-center mb-2 relative">
                    {tier.popular && (
                      <Chip 
                        color="primary" 
                        size="sm" 
                        className="text-xs font-medium px-3 py-1 absolute"
                        variant="solid"
                      >
                        Most Popular
                      </Chip>
                    )}
                  </div>
                  
                  {/* Icon Section - Fixed Height */}
                  <div className="flex justify-center items-center h-16 mb-4">
                    <div className={`inline-flex p-3 rounded-full ${
                      tier.color === 'primary' ? 'bg-blue-500/20' :
                      tier.color === 'secondary' ? 'bg-purple-500/20' :
                      tier.color === 'warning' ? 'bg-orange-500/20' :
                      'bg-gray-500/20'
                    }`}>
                      {tier.icon}
                    </div>
                  </div>
                  
                  {/* Plan Name - Fixed Height */}
                  <div className="h-10 flex items-center justify-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {tier.name}
                    </h3>
                  </div>
                  
                  {/* Pricing Section - Fixed Height */}
                  <div className="h-20 flex flex-col justify-center items-center mb-6">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                      {tier.price}
                    </div>
                    <div className="text-base text-gray-600 dark:text-gray-400 mt-2">
                      {tier.period}
                    </div>
                  </div>
                  
                  {/* Description - Fixed Height */}
                  <div className="h-16 flex items-center justify-center mb-8">
                    <p className="text-base text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Button Section - Fixed Height */}
                  <div className="h-10 flex items-end">
                    <GlassButton
                      onClick={() => handlePlanSelect(tier)}
                      size="md"
                      variant="primary"
                      className="w-full"
                    >
                      {tier.id === 'enterprise' ? 'Contact Sales' : 'Select Option'}
                    </GlassButton>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Comparison Rows */}
            {featureComparison.map((category, categoryIndex) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h4>
                  </div>
                </div>

                {/* Feature Rows */}
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={`${categoryIndex}-${featureIndex}`}
                    variants={fadeInUp}
                    className="grid grid-cols-1 md:grid-cols-5 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    {/* Feature Name */}
                    <div className="p-6 border-r border-gray-200 dark:border-gray-700 md:border-r bg-gray-50/30 dark:bg-gray-800/30">
                      <span className="text-base font-semibold text-gray-900 dark:text-white">
                        {feature.name}
                      </span>
                    </div>

                    {/* Feature Values */}
                    {pricingTiers.map((tier, tierIndex) => {
                      const isSelected = selectedTier?.id === tier.id;
                      const isPopular = tier.popular;
                      const isLast = tierIndex === pricingTiers.length - 1;
                      
                      let featureValue;
                      switch(tier.id) {
                        case 'essentials':
                          featureValue = feature.essentials;
                          break;
                        case 'fast-track':
                          featureValue = feature.fastTrack;
                          break;
                        case 'growth-partner':
                          featureValue = feature.growthPartner;
                          break;
                        case 'enterprise':
                          featureValue = feature.enterprise;
                          break;
                        default:
                          featureValue = false;
                      }

                      return (
                        <div 
                          key={`${tier.id}-${featureIndex}`}
                          className={`p-6 text-center ${
                            !isLast ? 'border-r border-gray-200 dark:border-gray-700' : ''
                          } ${
                            isPopular ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-white dark:bg-gray-800'
                          } ${
                            isSelected ? 'bg-blue-100 dark:bg-blue-900/30 ring-2 ring-blue-500' : ''
                          }`}
                        >
                          {typeof featureValue === 'boolean' ? (
                            featureValue ? (
                              <Check className="w-6 h-6 text-green-600 mx-auto" />
                            ) : (
                              <div className="w-6 h-6 mx-auto flex items-center justify-center">
                                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                              </div>
                            )
                          ) : (
                            <span className="text-base text-gray-800 dark:text-gray-200 font-medium">
                              {featureValue}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </motion.div>
                ))}
              </div>
            ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-12 max-w-3xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Not sure which plan is right for you?
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Book a call with our team to discuss your dealership's specific needs and get personalized recommendations.
            </p>
            <GlassButton
              href="/bookademo"
              size="lg"
              variant="primary"
            >
              {buttonText}
            </GlassButton>
          </div>
        </motion.div>
        </div>
      </div>

    </div>
  );
}
