import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'
import { pillars } from '../data/highlights'

export function WhyAdao() {
  return (
    <MotionSection className="bg-navy-950 py-20 text-white md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Why ADAO"
          title="Built for shippers who need the yard, not just a phone tree"
          description="We combine corridor access, equipment on site, and accountable handling — the details that keep cargo moving on schedule."
          dark
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="rounded-xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <span className="font-display text-sm font-bold text-cta-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/72">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
