import * as Dialog from '@radix-ui/react-dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect } from 'react'
import { cn } from '../lib/cn'

export type LightboxImage = {
  src: string
  alt: string
  rotate?: 0 | 90 | 180 | 270
}

type ImageLightboxProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  images: LightboxImage[]
  index: number
  onIndexChange: (index: number) => void
  title?: string
}

export function ImageLightbox({
  open,
  onOpenChange,
  images,
  index,
  onIndexChange,
  title,
}: ImageLightboxProps) {
  const current = images[index]
  const hasMultiple = images.length > 1

  const goPrev = useCallback(() => {
    if (!hasMultiple) return
    onIndexChange((index - 1 + images.length) % images.length)
  }, [hasMultiple, images.length, index, onIndexChange])

  const goNext = useCallback(() => {
    if (!hasMultiple) return
    onIndexChange((index + 1) % images.length)
  }, [hasMultiple, images.length, index, onIndexChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, goPrev, goNext])

  if (!current) return null

  const rotated = current.rotate === 90 || current.rotate === 270

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/92 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col outline-none" aria-describedby={undefined}>
          <div className="flex items-center justify-between gap-4 px-4 py-3 text-white md:px-8">
            <Dialog.Title className="font-display text-sm font-semibold tracking-wide md:text-base">
              {title ?? 'Gallery'}
            </Dialog.Title>
            <Dialog.Close
              className="rounded-lg border border-white/15 p-2 text-white/90 transition hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          <div className="relative flex flex-1 items-center justify-center bg-navy-950/40 px-4 pb-8 md:px-12">
            {hasMultiple && (
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-lg border border-white/20 bg-navy-900/70 p-2 text-white backdrop-blur hover:bg-navy-800/80 md:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            <div
              className={cn(
                'flex max-h-[min(78vh,820px)] max-w-[min(96vw,1100px)] items-center justify-center rounded-lg bg-[#0a1628] p-2 ring-1 ring-white/10',
                rotated && 'aspect-[3/4] max-h-[min(72vh,760px)]',
              )}
            >
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                className="max-h-[min(74vh,800px)] max-w-full object-contain"
                style={{
                  transform: current.rotate ? `rotate(${current.rotate}deg)` : undefined,
                }}
              />
            </div>

            {hasMultiple && (
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-lg border border-white/20 bg-navy-900/70 p-2 text-white backdrop-blur hover:bg-navy-800/80 md:right-6"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          {hasMultiple && (
            <p className="pb-6 text-center text-sm text-white/70">
              {index + 1} / {images.length}
            </p>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
