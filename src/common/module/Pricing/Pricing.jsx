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
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import { useTheme } from "next-themes";

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
    period: "onboarding + $5,000/month",
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
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedTier, setSelectedTier] = useState(pricingTiers.find(t => t.popular) || pricingTiers[0]);
  const isDark = theme === 'dark';

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  }, []);

  const handlePlanSelect = (tier) => {
    setSelectedTier(tier);
    
    // Redirect to appropriate Stripe checkout based on plan
    const stripeLinks = {
      'essentials': 'https://buy.stripe.com/cNi5kE7ZqaGVeyK5Bo7g40D',
      'fast-track': 'https://buy.stripe.com/9B6fZi6Vm4ixaiuaVI7g40E',
      'growth-partner': 'https://buy.stripe.com/eVq4gA5Ri9CR9eqgg27g40G',
      'enterprise': null // No link for enterprise - should contact for custom pricing
    };
    
    const stripeLink = stripeLinks[tier.id];
    
    if (stripeLink) {
      window.open(stripeLink, '_blank');
    } else if (useModalInsteadOfCalendly && onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background - same as home page */}
      {mounted && (
        <BackgroundGradientAnimation 
          containerClassName="fixed inset-0 z-0 h-screen w-screen"
          gradientBackgroundStart={isDark ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"}
          gradientBackgroundEnd={isDark ? "rgb(15, 15, 15)" : "rgb(255, 255, 255)"}
          firstColor="183, 148, 244"
          secondColor="196, 181, 253"
          thirdColor="167, 139, 250"
          fourthColor="186, 164, 247"
          fifthColor="221, 214, 254"
          pointerColor="196, 181, 253"
          size="30%"
          blendingValue="normal"
          interactive={true}
        />
      )}

      <div className="relative flex justify-center w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-20 relative z-20">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          
          
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl font-medium bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-4 sm:mb-6"
          >
            {mainTitle}
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4 sm:px-0"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Layout section */}
        <motion.div
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Desktop: Comparison Table */}
          <div className="hidden md:block">
            <div className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div className="relative bg-white/40 dark:bg-zinc-900/30 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-2xl">
            {/* Plan Headers Row */}
            <div className="grid grid-cols-5 border-b border-gray-200 dark:border-gray-700">
              {/* Feature column header */}
              <div className="p-8 border-r border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-zinc-900/70 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Compare Plans</h3>
              </div>
              
              {/* Plan headers */}
              {pricingTiers.map((tier, index) => (
                <motion.div 
                  key={tier.id} 
                  variants={fadeInUp}
                  className={`text-center relative flex flex-col ${
                    index === 0
                      ? 'border-r border-gray-200 dark:border-gray-700'
                      : index === pricingTiers.length - 1
                        ? ''
                        : 'border-l border-r border-gray-200 dark:border-gray-700'
                  } p-8 ${
                    selectedTier?.id === tier.id
                      ? 'ring-2 ring-inset ring-white/30 dark:ring-white/20 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl'
                      : 'bg-white/50 dark:bg-zinc-900/40'
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
                    <div className={`${tier.id === 'enterprise' ? 'text-2xl' : 'text-3xl'} font-bold text-gray-900 dark:text-white leading-tight`}>
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

            {/* Feature Comparison Rows - Desktop Only */}
            {featureComparison.map((category, categoryIndex) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="bg-white/60 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700">
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
                    className="grid grid-cols-5 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0 hover:bg-gray-50/50 dark:hover:bg-zinc-900/40 transition-colors"
                  >
                    {/* Feature Name */}
                    <div className="p-6 border-r border-gray-200 dark:border-gray-700 bg-gray-50/30 dark:bg-gray-800/30">
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
                            tierIndex === 0
                              ? 'border-r border-gray-200 dark:border-gray-700'
                              : isLast
                                ? ''
                                : 'border-l border-r border-gray-200 dark:border-gray-700'
                          } ${
                            isSelected
                              ? 'ring-2 ring-inset ring-white/30 dark:ring-white/20 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl'
                              : 'bg-white/40 dark:bg-zinc-900/30'
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
          </div>

          {/* Mobile: Plan-focused Feature Comparison */}
          <div className="block md:hidden mt-8">
            {/* Plan selector tabs */}
            <div className="flex overflow-x-auto gap-2 no-scrollbar pb-2 -mx-4 px-4">
              {pricingTiers.map((tier) => (
                <GlassButton
                  key={tier.id}
                  size="sm"
                  onClick={() => setSelectedTier(tier)}
                  className={`flex-shrink-0 whitespace-nowrap ${
                    selectedTier?.id === tier.id
                      ? 'bg-purple-600/90 text-white border-purple-500/60 hover:bg-purple-600 hover:border-purple-400'
                      : 'bg-white/70 dark:bg-zinc-900/60 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {tier.name}
                </GlassButton>
              ))}
            </div>

            {/* Selected plan details */}
            <div className="mt-4 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div className="p-5 border-b border-gray-200/60 dark:border-gray-700/60">
                <div className="flex items-center">
                  <div className={`inline-flex p-2 rounded-full mr-3 ${
                    selectedTier?.color === 'primary' ? 'bg-blue-500/20' :
                    selectedTier?.color === 'secondary' ? 'bg-purple-500/20' :
                    selectedTier?.color === 'warning' ? 'bg-orange-500/20' :
                    'bg-gray-500/20'
                  }`}>
                    {selectedTier?.icon}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{selectedTier?.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{selectedTier?.description}</div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{selectedTier?.price}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{selectedTier?.period}</div>
                </div>

                {/* CTA under pricing */}
                <div className="mt-4">
                  <GlassButton
                    onClick={() => handlePlanSelect(selectedTier)}
                    size="lg"
                    className="w-full"
                  >
                    {selectedTier?.id === 'enterprise' ? 'Contact Sales' : 'Select Option'}
                  </GlassButton>
                </div>
              </div>

              {/* Features for selected plan */}
              <div className="divide-y divide-gray-200/60 dark:divide-gray-700/60">
                {featureComparison.map((category) => (
                  <div key={category.category}>
                    <div className="px-5 py-3 bg-white/60 dark:bg-zinc-900/70">
                      <h4 className="text-base font-bold text-gray-900 dark:text-white">{category.category}</h4>
                    </div>
                    <div className="px-5 py-2">
                      {category.features.map((feature, idx) => {
                        let featureValue;
                        switch(selectedTier?.id) {
                          case 'essentials':
                            featureValue = feature.essentials; break;
                          case 'fast-track':
                            featureValue = feature.fastTrack; break;
                          case 'growth-partner':
                            featureValue = feature.growthPartner; break;
                          case 'enterprise':
                            featureValue = feature.enterprise; break;
                          default:
                            featureValue = false;
                        }
                        return (
                          <div key={idx} className="flex items-center justify-between py-3">
                            <span className="text-sm font-medium text-gray-900 dark:text-white pr-3">{feature.name}</span>
                            {typeof featureValue === 'boolean' ? (
                              featureValue ? (
                                <Check className="w-5 h-5 text-green-600" />
                              ) : (
                                <div className="w-5 h-5 flex items-center justify-center">
                                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                              )
                            ) : (
                              <span className="text-sm text-gray-800 dark:text-gray-200 text-right">{featureValue}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        </div>
      </div>

    </div>
  );
}
