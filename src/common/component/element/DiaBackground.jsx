"use client";
import React from "react";
import { cn } from "@/lib/utils";

/**
 * DiaBackground
 * A clean, subtle gradient background matching the Dia landing page aesthetic.
 * Features soft blue-purple gradients in top corners and warm orange-peach in bottom corners.
 */
const DiaBackground = ({ 
  className = "", 
  children
}) => {
  return (
    <div className={cn("relative", className)}>
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />

      {/* Corner gradients - much more visible */}
      <div className="absolute inset-0">
        {/* Top left - cool blue/purple */}
        <div 
          className="absolute -top-20 -left-20 w-96 h-96"
          style={{
            background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.8) 0%, rgba(99, 102, 241, 0.6) 25%, rgba(147, 197, 253, 0.4) 45%, transparent 65%)',
            filter: 'blur(80px)'
          }}
        />
        
        {/* Top right - purple/pink */}
        <div 
          className="absolute -top-20 -right-20 w-96 h-96"
          style={{
            background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.7) 0%, rgba(139, 92, 246, 0.5) 25%, rgba(196, 181, 253, 0.3) 45%, transparent 65%)',
            filter: 'blur(80px)'
          }}
        />
        
        {/* Bottom left - warm orange */}
        <div 
          className="absolute -bottom-20 -left-20 w-96 h-96"
          style={{
            background: 'radial-gradient(circle at center, rgba(251, 146, 60, 0.8) 0%, rgba(249, 115, 22, 0.6) 25%, rgba(251, 113, 133, 0.4) 45%, transparent 65%)',
            filter: 'blur(80px)'
          }}
        />
        
        {/* Bottom right - peach/pink */}
        <div 
          className="absolute -bottom-20 -right-20 w-96 h-96"
          style={{
            background: 'radial-gradient(circle at center, rgba(251, 113, 133, 0.7) 0%, rgba(251, 146, 60, 0.5) 25%, rgba(249, 115, 22, 0.3) 45%, transparent 65%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default DiaBackground;