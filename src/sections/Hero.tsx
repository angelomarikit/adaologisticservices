import { ArrowRight, Phone } from 'lucide-react'
import { bannerMeta } from '../data/banner'
import { site } from '../data/site'

export function Hero() {
  return (
    <>
      <section className="mesh-light border-b border-navy-900/8 pt-[4.75rem] md:pt-[5.25rem]">
        <div className="section-shell py-6 md:py-10">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl bg-navy-950 shadow-[0_20px_50px_-28px_rgba(11,31,58,0.45)] ring-1 ring-navy-900/10">
              <div className="flex justify-center bg-navy-950 p-1 sm:p-2">
                <img
                  src={`${bannerMeta.src}?v=${bannerMeta.width}x${bannerMeta.height}`}
                  alt={`${site.name} — ${site.taglinePrimary}. ${site.taglineSecondary}`}
                  width={bannerMeta.width}
                  height={bannerMeta.height}
                  fetchPriority="high"
                  decoding="async"
                  draggable={false}
                  className="mx-auto block h-auto w-auto max-w-full select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy-900/8 bg-white py-5 md:py-7">
        <div className="section-shell">
          <p className="text-center text-sm leading-relaxed text-navy-900/75 md:text-base">
            {site.address}
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
            {site.phones.map((phone) => (
              <a
                key={phone.tel}
                href={`tel:${phone.tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta-400 px-4 py-3 text-sm font-bold text-navy-950 transition hover:bg-cta-500 sm:min-w-[200px] md:text-base"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                {phone.display}
              </a>
            ))}
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-900/12 bg-[#f4f6f9] px-4 py-3 text-sm font-semibold text-navy-900 sm:min-w-[140px]"
            >
              About us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
