import { Anchor, Container, Truck, Warehouse } from 'lucide-react'
import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'
import { getServiceCardImage } from '../data/service-cards'
import { services } from '../data/site'
import { cn } from '../lib/cn'

const icons = {
  trucking: Truck,
  'sea-freight': Anchor,
  'container-safekeeping': Warehouse,
  'lift-off-out': Container,
} as const

export function Services() {
  return (
    <MotionSection id="services" className="scroll-mt-24 mesh-light py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Services"
          title="Four disciplines, one address"
          description="Each service links to on-site photos so you see how we work — not stock art."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.slug as keyof typeof icons] ?? Truck
            const thumb = getServiceCardImage(service.slug)

            return (
              <a
                key={service.slug}
                href={`#area-${service.slug}`}
                className="surface-card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(11,31,58,0.45)]"
              >
                <div className="relative aspect-[4/5] min-h-[240px] bg-navy-950/5 sm:min-h-[260px] lg:min-h-[280px]">
                  {thumb ? (
                    <img
                      src={thumb}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-navy-900/30">
                      <Icon className="h-12 w-12" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-navy-900">
                    <Icon className="h-3.5 w-3.5 text-royal-600" aria-hidden />
                    View gallery
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-navy-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/65">
                    {service.summary}
                  </p>
                  <span
                    className={cn(
                      'mt-4 text-sm font-semibold text-royal-600 transition group-hover:text-sky-500',
                    )}
                  >
                    See operations →
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}
