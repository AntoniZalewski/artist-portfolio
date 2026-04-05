// src/components/organisms/HeroSection/HeroSection.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollIndicator } from '@/components/atoms/ScrollIndicator'

export function HeroSection() {
  return (
    <section className="relative min-h-screen lg:h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden bg-[#FBFBFB] pt-24 pb-12 lg:pt-20 lg:pb-0">
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-24 max-w-screen-2xl h-auto lg:h-full">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8"
        >
          <div className="space-y-4">
            <h1 className="font-playfair text-5xl md:text-8xl lg:text-9xl tracking-tighter font-bold leading-[0.85] text-[#6b757e]">
              Marcin <br/> Zalewski
            </h1>
          </div>

          <p className="max-w-md text-sm md:text-lg font-sans text-stone-500 leading-relaxed font-light">
            Odkryj kolekcję dzieł, gdzie malarstwo figuratywne spotyka się z abstrakcją geometryczną. Współczesna wizualizacja mitologii i historii sztuki.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a href="#gallery" className="btn-gallery">
              Zobacz kolekcję
            </a>
            <a href="#" className="flex items-center gap-3 text-[11px] font-sans font-bold uppercase tracking-widest text-[#6b757e] hover:text-[#8C3B79] transition-colors group">
              <span>Moja historia</span>
              <div className="w-8 h-[1px] bg-[#6b757e]/20 group-hover:w-12 transition-all duration-300" />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
           className="flex-[1.2] relative w-full h-[52vh] min-h-[280px] max-h-[460px] lg:h-full lg:min-h-[500px] lg:max-h-none"
        >
          <div className="relative w-full h-full">
            <Image
              src="/profilowe01.webp"
              alt="Marcin Zalewski"
              fill
              className="object-cover contrast-[1.05]"
              priority
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-20">
         <ScrollIndicator />
      </div>
    </section>
  )
}
