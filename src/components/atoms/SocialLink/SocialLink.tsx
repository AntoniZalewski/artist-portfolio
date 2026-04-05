// src/components/atoms/SocialLink/SocialLink.tsx
import type { LucideIcon } from 'lucide-react'

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
  external?: boolean
}

export function SocialLink({ href, icon: Icon, label, external = false }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="hover:text-gray-300 transition-colors"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Icon size={24} />
    </a>
  )
}
