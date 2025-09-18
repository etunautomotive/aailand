"use client";
import React from "react";
import AppleCards from "@/common/component/apple-cards/apple-cards";
import { 
  Database, 
  MessageCircle, 
  Target, 
  Globe, 
  RefreshCw, 
  Bike, 
  DollarSign, 
  Truck, 
  Wrench, 
  ShoppingCart, 
  Users, 
  UserPlus,
  Phone,
  Calculator,
  Handshake
} from "lucide-react";

// Animation variants following the project's pattern
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const getTypeColor = (color) => {
  switch (color?.toLowerCase()) {
    case "green":
      return "from-green-500 to-green-400";
    case "purple":
      return "from-purple-500 to-purple-400";
    case "red":
      return "from-red-500 to-red-400";
    case "yellow":
      return "from-yellow-500 to-yellow-400";
    default:
      return "from-green-500 to-green-400";
  }
};

const getStatusBadge = (status, color) => {
  switch (status) {
    case "live":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800";
    case "soon":
      switch (color?.toLowerCase()) {
        case "purple":
          return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800";
        case "red":
          return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-800";
        case "yellow":
          return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800";
        default:
          return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800";
      }
    default:
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800";
  }
};

const AgentCard = () => null;

const LandingAgents = () => {
  // Define the specific agents as requested
  const agentData = [
    // Row 1
    { id: 1, title: "Database Reactivation Agent", description: "Re-engages dormant leads and past customers from your database", icon: Database, status: "live", color: "green" },
    { id: 2, title: "Facebook Messenger Agent", description: "Handles lead qualification through Facebook Messenger", icon: MessageCircle, status: "live", color: "green" },
    { id: 3, title: "Paid Lead Agent", description: "Manages and converts leads from paid advertising campaigns", icon: Target, status: "live", color: "green" },
    { id: 4, title: "Website Leads Agent", description: "Captures and qualifies leads directly from your website", icon: Globe, status: "live", color: "green" },
    
    // Row 2
    { id: 5, title: "Follow-Up Agent", description: "Ensures consistent and timely follow-up with all prospects", icon: RefreshCw, status: "live", color: "green" },
    { id: 6, title: "Powersports Agent", description: "Specialized agent for powersports sales and customer engagement", icon: Bike, status: "live", color: "green" },
    { id: 7, title: "Personal Loan Agent", description: "Handles personal loan applications and financing options", icon: DollarSign, status: "live", color: "green" },
    { id: 8, title: "RV Agent", description: "Dedicated agent for RV sales and customer support", icon: Truck, status: "live", color: "green" },
    
    // Row 3
    { id: 9, title: "Service Agent", description: "Book service appointments and provides customer support", icon: Wrench, status: "live", color: "green" },
    { id: 10, title: "After Sale Agent", description: "Handles post-sale customer support and satisfaction", icon: ShoppingCart, status: "live", color: "green" },
    { id: 11, title: "Referral Sales Agent", description: "Manages referral requests and customer referrals", icon: Users, status: "live", color: "green" },
    { id: 12, title: "Co-App Agent", description: "Handles co-applicant requests information and provides encouragement", icon: UserPlus, status: "live", color: "green" },
    

  ];

  return (
    <section
      className="w-full pt-32 pb-8 md:pt-40 md:pb-12 text-black dark:text-white relative"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 leading-tight bg-gradient-to-r from-black from-50% to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
            Meet Your New Co-Pilots, Built For Scale.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            12 specialized AI agents working together to transform your dealership&apos;s sales process
          </p>
        </div>

        {/* Apple-style cards carousel using agent images */}
        <div className="mb-12 relative">
          {/* Soft edge masks to remove any perceived white container background while retaining blur */}
          <div aria-hidden className="pointer-events-none absolute -left-8 top-0 h-full w-10 sm:w-8 md:w-6 bg-gradient-to-r from-[hsl(var(--background))] to-transparent backdrop-blur-sm" />
          <div aria-hidden className="pointer-events-none absolute -right-8 top-0 h-full w-10 sm:w-8 md:w-6 bg-gradient-to-l from-[hsl(var(--background))] to-transparent backdrop-blur-sm" />
          <AppleCards
            items={agentData
              .filter((agent) => agent.status === "live")
              .map((agent) => ({
                src: (() => {
                  switch (agent.title) {
                    case "Database Reactivation Agent":
                      return "/agentdatabase.png?v=1";
                    case "Facebook Messenger Agent":
                      return "/agentmessenger.png?v=1";
                    case "Paid Lead Agent":
                      return "/agentpaidlead.png?v=1";
                    case "Website Leads Agent":
                      return "/agentwebsite.png?v=1";
                    case "Follow-Up Agent":
                      return "/agentfollowup.png?v=1";
                    case "Powersports Agent":
                      return "/agentpowersport.png?v=1";
                    case "Personal Loan Agent":
                      return "/agentpersonalloan.png?v=1";
                    case "RV Agent":
                      return "/agentrv.png?v=1";
                    case "Service Agent":
                      return "/agentpartsandservice.png?v=1";
                    case "After Sale Agent":
                      return "/agentaftersale.png?v=1";
                    case "Referral Sales Agent":
                      return "/agentreferral.png?v=1";
                    case "Co-App Agent":
                      return "/agentcoapp.png?v=1";
                    default:
                      return "/agentdatabase.png?v=1";
                  }
                })(),
                title: agent.title,
                category: "Text Agent",
                content: (
                  <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                    <p>{agent.description}</p>
                  </div>
                ),
              }))}
          />
        </div>



        {/* Removed bottom chip CTA per request */}
      </div>
    </section>
  );
};

export default LandingAgents;
