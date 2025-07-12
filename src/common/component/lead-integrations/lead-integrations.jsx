import { motion } from "framer-motion";
import {
  Database,
  Facebook,
  Globe,
  CreditCard,
  Car,
  MapPin,
  Users,
  MessageCircle,
  Wrench,
  ArrowRight,
  Zap,
  Search,
  UserPlus,
} from "lucide-react";

// Animation variants
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function LeadIntegrations() {
  const leadSources = [
    {
      icon: Database,
      title: "Old Data",
      description: "Re-engage dormant leads from your existing database with intelligent outreach.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Facebook,
      title: "Facebook Leads",
      description: "Automate follow-ups and nurture prospects generated from social media campaigns.",
      color: "from-purple-600 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Website Leads",
      description: "Instantly connect with customers expressing interest through your dealership's website.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: CreditCard,
      title: "Credit Leads",
      description: "Streamline the processing and qualification of credit-based customer inquiries.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Search,
      title: "Autotrader Leads",
      description: "Efficiently manage and convert high-intent leads from major automotive marketplaces.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Car,
      title: "CarGurus Leads",
      description: "Optimize engagement with prospects sourced from leading vehicle listing platforms.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: MapPin,
      title: "Kijiji Auto Leads",
      description: "Target and convert leads from Canada's popular classifieds platform with tailored approaches.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: UserPlus,
      title: "Referral Leads",
      description: "Nurture valuable connections from customer referrals with personalized and timely communication.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: MessageCircle,
      title: "Website Chatbot",
      description: "Convert real-time website visitor interactions into qualified leads with AI-powered conversation tools.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Wrench,
      title: "Service Department Leads",
      description: "Transform service appointments and maintenance inquiries into sales opportunities through strategic follow-up.",
      color: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #a855f7 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full px-6 py-3 mb-6 border border-purple-500/30 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-semibold">AI Integration Hub</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              AI Agents
            </span>{" "}
            for Every Lead Source
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Our AI operating system is designed to seamlessly integrate and optimize various lead sources, ensuring{" "}
            <span className="text-purple-400 font-semibold">no potential customer is left behind.</span>
          </motion.p>
        </motion.div>

        {/* Central Hub Visualization */}
        <motion.div
          className="flex justify-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleIn}
        >
          <div className="relative">
            {/* Central Hub */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 border-4 border-purple-400/30 backdrop-blur-sm">
              <div className="text-center">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-white mx-auto mb-2" />
                <span className="text-white font-bold text-sm md:text-base">AI Hub</span>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-16 bg-gradient-to-b from-purple-400/60 to-transparent"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: "bottom",
                    transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lead Sources Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {leadSources.map((source, index) => {
            const IconComponent = source.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-gray-50/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                variants={fadeInUp}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${source.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${source.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                  {source.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {source.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="bg-gradient-to-r from-purple-50/80 via-violet-50/80 to-indigo-50/80 dark:from-purple-900/30 dark:via-violet-900/30 dark:to-indigo-900/30 rounded-3xl p-8 md:p-12 border border-purple-200/50 dark:border-purple-500/20 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400 bg-clip-text text-transparent">
                One System. Every Lead Source. Maximum Conversion.
              </h3>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Stop juggling multiple platforms and missing opportunities. Connect Your lead sources into one system and let our AI agents work 24/7 ensuring consistent follow-up, qualification, and conversion no matter where your customers
                come from.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-violet-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
}
