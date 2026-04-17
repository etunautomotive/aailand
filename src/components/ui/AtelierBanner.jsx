'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Settings, X } from 'lucide-react'

export function AtelierBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  if (!isVisible) return null

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.1, duration: 0.3 },
      x: custom.x,
      y: custom.y,
    }),
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="pt-32 px-4"
      >
        <div className="max-w-5xl mx-auto mb-8">
          <motion.div
            initial="hidden"
            animate={isHovered ? 'visible' : 'hidden'}
            variants={iconVariants}
            custom={{ x: -10, y: -10 }}
            className="pointer-events-none absolute left-[4px] top-[2px]"
          >
            <Settings className="text-primary w-4 h-4" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isHovered ? 'visible' : 'hidden'}
            variants={iconVariants}
            custom={{ x: 10, y: 10 }}
            className="pointer-events-none absolute bottom-[2px] left-[6rem]"
          >
            <Settings className="text-primary w-4 h-4" />
          </motion.div>
          <div className="relative flex h-[40px] items-center gap-2 rounded-full border border-primary/30 bg-primary/5 pl-3 pr-1 text-sm">
            <button
              className="font-medium text-primary underline decoration-primary/20 underline-offset-[4px] outline-none hover:text-primary/80 transition-colors text-xs"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Limited Time
            </button>
            <span className="text-xs text-primary/70">
              Get 50% off your first 3 months of deployment
            </span>
            {isVisible && (
              <button
                onClick={() => setIsVisible(false)}
                className="ml-auto flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent p-0 text-primary hover:bg-primary/10 transition-colors"
              >
                <X size={16} className="text-primary" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
