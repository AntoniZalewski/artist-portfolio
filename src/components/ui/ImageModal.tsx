// src/components/ui/ImageModal.tsx
'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Painting, WorkspacePhoto } from '@/lib/data'

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.35, duration: 0.4, ease: 'easeOut' },
  },
}

// POPRAWKA: Zamiast 'any', używamy precyzyjnych typów, co rozwiązuje błąd na Vercelu.
function isPainting(image: Painting | WorkspacePhoto | null): image is Painting {
  // Dodajemy sprawdzenie, czy obraz nie jest nullem, dla pełnego bezpieczeństwa.
  return image !== null && 'title' in image
}

export function ImageModal({ selectedImage, onClose, isWarmingUp }: ImageModalProps) {
  const useLayoutAnimation = selectedImage ? isPainting(selectedImage) : false;

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed inset-0 z-[60] flex items-center justify-center p-4",
            isWarmingUp && "opacity-0 pointer-events-none"
          )}
          onClick={onClose}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <div className="inline-flex flex-col">
              <motion.div
                layoutId={useLayoutAnimation ? `card-${selectedImage.id}` : undefined}
                initial={useLayoutAnimation ? {} : { scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-t-lg bg-card shadow-2xl overflow-hidden [transform:translateZ(0)] [backface-visibility:hidden] [will-change:transform,opacity]"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Image
                    src={selectedImage.imageUrl}
                    alt={isPainting(selectedImage) ? selectedImage.title : 'Zdjęcie z pracowni'}
                    width={selectedImage.width}
                    height={selectedImage.height}
                    className="object-contain w-auto h-auto max-w-[95vw] max-h-[90vh] rounded-t-lg"
                    priority
                  />
                </motion.div>
              </motion.div>
              
              {isPainting(selectedImage) && (
                <motion.div
                  className="bg-card p-4 rounded-b-lg shadow-2xl [will-change:transform,opacity]"
                  variants={descriptionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <h3 className="text-xl font-semibold text-card-foreground">{selectedImage.title}</h3>
                  <p className="text-sm text-muted-foreground">{selectedImage.description}</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface ImageModalProps {
  selectedImage: Painting | WorkspacePhoto | null
  onClose: () => void
  isWarmingUp: boolean
}