// src/components/molecules/PaintingCard/PaintingCard.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Painting } from '@/lib/data'

interface PaintingCardProps {
  painting: Painting
  onClick: (painting: Painting) => void
}

export function PaintingCard({ painting, onClick }: PaintingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer flex flex-col space-y-4 max-w-lg"
      onClick={() => onClick(painting)}
    >
      <div className="relative overflow-hidden bg-muted group-hover:shadow-[0_0_80px_rgba(0,0,0,0.15)] transition-all duration-1000 ease-in-out">
        <motion.div
          layoutId={`card-${painting.id}`}
          className="w-full relative h-auto flex justify-center items-center"
        >
          <Image
            src={painting.imageUrl}
            alt={painting.title}
            width={painting.width}
            height={painting.height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            priority={false}
          />
        </motion.div>
        
        {/* Subtle highlight overlay */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>
      
      <div className="flex flex-col space-y-1">
        <h3 className="font-playfair text-2xl tracking-tighter leading-snug group-hover:text-primary transition-colors duration-500 lowercase italic">
          {painting.title}
        </h3>
        <div className="h-[1px] w-6 bg-primary/20 group-hover:w-10 transition-all duration-500 my-1" />
        <p className="text-[10px] uppercase tracking-[0.25em] font-sans text-muted-foreground/60 leading-relaxed max-w-[280px] font-bold">
          {painting.description}
        </p>
      </div>
    </motion.div>
  )
}
