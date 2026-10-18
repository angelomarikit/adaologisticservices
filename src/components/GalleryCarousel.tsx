import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '../lib/cn'

type GalleryCarouselProps = {
  images: string[]
  altPrefix: string
  onImageClick: (index: number) => void
}

export function GalleryCarousel({
  images,
  altPrefix,
  onImageClick,
}: GalleryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [Autoplay({ delay: 5500, stopOnInteraction: true, stopOnMouseEnter: true })],
  )
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  if (images.length === 0) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-xl border border-dashed border-navy-900/15 bg-white text-sm text-navy-900/60">
        Photos coming soon for this area.
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex touch-pan-y gap-4 md:gap-5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => onImageClick(i)}
              className="group relative min-w-0 shrink-0 basis-[min(100%,22rem)] sm:basis-[min(85%,26rem)] md:basis-[min(72%,28rem)] lg:basis-[min(65%,32rem)]"
            >
              <span className="sr-only">
                View {altPrefix} image {i + 1}
              </span>
              <div className="relative aspect-[3/4] min-h-[300px] overflow-hidden rounded-xl bg-navy-900/5 ring-1 ring-navy-900/10 sm:min-h-[340px] md:min-h-[400px] lg:min-h-[440px]">
                <img
                  src={src}
                  alt={`${altPrefix} — ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-navy-950/60 to-transparent p-4 pt-16">
                  <span className="text-sm font-semibold text-white">Enlarge</span>
                  <span className="text-sm text-white/80">
                    {i + 1} / {images.length}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              'h-1.5 rounded-full transition-all',
              i === selected ? 'w-8 bg-royal-600' : 'w-3 bg-navy-900/20 hover:bg-navy-900/35',
            )}
          />
        ))}
      </div>
    </div>
  )
}
