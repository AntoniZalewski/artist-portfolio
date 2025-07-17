// src/components/ui/LoadingScreen.tsx
'use client'
import { motion } from 'framer-motion'
import styles from '@/styles/LoadingScreen.module.css'

export function LoadingScreen() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-black z-[100]"
    >
      <div className={styles.wrap}>
        <div className={styles.loading}>
          <div className={styles.bounceball}></div>
          <div className={styles.text}>PRZYGOTOWUJĘ...</div>
        </div>
      </div>
    </motion.div>
  )
}