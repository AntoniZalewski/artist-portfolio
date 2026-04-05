// src/components/organisms/WorkspaceSection/WorkspaceSection.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { WorkspacePhoto } from '@/lib/data'

interface WorkspaceSectionProps {
  photos: WorkspacePhoto[]
  onPhotoClick: (photo: WorkspacePhoto) => void
}

export function WorkspaceSection({ photos, onPhotoClick }: WorkspaceSectionProps) {
  return (
    <section id="workspace" className="py-32 bg-[#FBFBFB] border-t border-[#6b757e]/5">
      <div className="container mx-auto px-8 max-w-screen-xl">
        
        {/* Centered Header Section */}
        <div className="flex flex-col items-center text-center space-y-10 mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase font-sans tracking-[0.8em] font-bold text-[#6b757e]/50"
          >
            Moja pracownia
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-playfair text-4xl md:text-5xl lg:text-5xl tracking-tighter text-[#6b757e] leading-tight max-w-5xl font-bold"
          >
            Każdy obraz to proces. Zapraszam do wglądu w moją codzienność – przestrzeń, w której eksperyment spotyka się z dyscypliną warsztatu.
          </motion.h2>
        </div>

        {/* Workspace Photo Grid - Showing all 5 photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {photos.map((photo, index) => (
             <motion.div
               key={photo.id}
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.8 }}
               onClick={() => onPhotoClick(photo)}
               className={cn(
                 "relative overflow-hidden group cursor-pointer bg-stone-100",
                 // Custom sizing for a more interesting grid with 5 items
                 index === 0 || index === 3 ? "aspect-[4/5]" : "aspect-square"
               )}
             >
                <Image
                  src={photo.imageUrl}
                  alt="Miejsce pracy"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-[#FBFBFB]/10 group-hover:bg-transparent transition-colors duration-500" />
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}

// Helper to keep the code clean
import { cn } from '@/lib/utils'
