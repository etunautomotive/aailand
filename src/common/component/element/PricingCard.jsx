import React from "react";
import { FaCheck } from "react-icons/fa";
import { PricingItem as DefaultPricingItem } from "@/common/constant/PricingItem";
import clsx from "clsx";
import SparkleButton from "@/common/component/sparkle-button/SparkleButton";
import CalendlyWidget from "@/common/component/calendly/CalendlyWidget";
import Link from "next/link";

export default function PricingCard({ pricingItems, badgeText, offerTitle, offerSubtitle, features, buttonText = "Book a Strategy Call", useModalInsteadOfCalendly = false, onCtaClick }) {
  const [showBooking, setShowBooking] = React.useState(false);

  const items = pricingItems || DefaultPricingItem;

  return (
    <div className="flex justify-center w-full max-w-xl relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-[24px] blur-2xl opacity-10 group-hover:opacity-30 transition-all duration-1000 pointer-events-none" />
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-[24px] blur-xl opacity-20 pointer-events-none"
        style={{
          animation: "cardPulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      />

      {items.map((item, index) => (
        <div
          key={index}
          className={clsx(
            "w-full p-10 flex flex-col justify-between border-[1px] rounded-3xl border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-500 bg-white/90 dark:bg-black/90 backdrop-blur-xl relative",
            item.recommended &&
              "border-black/20 dark:border-white/20 shadow-2xl"
          )}
        >
          {(badgeText || item.recommended) && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-medium px-8 py-2 rounded-full shadow-lg">
              {badgeText || item.recommended}
            </div>
          )}

          <div className="space-y-10">
            <div className="text-center space-y-3">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                {offerTitle || item.plan}
              </h1>
              <p className="text-base text-neutral-500 dark:text-neutral-400">
                {offerSubtitle || item.desc}
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center">
                <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                  {item.price}
                  <span className="text-xl text-neutral-500 dark:text-neutral-400">
                    {item.payTime}
                  </span>
                </h1>
              </div>
            </div>

            <ul className="space-y-5">
              {(features || Object.values(item.benefit)).map((benefit, i) => (
                <li key={i} className="flex items-start gap-4 text-base">
                  <FaCheck className="h-5 w-5 flex-shrink-0 text-blue-500 dark:text-blue-400 mt-1" />
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            {useModalInsteadOfCalendly ? (
              <SparkleButton className="w-full !py-4 !text-lg flex items-center justify-center" onClick={onCtaClick}>
                {buttonText}
              </SparkleButton>
            ) : (
              <Link href="/demo">
                <SparkleButton className="w-full !py-4 !text-lg flex items-center justify-center">
                  {buttonText}
                </SparkleButton>
              </Link>
            )}
          </div>
        </div>
      ))}

      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-black rounded-lg w-full max-w-4xl relative">
            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-4 right-4 text-black dark:text-white z-20 p-2 bg-white dark:bg-black rounded-full"
            >
              ✕
            </button>
            <CalendlyWidget
              url="https://calendly.com/wes-automotiveai/30min?hide_event_type_details=1"
              height="700px"
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes cardPulse {
          0%,
          100% {
            opacity: 0.1;
            transform: translateY(8px);
          }
          50% {
            opacity: 0.3;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
