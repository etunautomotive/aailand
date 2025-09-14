"use client";
import React from "react";
import { cn } from "@/lib/utils";

/**
 * GridBackground
 * Lightweight, reusable grid background with dark-mode support.
 * - Renders two layers: grid and a radial mask for subtle fade.
 * - Use as an absolutely-positioned background inside a relative container.
 */
const GridBackground = ({ className = "", children }) => {
  return (
    <div className={cn("relative w-full", className)}>
      {/* Grid layer */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient mask for fade */}
      <div className="pointer-events-none absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {/* Slot children above background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GridBackground;


