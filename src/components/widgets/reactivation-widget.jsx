'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { RotateCw, CheckCircle2 } from 'lucide-react'

export function ReactivationWidget() {
  const [isVisible, setIsVisible] = useState(false)

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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { label: 'Database Records', value: '847', change: '+142 new' },
    { label: 'Reactivated', value: '234', change: '27.6%' },
    { label: 'Contact Rate', value: '85%', change: '+8%' },
  ]

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
          variants={statVariants}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
            <RotateCw className="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Database Reactivation</h3>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 flex-1">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              custom={idx}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0.1 * idx,
                  },
                },
              }}
              className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">
                    {stat.label}
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <div className="flex-shrink-0 px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded">
                  <p className="text-xs font-medium text-green-700 dark:text-green-400 whitespace-nowrap">
                    {stat.change}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Action */}
        <motion.div
          variants={statVariants}
          className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span className="text-xs text-slate-600 dark:text-slate-400">Reactivation in progress</span>
          </div>
          <button className="text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
            View All
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}
