"use client";

import React, { useEffect, useRef, useCallback } from "react";

class Pixel {
  constructor(canvas, context, x, y, color, speed, delay) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.6;
    this.minSize = 0.8;
    this.maxSizeInteger = 3;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.x + centerOffset,
      this.y + centerOffset,
      this.size,
      this.size
    );
  }

  appear() {
    this.isIdle = false;

    if (this.counter <= this.delay) {
      this.counter += this.counterStep * 1.5;
      return;
    }

    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }

    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep * 1.2;
    }

    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;

    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.15;
    }

    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize * 1.1) {
      this.isReverse = true;
    } else if (this.size <= this.minSize * 0.9) {
      this.isReverse = false;
    }

    if (this.isReverse) {
      this.size -= this.speed * 1.2;
    } else {
      this.size += this.speed * 1.2;
    }
  }
}

const PixelCanvas = ({
  color = "blue",
  gap = 5,
  speed = 35,
  className = "",
}) => {
  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);
  const animationRef = useRef(null);
  const parentRef = useRef(null);
  const timeIntervalRef = useRef(1000 / 60);
  const timePreviousRef = useRef(0);

  const getRGBFromColor = useCallback((colorStr) => {
    // Handle common color formats
    if (colorStr.includes("green") || colorStr === "green")
      return { r: 34, g: 197, b: 94 }; // green-500
    if (colorStr.includes("purple") || colorStr === "purple")
      return { r: 168, g: 85, b: 247 }; // purple-500
    if (colorStr.includes("red") || colorStr === "red")
      return { r: 239, g: 68, b: 68 }; // red-500
    if (colorStr.includes("yellow") || colorStr === "yellow")
      return { r: 234, g: 179, b: 8 }; // yellow-500
    return { r: 59, g: 130, b: 246 }; // Default blue-500
  }, []);

  const getDistanceToCanvasCenter = useCallback((x, y, canvas) => {
    const dx = x - canvas.width / 2;
    const dy = y - canvas.height / 2;
    return Math.sqrt(dx * dx + dy * dy);
  }, []);

  const createPixels = useCallback(
    (canvas, ctx, gap, speed) => {
      const pixels = [];
      const rgb = getRGBFromColor(color);
      const colorStr = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1.0)`;

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          if (Math.random() < 0.7) {
            const delay = getDistanceToCanvasCenter(x, y, canvas);
            pixels.push(
              new Pixel(canvas, ctx, x, y, colorStr, speed * 0.001, delay)
            );
          }
        }
      }

      return pixels;
    },
    [color, getRGBFromColor, getDistanceToCanvasCenter]
  );

  const animate = useCallback((fnName) => {
    if (!canvasRef.current) return;

    animationRef.current = requestAnimationFrame(() => animate(fnName));

    const timeNow = performance.now();
    const timePassed = timeNow - timePreviousRef.current;

    if (timePassed < timeIntervalRef.current) return;

    timePreviousRef.current = timeNow - (timePassed % timeIntervalRef.current);

    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    for (let i = 0; i < pixelsRef.current.length; i++) {
      pixelsRef.current[i][fnName]();
      if (!pixelsRef.current[i].isIdle) {
        allIdle = false;
      }
    }

    if (allIdle) {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  const handleAnimation = useCallback(
    (name) => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      animate(name);
    },
    [animate]
  );

  const initCanvas = useCallback(() => {
    if (!canvasRef.current || !parentRef.current) return;

    const canvas = canvasRef.current;
    const parent = parentRef.current;
    const rect = parent.getBoundingClientRect();

    canvas.width = Math.floor(rect.width);
    canvas.height = Math.floor(rect.height);
    canvas.style.width = `${canvas.width}px`;
    canvas.style.height = `${canvas.height}px`;

    const ctx = canvas.getContext("2d");
    pixelsRef.current = createPixels(canvas, ctx, gap, speed);
  }, [gap, speed, createPixels]);

  useEffect(() => {
    parentRef.current = canvasRef.current?.parentNode;
    timePreviousRef.current = performance.now();

    if (parentRef.current) {
      initCanvas();

      // Create handler functions that we can reference for removal
      const handleMouseEnter = () => handleAnimation("appear");
      const handleMouseLeave = () => handleAnimation("disappear");
      const handleFocusIn = () => handleAnimation("appear");
      const handleFocusOut = () => handleAnimation("disappear");

      // Add event listeners to parent
      parentRef.current.addEventListener("mouseenter", handleMouseEnter);
      parentRef.current.addEventListener("mouseleave", handleMouseLeave);
      parentRef.current.addEventListener("focusin", handleFocusIn);
      parentRef.current.addEventListener("focusout", handleFocusOut);

      // Set up resize observer
      const resizeObserver = new ResizeObserver(() => {
        initCanvas();
      });
      resizeObserver.observe(parentRef.current);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }

        if (parentRef.current) {
          parentRef.current.removeEventListener("mouseenter", handleMouseEnter);
          parentRef.current.removeEventListener("mouseleave", handleMouseLeave);
          parentRef.current.removeEventListener("focusin", handleFocusIn);
          parentRef.current.removeEventListener("focusout", handleFocusOut);
          resizeObserver.disconnect();
        }
      };
    }
  }, [gap, speed, color, handleAnimation, initCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
};

export default PixelCanvas;
