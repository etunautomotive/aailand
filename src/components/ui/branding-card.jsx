import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const swatchVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

const BrandingCard = React.forwardRef(
  ({ className, category, title, subtitle, displayElement, colors, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "w-full overflow-hidden rounded-2xl border border-secondary/8 bg-white text-secondary shadow-[0_2px_8px_rgba(42,36,32,0.06)] transition-all duration-300 hover:shadow-[0_12px_24px_rgba(42,36,32,0.12)]",
          className
        )}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        aria-label={`${category}: ${title}`}
        role="group"
        {...props}
      >
        {/* Main content area */}
        <div className="p-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-secondary/50">
            {category}
          </p>
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold font-space-grotesk tracking-tight leading-tight">{title}</h3>
              <p className="text-xs text-secondary/60 mt-1">{subtitle}</p>
            </div>
            <div className="text-4xl font-bold tracking-tighter flex-shrink-0">{displayElement}</div>
          </div>
        </div>

        {/* Color palette section */}
        {colors && colors.length > 0 && (
          <div className="flex h-16 w-full border-t border-secondary/5">
            {colors.map((color, index) => (
              <motion.div
                key={index}
                className="h-full flex-1"
                style={{ backgroundColor: color }}
                variants={swatchVariants}
                aria-label={`Color swatch ${index + 1}: ${color}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    )
  }
)

BrandingCard.displayName = "BrandingCard"

export { BrandingCard }
