'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Send } from 'lucide-react'

export function ChatWidget() {
  const [isVisible, setIsVisible] = useState(false)

  const messages = [
    {
      id: 1,
      type: 'user',
      text: 'Hi, I\'m interested in your 2024 Tesla Model Y',
      timestamp: '2:34 PM',
    },
    {
      id: 2,
      type: 'ai',
      text: 'Great choice! The Model Y is our most popular. When would you like to schedule a test drive?',
      timestamp: '2:34 PM',
    },
    {
      id: 3,
      type: 'user',
      text: 'Maybe this weekend?',
      timestamp: '2:35 PM',
    },
    {
      id: 4,
      type: 'ai',
      text: '📅 Saturday at 2 PM works perfectly. I\'ve reserved spot 5 for you.',
      timestamp: '2:35 PM',
    },
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

  const messageVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
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
      <div className="flex flex-col h-full bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">AI Assistant</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">30s response time</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-4 space-y-4 flex flex-col justify-end">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              variants={messageVariants}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm break-words ${
                  msg.type === 'user'
                    ? 'bg-slate-900 dark:bg-slate-800 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="px-3 sm:px-4 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex-shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Message..."
              className="flex-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white focus:outline-none focus:border-red-500 dark:focus:border-red-500"
            />
            <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 flex-shrink-0">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
