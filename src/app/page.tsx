// src/app/page.tsx
import { paintings, workspacePhotos } from '@/lib/data'
import { PortfolioTemplate } from '@/components/templates/PortfolioTemplate'

export default function HomePage() {
  // Ten komponent jest renderowany na serwerze!
  // Jest bardzo szybki, bo nie zawiera logiki klienckiej.
  // Po prostu pobiera dane i przekazuje je do template'u klienckiego.

  return (
    <PortfolioTemplate paintings={paintings} workspacePhotos={workspacePhotos} />
  )
}