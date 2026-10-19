import { ArrowRight, Clock, Container, Forklift, Phone, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ImageLightbox, type LightboxImage } from '../components/ImageLightbox'
import { MotionSection } from '../components/MotionSection'
import { cyOfferBullets, cyOfferHeadline, cyOfferImages, cyOfferPromo } from '../data/cy-offers'
import { site } from '../data/site'

const icons = [Container, Clock, Forklift, Container]

export function CyOperationsSection() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const lightboxImages: LightboxImage[] = useMemo(
    () => cyOfferImages.map((img) => ({ src: img.src, alt: img.alt })),
    [],
  )

  return (
    <MotionSection id="cy-operations" className="scroll-mt-24 bg-navy-950 py-20 text-white md:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400">Services offer</p>
            <h2 className="mt-4 font-display text-2xl font-semibold uppercase leading-snug tracking-[0.03em] text-balance md:text-3xl">
              {cyOfferHeadline}
            </h2>
            <ul className="mt-8 space-y-4">
              {cyOfferBullets.map((item, i) => {
                const Icon = icons[i] ?? Container
                return (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/80 md:text-base">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cta-400" aria-hidden />
                    {item}
                  </li>
                )
              })}
            </ul>
            <div className="mt-8 rounded-xl border border-sky-400/25 bg-white/5 p-5 backdrop-blur-sm">
              <p className="flex gap-2 font-display text-base font-semibold uppercase leading-snug tracking-wide text-cta-400 md:text-lg">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                {cyOfferPromo}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta-400 px-5 py-3 text-sm font-bold text-navy-950 transition hover:bg-cta-500 md:text-base"
                >
                  Reserve your slot
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href={`tel:${site.phones[0].tel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 md:text-base"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  Or call {site.phones[0].display}
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {cyOfferImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => {
                  setIndex(i)
                  setOpen(true)
                }}
                className="group overflow-hidden rounded-xl ring-1 ring-white/15"
              >
                <div className="relative aspect-[3/4] min-h-[220px] bg-navy-900 sm:min-h-[260px] lg:min-h-[280px]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent px-3 pb-3 pt-12 text-left text-xs font-semibold text-white">
                    Enlarge
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox
        open={open}
        onOpenChange={setOpen}
        images={lightboxImages}
        index={index}
        onIndexChange={setIndex}
        title="24/7 CY operation"
      />
    </MotionSection>
  )
}
