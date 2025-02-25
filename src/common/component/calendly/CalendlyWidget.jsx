"use client";

import React, { useEffect } from "react";

const CalendlyWidget = ({
  url = "https://calendly.com/wes-automotiveai/30min?hide_event_type_details=1",
  height = "700px",
}) => {
  useEffect(() => {
    // Load the Calendly script
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    // Only add the script if it doesn't already exist
    if (!document.querySelector(`script[src="${script.src}"]`)) {
      head.appendChild(script);
    }

    // Clean up function not needed as we want to keep the script loaded
    return () => {};
  }, []);

  return (
    <div className="w-full relative z-10">
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height: height }}
      />
    </div>
  );
};

export default CalendlyWidget;
