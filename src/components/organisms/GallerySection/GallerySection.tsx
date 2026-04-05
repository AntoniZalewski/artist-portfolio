// src/components/organisms/GallerySection/GallerySection.tsx
'use client'

import { PaintingCard } from '@/components/molecules/PaintingCard'
import type { Painting } from '@/lib/data'
import { motion } from 'framer-motion'

interface GallerySectionProps {
  paintings: Painting[]
  onPaintingClick: (painting: Painting) => void
}

export function GallerySection({ paintings, onPaintingClick }: GallerySectionProps) {
  // Grouping function
  const grouped = paintings.reduce((acc, painting) => {
    let category = 'Inne'
    if (painting.imageUrl.includes('/portrait/')) category = 'Portretowe'
    else if (painting.imageUrl.includes('/landscape/')) category = 'Pejzażowe / Poziome'
    else if (painting.imageUrl.includes('/square/')) category = 'Kwadratowe'
    
    if (!acc[category]) acc[category] = []
    acc[category].push(painting)
    return acc
  }, {} as Record<string, Painting[]>)

  // Sorting
  Object.keys(grouped).forEach(cat => {
    grouped[cat].sort((a, b) => (b.width * b.height) - (a.width * a.height))
  })

  const categories = ['Pejzażowe / Poziome', 'Portretowe', 'Kwadratowe']

  return (
    <section id="gallery" className="py-24 md:py-32 lg:py-40 bg-[#FBFBFB] text-[#6b757e] px-6 selection:bg-[#8C3B79] selection:text-white">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-36 lg:space-y-48">
        
        <header className="flex flex-col items-center gap-5 md:gap-6 text-center mb-16 md:mb-28 lg:mb-40">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase font-sans tracking-[0.8em] font-bold text-[#6b757e]/50"
          >
            Kolekcje Obrazów
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl lg:text-8xl font-playfair tracking-tighter font-bold text-[#6b757e]"
          >
            Galeria Prac
          </motion.h2>
          <div className="h-1 w-24 bg-[#8C3B79] mt-8" />
        </header>

        {categories.map((category) => {
          const items = grouped[category] || []
          if (items.length === 0) return null

          return (
            <div key={category} className="space-y-16 md:space-y-24 lg:space-y-32">
              <div className="flex items-center gap-4 md:gap-12">
                <h3 className="text-xs md:text-sm font-sans uppercase tracking-[0.45em] md:tracking-[0.6em] font-black text-[#6b757e] whitespace-nowrap">
                   {category}
                </h3>
                <div className="h-[1px] w-full bg-[#6b757e]/10" />
                <span className="text-[10px] font-sans text-[#6b757e]/40 whitespace-nowrap tracking-widest font-bold">
                    ({items.length} PRAC)
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-16 md:gap-y-24 lg:gap-y-40 items-start">
                {items.map((painting) => (
                  <PaintingCard
                    key={painting.id}
                    painting={painting}
                    onClick={onPaintingClick}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
