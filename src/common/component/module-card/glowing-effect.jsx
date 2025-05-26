"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";

// Simple utility function to replace cn from @/lib/utils
const cn = (...classes) => classes.filter(Boolean).join(' ');

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    borderWidth = 1,
    disabled = true,
  }) => {
    const containerRef = useRef(null);
    const [isReady, setIsReady] = useState(false);
    const [angle, setAngle] = useState(0);

    // Simple auto-rotation effect
    useEffect(() => {
      if (disabled || !isReady) return;
      
      const rotationInterval = setInterval(() => {
        setAngle(prevAngle => (prevAngle + 1) % 360);
      }, 50); // Smooth rotation speed
      
      return () => clearInterval(rotationInterval);
    }, [disabled, isReady]);

    // Set CSS variable for rotation
    useEffect(() => {
      if (!containerRef.current || disabled) return;
      containerRef.current.style.setProperty("--start", String(angle));
    }, [angle, disabled]);

    useEffect(() => {
      // Set component as ready after short delay
      const timer = setTimeout(() => {
        setIsReady(true);
        // Initialize with random angle
        if (containerRef.current) {
          const randomStart = Math.random() * 360;
          containerRef.current.style.setProperty("--start", String(randomStart));
          containerRef.current.style.setProperty("--active", "1");
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }, []);

    // If component is not ready, render a placeholder div
    if (!isReady) {
      return <div className="absolute inset-0 rounded-[inherit]" />;
    }

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-40",
            variant === "white" && "border-white",
            disabled && "!block"
          )}
        />
        <div
          ref={containerRef}
          style={{
            "--blur": `${blur}px`,
            "--spread": spread,
            "--start": "0",
            "--active": "0",
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--repeating-conic-gradient-times": "2",
            "--gradient":
              variant === "default"
                ? `radial-gradient(circle, rgba(221, 123, 187, 0.4) 10%, #dd7bbb00 20%),
              radial-gradient(circle at 40% 40%, rgba(215, 159, 30, 0.3) 5%, #d79f1e00 15%),
              radial-gradient(circle at 60% 60%, rgba(90, 146, 44, 0.3) 10%, #5a922c00 20%), 
              radial-gradient(circle at 40% 60%, rgba(76, 120, 148, 0.3) 10%, #4c789400 20%),
              repeating-conic-gradient(
                from calc(var(--start) * 1deg) at 50% 50%,
                rgba(221, 123, 187, 0.3) 0%,
                rgba(215, 159, 30, 0.3) calc(25% / var(--repeating-conic-gradient-times)),
                rgba(90, 146, 44, 0.3) calc(50% / var(--repeating-conic-gradient-times)), 
                rgba(76, 120, 148, 0.3) calc(75% / var(--repeating-conic-gradient-times)),
                rgba(221, 123, 187, 0.3) calc(100% / var(--repeating-conic-gradient-times))
              )`
                : `radial-gradient(circle, rgba(221, 123, 187, 0.6) 10%, rgba(221, 123, 187, 0) 20%),
              radial-gradient(circle at 40% 40%, rgba(149, 76, 233, 0.6) 5%, rgba(149, 76, 233, 0) 15%),
              radial-gradient(circle at 60% 60%, rgba(76, 233, 153, 0.5) 10%, rgba(76, 233, 153, 0) 20%), 
              repeating-conic-gradient(
                from calc(var(--start) * 1deg) at 50% 50%,
                rgba(221, 123, 187, 0.7) 0%,
                rgba(149, 76, 233, 0.7) calc(33% / var(--repeating-conic-gradient-times)),
                rgba(76, 233, 153, 0.7) calc(66% / var(--repeating-conic-gradient-times)),
                rgba(221, 123, 187, 0.7) calc(100% / var(--repeating-conic-gradient-times))
              )`,
          }}
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300",
            glow && (variant === "default" ? "opacity-40" : "opacity-60"),
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden"
          )}
        >
          <div
            className={cn(
              "glow",
              "h-full w-full",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };