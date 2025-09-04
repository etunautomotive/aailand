"use client";

import React, { useEffect, useRef, useState } from "react";

const ScrollingBrands = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      if (containerRef.current) {
        containerRef.current.style.setProperty("--animation-duration", "120s");
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      }
      setStart(true);
    }
  };

  const brands = [
    { light: "/aec-light.png", dark: "/aec-dark.png", alt: "AEC" },
    { light: "/autofinancecanada-dark.png", dark: "/autofinancecanada-light.png", alt: "Auto Finance Canada" },
    { light: "/candadrives-light.png", dark: "/candadrives-dark.png", alt: "Canada Drives" },
    { light: "/creditapp-light.png", dark: "/creditapp-dark.png", alt: "CreditApp" },
    { light: "/elm-light.png", dark: "/elm-dark.png", alt: "Elm Auto" },
    { light: "/pbs-light.png", dark: "/pbs-dark.png", alt: "PBS" },
    { light: "/sturgeon-light.png", dark: "/sturgeon-dark.png", alt: "Sturgeon" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      style={{
        '--animation-duration': '120s',
        '--animation-direction': 'forwards'
      }}
    >
      <div
        ref={scrollerRef}
        className={`flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4 ${
          start ? 'animate-scroll' : ''
        }`}
      >
        {brands.map((brand, idx) => (
          <div key={idx} className="flex-shrink-0 relative">
            <img 
              src={brand.light} 
              alt={brand.alt} 
              className="h-[60px] w-auto object-contain dark:hidden"
              loading="lazy"
              decoding="async"
            />
            <img 
              src={brand.dark} 
              alt={brand.alt} 
              className="h-[60px] w-auto object-contain hidden dark:block"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBrands;
