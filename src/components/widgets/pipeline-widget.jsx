'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

export function PipelineWidget() {
  const [isVisible, setIsVisible] = useState(false)

  const stages = [
    { name: 'New Leads', value: 142, max: 150, percent: 95 },
    { name: 'Contacted', value: 98, max: 150, percent: 65 },
    { name: 'Interested', value: 67, max: 150, percent: 45 },
    { name: 'Test Drive', value: 42, max: 150, percent: 28 },
    { name: 'Closing', value: 18, max: 150, percent: 12 },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (percent) => ({
      width: `${percent}%`,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
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
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex items-center justify-between gap-3 mb-6"
        >
          <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Intelligent Pipeline</h3>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" />
            <span className="text-xs font-medium text-green-700 dark:text-green-400">↑ 12%</span>
          </div>
        </motion.div>

        {/* Pipeline Bars */}
        <div className="space-y-4 flex-1 overflow-y-auto">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.name}
              custom={stage.percent}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0.1 * idx,
                  },
                },
              }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 truncate">
                  {stage.name}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                  {stage.value}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  custom={stage.percent}
                  variants={barVariants}
                  className={`h-full rounded-full ${
                    idx === 0
                      ? 'bg-red-500'
                      : idx === 1
                        ? 'bg-red-400'
                        : idx === 2
                          ? 'bg-red-300'
                          : idx === 3
                            ? 'bg-slate-300 dark:bg-slate-600'
                            : 'bg-slate-200 dark:bg-slate-700'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">Total Pipeline Value</span>
            <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">$427K</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
