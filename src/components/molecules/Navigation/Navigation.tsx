// src/components/molecules/Navigation/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Navigation() {
  const { scrollY } = (typeof window !== 'undefined') ? { scrollY: window.scrollY } : { scrollY: 0 };
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', updateHeader)
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  const links = [
    { name: 'Pracownia', href: '#workspace' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'O mnie', href: '#' },
    { name: 'Kontakt', href: '#' },
  ]

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-8 flex items-center justify-between",
        isScrolled ? "nav-glass border-b border-[#6b757e]/15 py-5 shadow-sm" : "bg-transparent py-10"
      )}
    >
      <motion.a 
        href="#"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col group cursor-pointer"
      >
        <span className="font-playfair text-xl md:text-2xl font-bold tracking-tighter uppercase text-[#6b757e]">
          Marcin Zalewski
        </span>
        <span className={cn(
          "text-[8px] uppercase tracking-[0.5em] transition-opacity duration-500 font-bold text-[#6b757e]/60",
          isScrolled ? "opacity-0 h-0" : "opacity-40"
        )}>
          Artysta Sztuk Wizualnych
        </span>
      </motion.a>

      <div className="hidden md:flex items-center gap-12">
        {links.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-[10px] uppercase font-sans tracking-[0.4em] transition-colors duration-300 antialiased font-bold text-[#6b757e] hover:text-[#8C3B79]"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <div className="md:w-[40px] flex justify-end" />
    </nav>
  )
}
