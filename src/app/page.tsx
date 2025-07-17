// src/app/page.tsx
import { paintings, workspacePhotos } from '@/lib/data'
import { PortfolioView } from '@/components/features/PortfolioView'

export default function HomePage() {
  // Ten komponent jest renderowany na serwerze!
  // Jest bardzo szybki, bo nie zawiera logiki klienckiej.
  // Po prostu pobiera dane i przekazuje je do komponentu klienckiego.
  
  return (
    <PortfolioView paintings={paintings} workspacePhotos={workspacePhotos} />
  )
}