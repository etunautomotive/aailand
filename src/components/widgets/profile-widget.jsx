'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { User, Phone, Mail, MapPin, TrendingUp } from 'lucide-react'

export function ProfileWidget() {
  const [isVisible, setIsVisible] = useState(false)

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
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contact = {
    name: 'Sarah Mitchell',
    phone: '(555) 123-4567',
    email: 'sarah.mitchell@email.com',
    location: 'Denver, CO',
    interest: 'High Intent',
    lastSeen: '2 hours ago',
  }

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="w-full h-full"
    >
      <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm p-4 sm:p-6 h-full flex flex-col">
        {/* Header with Interest Badge */}
        <motion.div variants={itemVariants} className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base truncate">{contact.name}</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{contact.lastSeen}</p>
            </div>
          </div>
          <motion.span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-semibold rounded-full flex-shrink-0 whitespace-nowrap">
            {contact.interest}
          </motion.span>
        </motion.div>

        {/* Contact Fields */}
        <div className="space-y-3 flex-1">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0" />
            <p className="text-sm text-slate-700 dark:text-slate-300 truncate">{contact.phone}</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0" />
            <p className="text-sm text-slate-700 dark:text-slate-300 truncate">{contact.email}</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0" />
            <p className="text-sm text-slate-700 dark:text-slate-300">{contact.location}</p>
          </motion.div>
        </div>

        {/* Intent Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-red-500" />
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Intent Score</span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i <= 4 ? 'bg-red-500' : 'bg-slate-200 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
