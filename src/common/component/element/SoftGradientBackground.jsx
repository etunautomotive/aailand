"use client";
import React from "react";
import { cn } from "@/lib/utils";

/**
 * SoftGradientBackground (Dia-style)
 * Corner blue glows + warm peach bottom glow. Reusable section wrapper.
 */
const SoftGradientBackground = ({ className = "", children }) => {
  return (
    <div className={cn("relative", className)}>
      {/* Base canvas to ensure the glow is visible on white pages */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-white dark:bg-neutral-950" />

      {/* Corner and bottom glows */}
      <div className="absolute inset-0 z-0 pointer-events-none blur-[120px] md:blur-[140px] opacity-95 transform-gpu">
        <div
          className={cn(
            "absolute inset-0",
            // Light mode (Dia-like): cool blue corners + warm peach bottom
            "bg-[radial-gradient(120%_90%_at_0%_0%,rgba(209,233,255,0.95)_0%,rgba(209,233,255,0)_60%),radial-gradient(120%_90%_at_100%_0%,rgba(209,233,255,0.95)_0%,rgba(209,233,255,0)_60%),radial-gradient(140%_90%_at_50%_100%,rgba(255,214,180,0.95)_0%,rgba(255,214,180,0)_60%)]",
            // Dark mode adjustments
            "dark:bg-[radial-gradient(120%_90%_at_0%_0%,rgba(125,211,252,0.45)_0%,rgba(125,211,252,0)_60%),radial-gradient(120%_90%_at_100%_0%,rgba(125,211,252,0.45)_0%,rgba(125,211,252,0)_60%),radial-gradient(140%_90%_at_50%_100%,rgba(253,186,116,0.45)_0%,rgba(253,186,116,0)_60%)]"
          )}
        />
      </div>

      {/* Soft vignette for center focus */}
      <div className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_88%)]" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SoftGradientBackground;


