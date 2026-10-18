import { galleryCategories } from './gallery.manifest'

/** First gallery index per service — avoids duplicate thumbs when folders overlap. */
const cardImageIndex: Record<string, number> = {
  trucking: 0,
  'sea-freight': 0,
  'container-safekeeping': 0,
  'lift-off-out': 2,
}

export function getServiceCardImage(slug: string): string | null {
  const category = galleryCategories.find((c) => c.slug === slug)
  if (!category?.images.length) return null
  const index = cardImageIndex[slug] ?? 0
  return category.images[index] ?? category.images[0]
}
