// src/components/molecules/SocialLinks/SocialLinks.tsx
'use client'

import { Phone, Mail, Facebook, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import { SocialLink } from '@/components/atoms/SocialLink'

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="mt-8 flex flex-wrap justify-center gap-6"
    >
      <SocialLink href="tel:608693228" icon={Phone} label="Zadzwoń" />
      <SocialLink href="mailto:marcinzalewskimail@wp.pl" icon={Mail} label="Napisz email" />
      <SocialLink
        href="https://www.facebook.com/marcinzalewskiart"
        icon={Facebook}
        label="Facebook"
        external
      />
      <SocialLink
        href="https://www.instagram.com/marcin_zalewski_art/"
        icon={Instagram}
        label="Instagram"
        external
      />
    </motion.div>
  )
}
