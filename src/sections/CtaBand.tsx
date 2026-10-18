import { Phone } from 'lucide-react'
import { site } from '../data/site'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 md:py-20">
      <div className="grain pointer-events-none absolute inset-0 opacity-30" />
      <div className="section-shell relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400">Ready to move</p>
          <h2 className="heading-lg mt-3 text-white">
            Call ops — get a quote for truck, yard, or lift
          </h2>
          <p className="mt-3 text-white/70">{site.taglineSecondary}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          {site.phones.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cta-400 px-6 py-3.5 font-bold text-navy-950 transition hover:bg-cta-500"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {phone.display}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
