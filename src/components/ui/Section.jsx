'use client'

export function Section({
  children,
  className = '',
  background = 'white',
  padding = 'py-24',
  border = false,
}) {
  const bgClass = {
    white: 'bg-white',
    light: 'bg-zinc-50/50',
    'tertiary': 'bg-tertiary/20',
  }[background] || 'bg-white'

  const borderClass = border ? 'border-t border-secondary/10' : ''

  return (
    <section className={`${bgClass} ${padding} px-8 ${borderClass} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
