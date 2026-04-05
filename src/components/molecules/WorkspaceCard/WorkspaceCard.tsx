// src/components/molecules/WorkspaceCard/WorkspaceCard.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { WorkspacePhoto } from '@/lib/data'

interface WorkspaceCardProps {
  photo: WorkspacePhoto
  onClick: (photo: WorkspacePhoto) => void
}

export function WorkspaceCard({ photo, onClick }: WorkspaceCardProps) {
  return (
    <div
      onClick={() => onClick(photo)}
      className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-muted"
    >
      <motion.div
        layoutId={`photo-${photo.id}`}
        className="w-full h-full"
      >
        <Image
          src={photo.imageUrl}
          alt={`Pracownia Artysty ${photo.id}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-1000 ease-out group-hover:scale-105 group-hover:brightness-110"
        />
      </motion.div>
      
      {/* Decorative frame overlay */}
      <div className="absolute inset-0 border-[0px] border-white/0 group-hover:inset-4 group-hover:border-[1px] group-hover:border-white/20 transition-all duration-700 ease-in-out pointer-events-none" />
      
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
    </div>
  )
}
