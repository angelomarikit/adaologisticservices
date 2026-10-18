import { CheckCircle2 } from 'lucide-react'
import { MotionSection } from '../components/MotionSection'
import { PhotoFrame } from '../components/PhotoFrame'
import { SectionHeader } from '../components/SectionHeader'
import { showcasePhotos } from '../data/highlights'
import { site } from '../data/site'

const points = [
  'Yard and office along the NLEX Marilao southbound service road',
  'Registered business name with DTI — transparent compliance on file',
  'Photos from real operations: fleet, lifts, and facility areas',
  'Dual hotlines for scheduling, quotes, and status updates',
]

export function AboutSection() {
  return (
    <MotionSection id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionHeader
              eyebrow="Who we are"
              title="Ground logistics at Marilao — not a broker on paper"
              description={`${site.businessNameRegistration.registeredName} operates where your containers move: on the highway, in the yard, and at the lift. We keep communication direct and the work visible.`}
            />
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-navy-900/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-royal-600" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <PhotoFrame
                src={showcasePhotos.about}
                alt="Container safekeeping at ADAO yard"
                aspect="wide"
                className="shadow-lg"
              />
              <div className="surface-card absolute -bottom-6 -left-2 max-w-[240px] p-4 md:-left-6">
                <p className="text-xs font-bold uppercase tracking-wide text-royal-600">Location</p>
                <p className="mt-2 text-sm leading-snug text-navy-900/75">{site.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
