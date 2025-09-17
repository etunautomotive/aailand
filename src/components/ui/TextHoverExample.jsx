"use client";
import React from "react";
import { TextHoverEffect } from "./text-hover-effect";

const TextHoverExample = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black dark:bg-white">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-white dark:text-black mb-8 text-center">
          Text Hover Effect Examples
        </h2>
        
        <div className="space-y-16">
          {/* Example 1: Basic Usage */}
          <div className="h-32">
            <TextHoverEffect text="Hello World" />
          </div>
          
          {/* Example 2: Custom Duration */}
          <div className="h-32">
            <TextHoverEffect text="Custom Speed" duration={0.1} />
          </div>
          
          {/* Example 3: Longer Text */}
          <div className="h-32">
            <TextHoverEffect text="Amazing Effect" />
          </div>
          
          {/* Example 4: Your Brand Text */}
          <div className="h-32">
            <TextHoverEffect text="Automotive AI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextHoverExample;
