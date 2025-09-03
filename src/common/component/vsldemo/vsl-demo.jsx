"use client";

import React from "react";
import CalendlyWidget from "@/common/component/calendly/CalendlyWidget";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import GridSparkles from "@/common/component/element/GridSparkles";
import Script from "next/script";

const VSLDemo = () => {
  return (
    <div className="h-auto min-h-screen px-5 lg:px-10 py-20 relative w-full bg-white dark:bg-black text-black dark:text-white">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <div className="absolute w-full h-full z-[-1]">
        <GridSparkles />
        <div className="bg-gradient-to-b from-white dark:from-black from-0% via-white/80 dark:via-black/80 to-transparent absolute inset-0"></div>
        <div className="bg-gradient-to-l from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
        <div className="bg-gradient-to-r from-white dark:from-black from-0% to-transparent to-20% absolute inset-0"></div>
      </div>

      <ComponentTransition>
        {/* Critical Alert Banner */}
        <div className="text-center mb-8 pt-16 relative z-10">
          <div className="inline-block bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-500/50 rounded-lg px-6 py-3 mb-8">
            <p className="text-red-700 dark:text-red-300 font-semibold text-sm">
              ⚠️ CRITICAL: Only 8 Implementation Slots Remaining in September 2025 - Next Available: October 2025
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column - Hero Content + What Happens */}
          <div className="space-y-6">
            
            {/* Main Headline */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
                Never Work A Lead Again
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Convert fresh + &quot;dead&quot; leads into booked appointments the same day with &lt;60s replies, 5+ automatic follow-ups, objection handling, and qualification—expect 4-10 extra deals/month without adding headcount.
              </p>
            </div>

            {/* What Happens on This Call */}
            <div className="bg-gray-50 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-700/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black text-xl">⚡</span>
                </div>
                <h2 className="text-xl font-bold text-black dark:text-white">
                  What Happens on This Call?
                </h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">Live scan of your fresh + old lead flows</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">See the exact scripts booking in your market</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">14-day rollout (integrations + compliance)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <p className="text-gray-700 dark:text-gray-300">Revenue Recovery Guarantee: If we don&apos;t book qualified appts from existing leads in 14 days, you don&apos;t pay</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <div>
                  <span className="font-semibold text-black dark:text-white">Trusted by 40 dealers</span>
                  <span className="text-gray-600 dark:text-gray-400"> across auto, RV, and powersports</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <div>
                  <span className="font-semibold text-black dark:text-white">9 appointments</span>
                  <span className="text-gray-600 dark:text-gray-400"> from 100 &quot;dead&quot; leads in 7 days</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✅</span>
                <div>
                  <span className="font-semibold text-black dark:text-white">5 cars</span>
                  <span className="text-gray-600 dark:text-gray-400"> in 10 days from reactivated pipeline</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Calendly Booking */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-700/50 p-6 shadow-lg">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  📅 Book 15-Min Lead Flow Audit
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  15-minute call • No commitment required • See immediate results
                </p>
              </div>

              {/* Calendly Widget */}
              <div className="relative">
                <CalendlyWidget
                  url="https://calendly.com/wes-automotiveai/30min?hide_event_type_details=1"
                  height="650px"
                />
              </div>

              {/* Bottom Security/Trust Indicators */}
              <div className="mt-4 space-y-3">
                <p className="text-center text-red-600 dark:text-red-400 font-semibold text-sm">
                  (Only 8 September slots remaining)
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span>✓ Secure</span>
                  <span>✓ No spam</span>
                  <span>✓ No Long Term Commitment</span>
                </div>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                  By booking, you consent to receive SMS/email about your demo. TCPA/CASL compliant. Opt-out anytime.
                </p>
              </div>
            </div>
          </div>

        </div>
      </ComponentTransition>
    </div>
  );
};

export default VSLDemo;