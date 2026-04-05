// src/components/organisms/QuoteSection/QuoteSection.tsx
'use client'

import { motion } from 'framer-motion'

export function QuoteSection() {
  return (
    <section className="py-60 bg-[#FBFBFB] text-[#6b757e] relative overflow-hidden selection:bg-[#8C3B79] selection:text-white border-y border-[#6b757e]/5">
      <div className="container mx-auto px-10 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           className="relative max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Decorative quote mark with very low opacity */}
          <span className="font-playfair text-[25vw] absolute -top-[0.2em] -left-[0.05em] text-[#6b757e]/5 select-none pointer-events-none italic">
            &bdquo;
          </span>
          
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-center leading-[1.05] tracking-tighter text-[#6b757e] italic px-4">
            &bdquo;Malarstwo figuratywne obok abstrakcji geometrycznej, teraźniejszość i przeszłość, współegzystują równorzędnie w przekazie nowej serii obrazów Marcina Zalewskiego.&rdquo;
          </blockquote>

          <motion.footer 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-20 group flex flex-col items-center gap-8"
          >
            <div className="h-1 w-12 bg-[#8C3B79]" />
            <div className="text-center">
              <cite className="not-italic text-sm font-sans font-bold uppercase tracking-[1em] text-[#6b757e]/60">
                Alberto Dambruoso
              </cite>
              <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#6b757e]/40 mt-4 antialiased">
                (tłum. Barbara Czechmeszyńska - Skowron)
              </p>
            </div>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  )
}
