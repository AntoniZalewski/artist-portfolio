import { useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ImageModalProps {
  imageUrl: string
  title?: string
  description?: string
  onClose: () => void
}

export function ImageModal({ imageUrl, title, description, onClose }: ImageModalProps) {
  // Zamknięcie na klawisz Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg overflow-hidden max-h-[90%] w-full max-w-5xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Guzik zamknięcia */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10"
        >
          <X size={24} />
        </button>

        {/* Obraz */}
        <div className="flex justify-center items-center bg-white">
          <Image
            src={imageUrl}
            alt={title || 'Image'}
            width={1920}
            height={1080}
            className="object-contain max-h-[75vh] w-full"
            priority
          />
        </div>

        {/* Opis */}
        {(title || description) && (
          <div className="p-4 bg-white max-h-[20vh] overflow-y-auto">
            {title && <h3 className="text-2xl font-semibold text-center mb-2">{title}</h3>}
            {description && <p className="text-sm text-gray-600 text-center">{description}</p>}
          </div>
        )}
      </div>
    </div>
  )
}
