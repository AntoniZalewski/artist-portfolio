// src/components/features/PortfolioView.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Phone, Mail, Facebook, Instagram, Sun, Moon, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ImageModal } from '../ui/ImageModal'
import { LoadingScreen } from '../ui/LoadingScreen'
import { type Painting, type WorkspacePhoto } from '@/lib/data'

interface PortfolioViewProps {
  paintings: Painting[]
  workspacePhotos: WorkspacePhoto[]
}

const preloadImages = (sources: string[]) => {
  const promises = sources.map((src) => {
    return new Promise<string>((resolve) => {
      const img = new window.Image()
      img.src = src
      img.onload = () => {
        img.decode()
          .then(() => resolve(src))
          .catch(() => {
            console.warn(`Ostrzeżenie: Nie udało się zdekodować obrazu (ale został załadowany): ${src}`)
            resolve(src)
          })
      }
      img.onerror = () => {
        console.error(`Błąd krytyczny: Nie udało się załadować pliku obrazu: ${src}`)
        resolve(src)
      }
    })
  })
  return Promise.all(promises)
}

export function PortfolioView({ paintings, workspacePhotos }: PortfolioViewProps) {
  const [isReady, setIsReady] = useState(false)
  const [isWarmedUp, setIsWarmedUp] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [selectedImage, setSelectedImage] = useState<Painting | WorkspacePhoto | null>(null)

  useEffect(() => {
    const allImageUrls = ["/profilowe01.jpg", ...paintings.map((p) => p.imageUrl), ...workspacePhotos.map((w) => w.imageUrl)];
    preloadImages(allImageUrls).then(() => {
      setIsReady(true)
    })
  }, [paintings, workspacePhotos])

  useEffect(() => {
    if (isReady && !isWarmedUp) {
      if (paintings.length > 0) {
        setSelectedImage(paintings[0])
      }
      
      const timer = setTimeout(() => {
        setSelectedImage(null)
        setIsWarmedUp(true)
      }, 50)

      return () => clearTimeout(timer)
    }
  }, [isReady, isWarmedUp, paintings])

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode])

  return (
    <>
      <AnimatePresence>
        {!isReady && <LoadingScreen />}
      </AnimatePresence>
      
      <motion.div
        animate={{ opacity: isWarmedUp ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col"
      >
        <section className="relative h-screen flex flex-col justify-center items-center text-white text-center">
            <div className="absolute inset-0 z-0">
              <Image src="/profilowe01.jpg" alt="Pracownia artysty" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 p-4 flex flex-col justify-center items-center h-full">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold">
                Marcin Zalewski
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
                Jestem absolwentem Wydziału Rzeźby Akademii Sztuk Pięknych w Warszawie. Zajmuję się malarstwem, rzeźbą, rysunkiem oraz scenografią.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-8 flex flex-wrap justify-center gap-6">
                 <a href="tel:608693228" className="hover:text-gray-300 transition-colors"><Phone size={24} /></a>
                 <a href="mailto:marcinzalewskimail@wp.pl" className="hover:text-gray-300 transition-colors"><Mail size={24} /></a>
                 <a href="https://www.facebook.com/marcinzalewskiart" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors"><Facebook size={24} /></a>
                 <a href="https://www.instagram.com/marcin_zalewski_art/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors"><Instagram size={24} /></a>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="absolute bottom-10">
                <ChevronDown size={32} className="animate-bounce" />
              </motion.div>
            </div>
          </section>

          <button
            className="fixed bottom-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-card text-card-foreground rounded-full shadow-lg hover:bg-muted"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Moja Pracownia</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workspacePhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    onClick={() => setSelectedImage(photo)}
                    className="relative aspect-video overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image src={photo.imageUrl} alt={`Workspace photo ${photo.id}`} fill className="object-cover transition-transform duration-300 hover:scale-110"/>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <blockquote className="text-xl italic font-semibold text-center max-w-4xl mx-auto">
                  <p className="mb-4">"Malarstwo figuratywne obok abstrakcji geometrycznej, teraźniejszość i przeszłość, współegzystują równorzędnie w przekazie nowej serii obrazów Marcina Zalewskiego. Są to prace, w których elementy mitologiczne obecne są równie mocno jak wątki tematyczne, nawiązujące do historii sztuki. Jednak artysta nie narzuca żadnych ograniczeń w procesie rozszyfrowywania jego obrazów, wypełnionych wzajemnie nakładającymi się postaciami, płaszczyznami kolorów i figurami geometrycznymi, pozostawiając w ten sposób widzowi przestrzeń dla indywidualnego odbioru różnych kompozycji i odszukiwania w sobie indywidualnych linków, wdzięcznie spajających prezentowane wątki."</p>
                  <footer className="text-base text-muted-foreground">Alberto Dambruoso (tłumaczenie: Barbara Czechmeszyńska - Skowron)</footer>
                </blockquote>
              </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Galeria Obrazów</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {paintings.map((painting) => (
                  <div key={painting.id} className="group cursor-pointer" onClick={() => setSelectedImage(painting)}>
                    <motion.div layoutId={`card-${painting.id}`} className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg bg-muted">
                      <Image src={painting.imageUrl} alt={painting.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110"/>
                    </motion.div>
                    <h3 className="mt-4 text-xl font-semibold">{painting.title}</h3>
                    <p className="text-sm text-muted-foreground">{painting.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      )

      {isReady && (
        <ImageModal
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
          isWarmingUp={!isWarmedUp}
        />
      )}
    </>
  )
}