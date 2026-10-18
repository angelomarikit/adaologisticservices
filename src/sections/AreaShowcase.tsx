import { useMemo, useState } from 'react'
import { AreaSubnav } from '../components/AreaSubnav'
import { GalleryCarousel } from '../components/GalleryCarousel'
import { ImageLightbox, type LightboxImage } from '../components/ImageLightbox'
import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'
import { galleryCategories } from '../data/gallery.manifest'
import { cn } from '../lib/cn'

export function AreaShowcase() {
  const [open, setOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const lightboxImages: LightboxImage[] = useMemo(() => {
    const cat = galleryCategories[activeCategory]
    if (!cat) return []
    return cat.images.map((src, i) => ({
      src,
      alt: `${cat.title} — ${i + 1}`,
    }))
  }, [activeCategory])

  const openLightbox = (categoryIndex: number, imageIndex: number) => {
    setActiveCategory(categoryIndex)
    setActiveIndex(imageIndex)
    setOpen(true)
  }

  return (
    <section id="areas" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Operations gallery"
          title="Walk the yard with us — by service area"
          description="Swipe through real job photos — tap any slide to open the full image in a lightbox."
          align="center"
        />

        <div className="mt-12">
          <AreaSubnav />
        </div>

        <div className="mt-16 space-y-20 md:space-y-24">
          {galleryCategories.map((category, categoryIndex) => {
            const reversed = categoryIndex % 2 === 1
            return (
              <MotionSection
                key={category.slug}
                id={`area-${category.slug}`}
                className="scroll-mt-40"
              >
                <div
                  className={cn(
                    'grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:gap-12 xl:gap-14',
                    reversed && 'lg:[&>*:first-child]:order-2',
                  )}
                >
                  <div className={cn(reversed ? 'lg:pl-4' : 'lg:pr-4')}>
                    <p className="font-display text-sm font-bold text-royal-600">
                      {String(categoryIndex + 1).padStart(2, '0')}
                    </p>
                    <h3 className="heading-md mt-2 normal-case text-navy-900">
                      {category.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-navy-900/70">{category.description}</p>
                    <p className="mt-4 text-sm font-medium text-navy-900/50">
                      {category.images.length} photos on file
                    </p>
                  </div>
                  <GalleryCarousel
                    images={category.images}
                    altPrefix={category.title}
                    onImageClick={(imageIndex) => openLightbox(categoryIndex, imageIndex)}
                  />
                </div>
              </MotionSection>
            )
          })}
        </div>
      </div>

      <ImageLightbox
        open={open}
        onOpenChange={setOpen}
        images={lightboxImages}
        index={activeIndex}
        onIndexChange={setActiveIndex}
        title={galleryCategories[activeCategory]?.title}
      />
    </section>
  )
}
