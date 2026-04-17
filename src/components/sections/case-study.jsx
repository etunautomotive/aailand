'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function AnimatedCounter({ value }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <motion.div ref={ref}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {value}
        </motion.span>
      ) : (
        <span>0</span>
      )}
    </motion.div>
  )
}

function MetricCard({ label, value, index }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white border border-secondary/10 rounded-2xl p-6 hover:border-secondary/20 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5">
        <div className="text-xs uppercase tracking-widest text-secondary/60 font-bold mb-3">
          {label}
        </div>
        <div className="text-5xl md:text-6xl font-bold font-space-grotesk text-primary group-hover:scale-105 transition-transform duration-300">
          <AnimatedCounter value={value} />
        </div>
      </div>
    </motion.div>
  )
}

export function CaseStudy() {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.3, triggerOnce: true })
  const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-4">Real Dealership. Real Numbers.</p>
          <div className="space-y-3">
            <h2 className="text-6xl md:text-7xl font-bold font-space-grotesk text-secondary leading-tight">
              Riverside Auto Group
            </h2>
            <p className="text-lg text-secondary/70 font-medium">
              Multi-location dealer | 12 sales reps | $2M monthly revenue
            </p>
          </div>
        </motion.div>

        {/* Content - Two Column Layout */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column - Challenge & Solution */}
          <div className="space-y-8">
            {/* Challenge Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">The Challenge</p>
                <h3 className="text-2xl font-bold font-space-grotesk text-secondary">
                  8,000 contacts. Nobody touching them.
                </h3>
              </div>
              <p className="text-base text-secondary/70 leading-relaxed">
                Three reps handled all follow-up across two locations. When one took time off, pipeline dried up. The database was full of old leads nobody had capacity to reach.
              </p>
            </motion.div>

            {/* Solution Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">The Solution</p>
                <h3 className="text-2xl font-bold font-space-grotesk text-secondary">
                  Live in 2 weeks. Results on day one.
                </h3>
              </div>
              <p className="text-base text-secondary/70 leading-relaxed">
                Connected to their DMS. Trained on their top rep's actual conversation patterns. The system started reaching old contacts immediately. First credit application came in within hours.
              </p>
            </motion.div>

            {/* Mike's Quote - Bento Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <p className="text-2xl font-space-grotesk font-bold text-secondary leading-relaxed">
                  "The system found money we forgot we had."
                </p>
                <p className="text-lg text-primary font-space-grotesk font-bold">
                  First month paid for the year.
                </p>
                <div className="pt-4 border-t border-primary/20">
                  <p className="font-bold text-secondary text-sm">Mike Rodriguez</p>
                  <p className="text-xs text-secondary/60 font-medium">Sales Manager, Riverside Auto Group</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Results & Metrics (Bento Grid) */}
          <div className="space-y-5">
            {/* 30-Day Results Header */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">30-Day Results</p>
              <h3 className="text-xl font-bold font-space-grotesk text-secondary">Measurable Impact</h3>
            </motion.div>

            {/* Bento Grid - Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large metric - Qualified Leads */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-2 bg-white border border-secondary/10 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="text-xs uppercase tracking-widest text-secondary/60 font-bold mb-3">Qualified Leads Re-engaged</div>
                <div className="text-6xl font-bold font-space-grotesk text-primary">
                  <AnimatedCounter value="47" />
                </div>
              </motion.div>

              {/* Deals Closed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white border border-secondary/10 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="text-xs uppercase tracking-widest text-secondary/60 font-bold mb-2">Deals Closed</div>
                <div className="text-4xl font-bold font-space-grotesk text-primary">
                  <AnimatedCounter value="12" />
                </div>
              </motion.div>

              {/* Revenue */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white border border-secondary/10 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="text-xs uppercase tracking-widest text-secondary/60 font-bold mb-2">Revenue Added</div>
                <div className="text-3xl font-bold font-space-grotesk text-primary">$180K</div>
              </motion.div>
            </div>

            {/* Impact Card - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-tertiary/40 to-tertiary/20 border border-secondary/10 rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <p className="text-xs uppercase tracking-widest font-bold text-secondary/60 mb-3">The Impact</p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-secondary">
                  Same dealership. Same team. Same reps.
                </p>
                <p className="text-3xl font-bold font-space-grotesk text-primary">8X more deals</p>
                <p className="text-xs text-secondary/70 font-medium">from the same database</p>
              </div>
            </motion.div>

            {/* No New Hires Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={contentInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white border border-secondary/10 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="text-xs uppercase tracking-widest text-secondary/60 font-bold mb-2">New Team Members Required</div>
              <div className="text-5xl font-bold font-space-grotesk text-primary">0</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
