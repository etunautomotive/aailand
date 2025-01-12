"use client";

import clsx from "clsx";
import NextImage from "next/image";
import { useState, useEffect } from "react";

const Image = (props) => {
  const { alt, src, className, rounded, style, ...rest } = props;
  const [isLoading, setLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
    setLoading(true);
  }, [src]);

  return (
    <div className={clsx("", isLoading ? "animate-pulse" : "", rounded)}>
      <NextImage
        className={clsx(
          "duration-700 ease-in-out",
          isLoading
            ? "scale-[1.02] blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          rounded,
          className
        )}
        src={currentSrc}
        alt={alt}
        quality={100}
        onLoad={() => setLoading(false)}
        style={style}
        {...rest}
      />
    </div>
  );
};

export default Image;
