'use client'

import { useState } from 'react'
import { X, Settings } from 'lucide-react'

export function UpgradeBanner({
  buttonText = 'Upgrade to Pro',
  description = 'for 2x more lead capacity and advanced features',
  onClose,
  onClick,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  const handleClick = () => {
    onClick?.()
  }

  if (!isVisible) return null

  return (
    <div className={`bg-secondary border border-border rounded-md p-4 md:p-6 flex items-center justify-between gap-4 ${className}`}>
      <div className="flex items-center gap-4 flex-1">
        <div className="bg-primary rounded-md p-3">
          <Settings className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        <div className="flex-1">
          <p className="text-sm md:text-base font-semibold text-foreground">
            Level up your dealership
          </p>
          <p className="text-xs md:text-sm text-foreground/70">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleClick}
          className="bg-primary hover:opacity-90 text-white font-semibold py-2 px-4 md:px-6 rounded-md transition-opacity text-sm whitespace-nowrap"
        >
          {buttonText}
        </button>
        <button
          onClick={handleClose}
          className="text-foreground/60 hover:text-foreground transition-colors p-1"
          aria-label="Close banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
