'use client'

import React, { useState, useRef } from 'react'
import { Send, X } from 'lucide-react'

export function MorphPanel() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm curious about your dealership. What's your biggest challenge right now?",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: input,
    }
    setMessages([...messages, userMessage])
    setInput('')

    // Simulate bot response
    setIsLoading(true)
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: 'That sounds like a challenge. Let me show you how we solve it with AI-powered automation.',
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 800)
  }

  return (
    <section className="bg-background px-4 py-16 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg">
          {/* Header */}
          <div className="bg-primary text-white px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold">Automotive AI</h3>
              <p className="text-xs text-white/80">AI-powered sales assistant</p>
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-md ${
                    msg.type === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-foreground'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-foreground px-4 py-2 rounded-md">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-border p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-input border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary hover:opacity-90 text-white rounded-md p-2 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
