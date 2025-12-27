import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outfit Builder - Biker Shop Searcher',
  description:
    'Build your perfect motorcycle gear outfit with our intelligent outfit builder. Get curated recommendations for helmets, jackets, gloves, and boots based on your riding style, budget, and preferences.',
  keywords: [
    'motorcycle gear',
    'outfit builder',
    'motorcycle helmet',
    'riding gear',
    'motorcycle jacket',
    'motorcycle gloves',
    'motorcycle boots',
    'SNELL certified',
    'DOT approved',
    'CE certified',
    'riding outfit',
  ],
  openGraph: {
    title: 'Outfit Builder - Biker Shop Searcher',
    description:
      'Build your perfect motorcycle gear outfit with curated recommendations based on your riding style and budget.',
    type: 'website',
    siteName: 'Biker Shop Searcher',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outfit Builder - Biker Shop Searcher',
    description:
      'Build your perfect motorcycle gear outfit with curated recommendations based on your riding style and budget.',
  },
}

export default function OutfitBuilderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
