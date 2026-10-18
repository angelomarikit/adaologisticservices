import { site } from '../data/site'

const items = [
  { label: 'Core services', value: '4', hint: 'Truck · Sea · Yard · Lift' },
  { label: 'Hotlines', value: '2', hint: 'Direct operations line' },
  { label: 'DTI BN no.', value: site.businessNameRegistration.number, hint: 'Registered business name' },
  { label: 'Base', value: 'NLEX', hint: 'Marilao southbound service road' },
]

export function StatsStrip() {
  return (
    <section className="pb-2 pt-2 md:pb-4" aria-label="Company highlights">
      <div className="section-shell">
        <div className="surface-card grid grid-cols-2 divide-x divide-y divide-navy-900/8 md:grid-cols-4 md:divide-y-0">
          {items.map((item) => (
            <div key={item.label} className="px-5 py-6 md:px-6 md:py-7">
              <p className="text-xs font-bold uppercase tracking-wide text-navy-900/45">{item.label}</p>
              <p className="mt-2 font-display text-3xl font-semibold tracking-wide text-navy-900 md:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-navy-900/60">{item.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
