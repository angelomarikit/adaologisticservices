import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'
import { processSteps } from '../data/highlights'

export function ProcessSection() {
  return (
    <MotionSection id="process" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="How we work"
            title="Clear steps from first call to container release"
            description="Whether you need a single haul or yard time plus lift, the flow stays the same — scoped, scheduled, executed, closed."
          />
          <ol className="space-y-4">
            {processSteps.map((item) => (
              <li
                key={item.step}
                className="surface-card flex gap-5 p-5 md:p-6"
              >
                <span className="font-display text-2xl font-extrabold text-royal-600/80">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/65">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </MotionSection>
  )
}
