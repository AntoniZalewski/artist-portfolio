// src/components/templates/PortfolioTemplate/PortfolioTemplate.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { Navigation } from '@/components/molecules/Navigation'
import { HeroSection } from '@/components/organisms/HeroSection'
import { WorkspaceSection } from '@/components/organisms/WorkspaceSection'
import { QuoteSection } from '@/components/organisms/QuoteSection'
import { GallerySection } from '@/components/organisms/GallerySection'
import { ImageModal } from '@/components/organisms/ImageModal'
import { type Painting, type WorkspacePhoto } from '@/lib/data'

interface PortfolioTemplateProps {
  paintings: Painting[]
  workspacePhotos: WorkspacePhoto[]
}

export function PortfolioTemplate({ paintings, workspacePhotos }: PortfolioTemplateProps) {
  const [selectedPool, setSelectedPool] = useState<(Painting | WorkspacePhoto)[] | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)

  const openModal = (pool: (Painting | WorkspacePhoto)[], index: number) => {
    setSelectedPool(pool)
    setSelectedIndex(index)
  }

  const closeModal = () => {
    setSelectedPool(null)
    setSelectedIndex(-1)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen flex flex-col bg-[#FBFBFB] font-sans selection:bg-[#8C3B79] selection:text-white"
      >
        <Navigation />
        
        <HeroSection />

        <main>
            <WorkspaceSection
              photos={workspacePhotos}
              onPhotoClick={(photo) => {
                const idx = workspacePhotos.findIndex(p => p.id === photo.id)
                openModal(workspacePhotos, idx)
              }}
            />

            <QuoteSection />

            <GallerySection
              paintings={paintings}
              onPaintingClick={(painting) => {
                const idx = paintings.findIndex(p => p.id === painting.id)
                openModal(paintings, idx)
              }}
            />
        </main>
        
        <footer className="py-16 md:py-24 lg:py-32 px-6 md:px-8 border-t border-[#6b757e]/10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 bg-[#FBFBFB]">
            <div className="flex flex-col space-y-6">
               <span className="font-playfair text-3xl font-bold uppercase tracking-tighter text-[#6b757e]">
                  Marcin Zalewski
               </span>
               <p className="text-[10px] uppercase font-sans tracking-[0.5em] text-[#6b757e]/40 max-w-sm font-bold">
                  Kolekcja artystyczna — Wszelkie prawa zastrzeżone. © 2024
               </p>
            </div>
            
            <div className="grid grid-cols-2 gap-16 sm:gap-24">
                <div className="flex flex-col space-y-4">
                   <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-[#6b757e]/60">Kontakt</span>
                   <a href="mailto:kontakt@zalewski.art" className="text-sm font-sans tracking-tight text-[#6b757e] hover:text-[#8C3B79] transition-colors font-medium">kontakt@zalewski.art</a>
                </div>
                <div className="flex flex-col space-y-4">
                   <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-[#6b757e]/60">Obserwuj</span>
                   <a href="#" className="text-sm font-sans tracking-tight text-[#6b757e] hover:text-[#8C3B79] transition-colors font-medium">Instagram</a>
                   <a href="#" className="text-sm font-sans tracking-tight text-[#6b757e] hover:text-[#8C3B79] transition-colors font-medium">Facebook</a>
                </div>
            </div>
        </footer>
      </motion.div>

      <ImageModal
        pool={selectedPool}
        currentIndex={selectedIndex}
        onClose={closeModal}
        setIndex={setSelectedIndex}
      />
    </>
  )
}
