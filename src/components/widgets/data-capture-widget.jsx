'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, CheckCircle2 } from 'lucide-react'

export function DataCaptureWidget() {
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

  const fieldVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fields = [
    { label: 'Full Name', value: 'James Rodriguez', filled: true },
    { label: 'Email', value: 'james.r@email.com', filled: true },
    { label: 'Phone', value: '(555) 789-0123', filled: true },
    { label: 'Vehicle Interest', value: 'Luxury Sedan', filled: true },
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
          variants={fieldVariants}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Auto Data Capture</h3>
        </motion.div>

        {/* Form Fields */}
        <div className="space-y-3 flex-1">
          {fields.map((field, idx) => (
            <motion.div
              key={field.label}
              custom={idx}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0.08 * idx,
                  },
                },
              }}
            >
              <label className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 block mb-1.5">
                {field.label}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={field.value}
                  disabled
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white"
                />
                {field.filled && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          variants={fieldVariants}
          className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-slate-600 dark:text-slate-400">Captured in 1.2s</span>
            <span className="text-xs font-semibold text-green-600 dark:text-green-400">4/4 fields filled</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
