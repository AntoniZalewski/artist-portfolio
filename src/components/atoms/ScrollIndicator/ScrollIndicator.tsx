// src/components/atoms/ScrollIndicator/ScrollIndicator.tsx
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="absolute bottom-10"
    >
      <ChevronDown size={32} className="animate-bounce" />
    </motion.div>
  )
}
