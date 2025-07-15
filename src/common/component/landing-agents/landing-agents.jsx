import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
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

const AgentCard = ({ agent, index }) => {
  const { resolvedTheme } = useTheme();

  // Function to get the appropriate image for each agent
  const getAgentImage = (agentTitle) => {
    switch (agentTitle) {
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
        return "https://heroui.com/images/hero-card-complete.jpeg";
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className={`py-4 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
        agent.status === "live" 
          ? "hover:shadow-green-500/10" 
          : agent.color === "purple" 
            ? "hover:shadow-purple-500/10"
            : agent.color === "red"
              ? "hover:shadow-red-500/10"
              : agent.color === "yellow"
                ? "hover:shadow-yellow-500/10"
                : "hover:shadow-blue-500/10"
      }`}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          {/* Status Badge */}
          <div className="w-full flex justify-end items-start mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(agent.status, agent.color)}`}>
              {agent.status === "live" ? "AAI Text" : "Coming Soon"}
            </span>
          </div>
          
          {/* Title and Description */}
          <h4 className={`font-bold text-large bg-gradient-to-r ${getTypeColor(agent.color)} bg-clip-text text-transparent`}>
            {agent.title}
          </h4>
          <small className="text-default-500 text-left">
            {agent.description}
          </small>
        </CardHeader>
        
        <CardBody className="overflow-visible py-2">
          <img
            alt={`${agent.title} preview`}
            className="object-cover rounded-xl w-full aspect-square"
            src={getAgentImage(agent.title)}
            width={270}
            height={270}
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://heroui.com/images/hero-card-complete.jpeg";
            }}
          />
        </CardBody>
      </Card>
    </motion.div>
  );
};

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
    <motion.section
      className="w-full py-16 md:py-24 text-black dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-black from-50% to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
            Meet Your New Co-Pilots, Built For Scale.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            12 specialized AI agents working together to transform your dealership's sales process
          </p>
        </motion.div>

        {/* Live Agents Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
          variants={staggerContainer}
        >
          {agentData.filter(agent => agent.status === "live").map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
        </motion.div>



        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-full px-6 py-3 border border-green-500/30 backdrop-blur-sm">
            <span className="text-green-400 font-semibold">Each agent specializes in a different stage of your sales funnel</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LandingAgents;
