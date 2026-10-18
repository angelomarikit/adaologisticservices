import { Phone } from 'lucide-react'
import { site } from '../data/site'

export function StickyCallBar() {
  return (
    <div className="sticky-call-bar fixed inset-x-0 bottom-0 z-40 border-t border-navy-900/10 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(11,31,58,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={`tel:${site.phones[0].tel}`}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-cta-400 px-3 py-3 text-sm font-bold text-navy-950"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call {site.phones[0].display}
        </a>
        <a
          href="#contact"
          className="inline-flex flex-1 items-center justify-center rounded-sm border border-navy-900/15 px-3 py-3 text-sm font-semibold text-navy-900"
        >
          Contact
        </a>
      </div>
    </div>
  )
}
