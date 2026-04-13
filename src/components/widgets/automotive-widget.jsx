'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Users, TrendingUp, Clock, MessageSquare, Settings } from 'lucide-react'

export function AutomotiveWidget() {
  const [isVisible, setIsVisible] = useState(false)

  const features = [
    { icon: Zap, label: 'Instant Response', desc: '30 seconds' },
    { icon: Users, label: 'Mass Outreach', desc: '1000s daily' },
    { icon: TrendingUp, label: 'High Intent', desc: '85%+ rate' },
    { icon: Clock, label: 'Multi-Follow', desc: '14 attempts' },
    { icon: MessageSquare, label: 'Smart Reply', desc: 'Context aware' },
    { icon: Settings, label: 'Auto Config', desc: 'Zero setup' },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="w-full h-full"
    >
      <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm p-4 sm:p-6 h-full flex flex-col">
        {/* Header */}
        <motion.h3
          variants={itemVariants}
          className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-6"
        >
          Built for Automotive
        </motion.h3>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 flex-1">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.label}
                custom={idx}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                      delay: 0.05 * idx,
                    },
                  },
                }}
                className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 sm:p-4 border border-slate-200 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-900 transition-colors duration-200 flex flex-col items-center text-center gap-2"
              >
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-red-600 dark:text-red-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                    {feature.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{feature.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800"
        >
          <button className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors duration-200">
            See All Features
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}
