import { useMemo, useState } from 'react'
import type { LegalDocument } from '../data/legal.manifest'
import { cn } from '../lib/cn'
import { ImageLightbox, type LightboxImage } from './ImageLightbox'

type LegalGridProps = {
  documents: LegalDocument[]
}

export function LegalGrid({ documents }: LegalGridProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const lightboxImages: LightboxImage[] = useMemo(
    () =>
      documents.map((doc) => ({
        src: doc.src,
        alt: doc.alt,
        rotate: doc.rotate,
      })),
    [documents],
  )

  if (documents.length === 0) {
    return (
      <p className="text-sm text-navy-900/65">
        Compliance documents will be posted here. Contact us if you need copies.
      </p>
    )
  }

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc, i) => (
          <button
            key={doc.src}
            type="button"
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            className="surface-card group overflow-hidden text-left transition hover:-translate-y-0.5"
          >
            <div
              className={cn(
                'flex items-center justify-center bg-[#eef1f5] p-3',
                doc.layout === 'landscape' ? 'min-h-[200px]' : 'min-h-[280px]',
              )}
            >
              <img
                src={doc.src}
                alt={doc.alt}
                loading="lazy"
                className="mx-auto block h-auto w-auto max-h-[min(52vh,420px)] max-w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                style={{
                  transform: doc.rotate ? `rotate(${doc.rotate}deg)` : undefined,
                }}
              />
            </div>
            <div className="border-t border-navy-900/8 px-4 py-3">
              <p className="text-sm font-semibold text-navy-900">{doc.title}</p>
              <p className="mt-1 text-xs text-royal-600">Tap to enlarge</p>
            </div>
          </button>
        ))}
      </div>

      <ImageLightbox
        open={open}
        onOpenChange={setOpen}
        images={lightboxImages}
        index={index}
        onIndexChange={setIndex}
        title={documents[index]?.title ?? 'Permits & registration'}
      />
    </>
  )
}
