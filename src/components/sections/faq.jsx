'use client'

import { useState } from 'react'
import { PromptInputBox } from '../ui/prompt-input-box'

export function FAQ() {
  const [userMessage, setUserMessage] = useState('')

  const handleSendMessage = (message, files) => {
    setUserMessage(message)
    console.log('Message sent:', message, files)
  }

  return (
    <section className="py-32 px-8 bg-surface">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-4">FAQ</p>
          <h2 className="text-5xl md:text-6xl font-bold font-headline text-secondary mb-6">
            Questions we get asked.
          </h2>
          <p className="text-lg text-secondary/70">
            Go ahead. We've heard them all.
          </p>
        </div>

        <div className="space-y-6">
          <PromptInputBox
            onSend={handleSendMessage}
            placeholder="How fast is the response time? What DMS do you integrate with?"
          />

          {userMessage && (
            <div className="p-6 bg-white border border-secondary/20 rounded-[2rem] shadow-sm">
              <p className="text-sm text-secondary/60 mb-2">Your question:</p>
              <p className="text-secondary font-medium">{userMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
