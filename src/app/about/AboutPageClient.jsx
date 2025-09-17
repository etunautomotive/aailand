"use client";
import About from "@/common/module/About";
import React, { useEffect, useState } from "react";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import { useTheme } from "next-themes";

const AboutPageClient = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Subtle Animated Background */}
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
      
      <div className="relative flex justify-center w-full mt-20">
        <div className="w-full max-w-[1500px] mx-auto overflow-hidden relative z-20">
          <About />
        </div>
      </div>
    </div>
  );
};

export default AboutPageClient;
