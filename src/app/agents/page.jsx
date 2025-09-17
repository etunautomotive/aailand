"use client";
import LandingAgents from "@/common/component/landing-agents/landing-agents";
import LeadIntegrations from "@/common/component/lead-integrations/lead-integrations";
import WhatYoullLearn from "@/common/component/what-you-learn/whatyoulearn.jsx";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Bot, TrendingUp, Target, PhoneCall } from "lucide-react";

export default function Agents() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
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
        <div className="w-full max-w-[1500px] mx-auto relative z-20 overflow-hidden">
          <LeadIntegrations />
          <WhatYoullLearn
            title="AI-Powered Support Across Departments"
            subtitle="Our AI agents provide specialized support across every department in your dealership, ensuring seamless integration and maximum efficiency."
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
          <LandingAgents />
        </div>
      </div>
    </div>
  );
}
