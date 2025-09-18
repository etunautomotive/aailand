"use client";

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

import React, { useEffect, useState } from "react";
import styles from "./infinitemovingcards.module.css";

// Mask name to Firstname LastInitial.
const maskName = (name = "") => {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  const first = parts[0];
  const lastInitial = parts[parts.length - 1][0] || "";
  return lastInitial ? `${first} ${lastInitial}.` : first;
};

// Star rating component
const StarRating = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating 
              ? "text-yellow-400 fill-yellow-400" 
              : "text-gray-300 fill-gray-300 dark:text-gray-600 dark:fill-gray-600"
          }`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.612-.921 1.912 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}) => {
  // Built-in testimonials data
  const items = [
    {
      quote: "AAI helped me break every 30-day record. 230 re-engaged customers, $67K profit in one month from old leads only...",
      name: "Jaedynn Cutler",
      title: "Sales Person, Approval Express Canada"
    },
    {
      quote: "This is by far the best system we've ever used. Our team is more efficient than ever and customers are happier than ever.",
      name: "Jack Ni",
      title: "GM, Ride Collective"
    },
    {
      quote: "It's like having a sniper on your sales team. Never misses, never gets tired. Total game changer.",
      name: "Michael Filzwieser",
      title: "Team lead, Vancouver Auto Credit"
    },
    {
      quote: "This cut out hours of follow-up every day. It's efficient, powerful, and backed by an amazing team.",
      name: "Jacob Rego",
      title: "Sales Manager, Powersport Canada"
    },
    {
      quote: "Before Auto AI, we were at a 40-60% contact rate on paid leads, now we are up to 84%!! HUGE DIFFERENCE!!",
      name: "Kevin Maisch",
      title: "Sales Manager, Advanced Auto Finance"
    },
    {
      quote: "System is amazing, I have 10 out so far this month and pushing for 15-20 for 100k+ doing it all front to back myself. Couldn't do it without AAI",
      name: "Thomas Powell",
      title: "Sales Person, Straightline Kia"
    }
  ];
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && styles["animate-scroll"]
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <StarRating rating={5} />
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {maskName(item.name)}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
