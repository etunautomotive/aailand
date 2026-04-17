'use client'

import { useState } from 'react'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false)

  // Determine base classes based on variant
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    sm: 'btn-sm primary',
    'sm-secondary': 'btn-sm secondary',
  }

  const baseClass = variantClasses[variant] || variantClasses.primary

  return (
    <button
      className={`${baseClass} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled || loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full spinner" />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  )
}
