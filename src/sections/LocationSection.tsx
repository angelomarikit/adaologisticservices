import { MapPin, Navigation } from 'lucide-react'
import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'
import { site } from '../data/site'

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`

export function LocationSection() {
  return (
    <MotionSection id="location" className="scroll-mt-24 mesh-light py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeader
              eyebrow="Location"
              title="Minutes from Marilao Exit — southbound service road"
              description="Positioned for NLEX northbound and southbound traffic, with yard access for staging trucks and containers before the next leg."
            />
            <div className="surface-card mt-8 space-y-4 p-6">
              <p className="flex gap-3 text-navy-900/80">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-royal-600" aria-hidden />
                {site.address}
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-royal-600 hover:text-navy-900"
              >
                <Navigation className="h-4 w-4" aria-hidden />
                Open in Google Maps
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-navy-900/10">
            <iframe
              title="ADAO Logistic Services map"
              src={mapEmbedSrc}
              className="aspect-[4/3] min-h-[280px] w-full bg-slate-200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
