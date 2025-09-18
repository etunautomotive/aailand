"use client";

import React, { useEffect, useRef, useState, createContext, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items = [], initialScroll = 0 }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const itemRefs = useRef([]);
  const [itemSetWidth, setItemSetWidth] = useState(0);
  const loopTimes = 3; // render 3 sets for seamless looping
  const isUserInteractingRef = useRef(false);
  const userPauseTimeoutRef = useRef(undefined);

  const loopedItems = useMemo(() => {
    return Array.from({ length: loopTimes })
      .map((_, i) => items.map((it, idx) => ({ node: it, key: `${i}-${idx}` })))
      .flat();
  }, [items]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const checkScrollability = () => {
    // kept for parity; no-op for now
  };

  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth < 768;

  // Measure widths and center on the middle set. Recalculate on resize
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const measureAndCenter = () => {
      const totalWidth = el.scrollWidth;
      const computedSetWidth = totalWidth / loopTimes;
      const offsetWithinSet = computedSetWidth > 0 ? el.scrollLeft % computedSetWidth : 0;
      setItemSetWidth(computedSetWidth);
      el.scrollLeft = computedSetWidth + offsetWithinSet + initialScroll;
      checkScrollability();
    };

    const frame = requestAnimationFrame(measureAndCenter);
    const handleResize = () => requestAnimationFrame(measureAndCenter);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [initialScroll, loopedItems.length]);

  // Keep scroll position within the middle set
  const handleLoopEdges = () => {
    if (!carouselRef.current || !itemSetWidth) return;
    const el = carouselRef.current;
    const tolerance = 20;
    if (el.scrollLeft <= tolerance) {
      el.scrollLeft = el.scrollLeft + itemSetWidth;
    } else if (el.scrollLeft >= itemSetWidth * 2 - tolerance) {
      el.scrollLeft = el.scrollLeft - itemSetWidth;
    }
  };

  // Pause auto-scroll while the user interacts and resume shortly after
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const markInteraction = () => {
      isUserInteractingRef.current = true;
      if (userPauseTimeoutRef.current !== undefined) {
        window.clearTimeout(userPauseTimeoutRef.current);
      }
      userPauseTimeoutRef.current = window.setTimeout(() => {
        isUserInteractingRef.current = false;
      }, 800);
    };

    el.addEventListener("wheel", markInteraction, { passive: true });
    el.addEventListener("touchstart", markInteraction, { passive: true });
    el.addEventListener("touchmove", markInteraction, { passive: true });
    el.addEventListener("mousedown", markInteraction);
    el.addEventListener("mouseup", markInteraction);

    return () => {
      el.removeEventListener("wheel", markInteraction);
      el.removeEventListener("touchstart", markInteraction);
      el.removeEventListener("touchmove", markInteraction);
      el.removeEventListener("mousedown", markInteraction);
      el.removeEventListener("mouseup", markInteraction);
      if (userPauseTimeoutRef.current !== undefined) {
        window.clearTimeout(userPauseTimeoutRef.current);
      }
    };
  }, []);

  // Auto scroll using rAF
  useEffect(() => {
    let raf;
    const step = () => {
      if (carouselRef.current && !isUserInteractingRef.current) {
        const speed = isMobile() ? 0.6 : 1.2; // px per frame
        carouselRef.current.scrollLeft += speed;
        handleLoopEdges();
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [itemSetWidth, mounted]);

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
      setCurrentIndex(index);
    }
  };

  if (!mounted) return null;

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={() => {
            checkScrollability();
            handleLoopEdges();
          }}
        >
          {/* Edge blur gradients */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-[1000] h-full w-[18%] sm:w-[14%] md:w-[10%] bg-gradient-to-r from-[hsl(var(--background))] to-transparent backdrop-blur-sm"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 z-[1000] h-full w-[18%] sm:w-[14%] md:w-[10%] bg-gradient-to-l from-[hsl(var(--background))] to-transparent backdrop-blur-sm"
          />

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl",
            )}
          >
            {loopedItems.map((entry, index) => (
              <motion.div
                ref={(el) => (itemRefs.current[index] = el)}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                  },
                }}
                key={"card" + entry.key}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {entry.node}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index, layout = false }) => {
  return (
    <motion.div
      layoutId={layout ? `card-${card.title}` : undefined}
      className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      <div className="relative z-40 p-8">
        <motion.p className="text-left font-sans text-sm font-medium text-white md:text-base">
          {card.category}
        </motion.p>
        <motion.p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
          {card.title}
        </motion.p>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        className="absolute inset-0 z-10 object-cover"
      />
    </motion.div>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }) => {
  return (
    <img
      className={cn("h-full w-full object-cover", className)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
