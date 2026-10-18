import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type MotionSectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function MotionSection({ children, className, id }: MotionSectionProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}
