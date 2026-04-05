// src/components/organisms/ImageModal/ImageModal.tsx
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { X, Loader2, Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Painting, WorkspacePhoto } from '@/lib/data'

function isPainting(image: Painting | WorkspacePhoto | null): image is Painting {
  return image !== null && 'title' in image
}

interface ImageModalProps {
  pool: (Painting | WorkspacePhoto)[] | null
  currentIndex: number
  onClose: () => void
  setIndex: (index: number) => void
}

export function ImageModal({ pool, currentIndex, onClose, setIndex }: ImageModalProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showInfo, setShowInfo] = useState(true)
  const [direction, setDirection] = useState(0)
  const lastWheelTime = useRef(0)

  const selectedImage = pool && currentIndex >= 0 ? pool[currentIndex] : null

  const handleNext = useCallback(() => {
    if (!pool) return
    setDirection(1)
    setIndex((currentIndex + 1) % pool.length)
  }, [pool, currentIndex, setIndex])

  const handlePrev = useCallback(() => {
    if (!pool) return
    setDirection(-1)
    setIndex((currentIndex - 1 + pool.length) % pool.length)
  }, [pool, currentIndex, setIndex])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 100
    if (info.offset.x < -threshold) handleNext()
    else if (info.offset.x > threshold) handlePrev()
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (now - lastWheelTime.current < 800) return
      if (Math.abs(e.deltaX) > 40) {
        if (e.deltaX > 0) handleNext()
        else handlePrev()
        lastWheelTime.current = now
      }
    }
    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [handleNext, handlePrev])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrev, onClose])

  useEffect(() => {
    if (selectedImage) {
        setIsLoading(true)
        setShowInfo(isPainting(selectedImage))
    }
  }, [selectedImage])

  const highQualityUrl = selectedImage?.imageUrl.replace('.webp', '.jpg')

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      filter: 'blur(20px)'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      filter: 'blur(20px)'
    })
  }

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#FBFBFB] overflow-hidden select-none"
          onClick={onClose}
        >
          {/* Top Controls - Floating */}
          <div className="fixed top-6 right-6 z-[300] flex items-center gap-4">
             {isPainting(selectedImage) && (
               <button
                  onClick={(e) => { e.stopPropagation(); setShowInfo(!showInfo); }}
                  className={cn(
                      "p-3 rounded-full transition-all duration-300 shadow-xl",
                      !showInfo ? "bg-[#8C3B79] text-white" : "bg-white text-[#6b757e] border border-[#6b757e]/10 hover:bg-stone-50"
                  )}
                  title={showInfo ? "Widok pełnoekranowy" : "Pokaż opis"}
               >
                  {showInfo ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
               </button>
             )}
             
             <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="p-3 text-[#6b757e] hover:text-[#8C3B79] bg-white border border-[#6b757e]/10 rounded-full transition-all duration-300 shadow-xl"
             >
                <X size={24} />
             </button>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden lg:block">
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="fixed left-6 top-1/2 -translate-y-1/2 z-[250] p-4 text-[#6b757e]/30 hover:text-[#8C3B79] transition-all duration-300 pointer-events-auto"
            >
              <motion.div whileHover={{ x: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <ChevronLeft size={64} strokeWidth={0.5} />
              </motion.div>
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-[250] p-4 text-[#6b757e]/30 hover:text-[#8C3B79] transition-all duration-300 pointer-events-auto"
            >
              <motion.div whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <ChevronRight size={64} strokeWidth={0.5} />
              </motion.div>
            </button>
          </div>

          {/* Smooth Transition Main Container */}
          <div 
            className="w-full h-full flex flex-row items-stretch"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Area - Maximum and Unconstrained on Full Screen */}
            <div className={cn(
                "relative flex-1 flex items-center justify-center transition-all duration-700 ease-in-out",
                showInfo && isPainting(selectedImage) ? "p-8 lg:p-16 lg:mr-0" : "p-0"
            )}>
               <AnimatePresence initial={false} custom={direction} mode="wait">
                 <motion.div
                   key={currentIndex}
                   custom={direction}
                   variants={variants}
                   initial="enter"
                   animate="center"
                   exit="exit"
                   transition={{
                     x: { type: "spring", stiffness: 200, damping: 30 },
                     opacity: { duration: 0.4 },
                     filter: { duration: 0.4 }
                   }}
                   drag="x"
                   dragConstraints={{ left: 0, right: 0 }}
                   dragElastic={0.5}
                   onDragEnd={onDragEnd}
                   className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing w-full h-full"
                 >
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                         <Loader2 className="animate-spin text-[#6b757e]/20" size={48} />
                      </div>
                    )}
                    <Image
                      src={highQualityUrl || ''}
                      alt={isPainting(selectedImage) ? selectedImage.title : 'Art'}
                      width={selectedImage.width}
                      height={selectedImage.height}
                      className={cn(
                        "object-contain w-auto h-auto transition-all duration-700 select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]",
                        showInfo && isPainting(selectedImage) ? "max-w-full max-h-[85vh]" : "max-w-full max-h-screen",
                        isLoading ? "opacity-0 blur-xl" : "opacity-100 blur-0"
                      )}
                      onLoad={() => setIsLoading(false)}
                      priority
                    />
                 </motion.div>
               </AnimatePresence>
            </div>

            {/* Information Panel */}
            <AnimatePresence>
              {showInfo && isPainting(selectedImage) && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 380, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                  className="hidden lg:flex flex-col justify-center px-12 bg-white/50 border-l border-[#6b757e]/5 relative z-50 shrink-0"
                >
                   <div className="space-y-12 min-w-[280px]">
                      <div className="space-y-4">
                         <span className="text-[10px] uppercase font-sans tracking-[0.8em] font-bold text-[#6b757e]/40 block">
                            Katalog Sztuki
                         </span>
                         <h3 className="text-4xl lg:text-5xl font-playfair tracking-tighter font-bold text-[#6b757e] leading-[1.1]">
                            {selectedImage.title}
                         </h3>
                         <div className="h-1 w-10 bg-[#8C3B79] mt-6" />
                      </div>

                      <p className="max-w-xs text-stone-500 font-sans font-light text-base leading-relaxed tracking-wide">
                        {selectedImage.description}
                      </p>

                      <div className="pt-8 space-y-8">
                         <div className="text-[10px] font-sans text-stone-400 space-y-1">
                            <p>Technika mieszana na płótnie</p>
                            <p>{selectedImage.width} x {selectedImage.height} cm</p>
                         </div>
                         <button className="btn-gallery w-full text-center py-4">
                            Zapytaj o detale
                         </button>
                      </div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Footer Overlay */}
            <AnimatePresence>
               {showInfo && isPainting(selectedImage) && (
                 <motion.div
                   initial={{ y: "100%" }}
                   animate={{ y: 0 }}
                   exit={{ y: "100%" }}
                   className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl p-8 z-[350] rounded-t-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)]"
                 >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                         <h3 className="text-2xl font-playfair font-bold text-[#6b757e]">{selectedImage.title}</h3>
                         <button onClick={() => setShowInfo(false)} className="text-[#6b757e]/40"><Minimize2 size={24}/></button>
                      </div>
                      <p className="text-sm text-stone-500">{selectedImage.description}</p>
                      <button className="w-full py-4 bg-[#8C3B79] text-white rounded-lg text-sm font-bold uppercase tracking-widest">
                         Kontakt
                      </button>
                    </div>
                 </motion.div>
               )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
