import { useEffect, useState } from 'react'
import { galleryCategories } from '../data/gallery.manifest'
import { cn } from '../lib/cn'

export function AreaSubnav() {
  const [active, setActive] = useState<string | null>(galleryCategories[0]?.slug ?? null)

  useEffect(() => {
    const ids = galleryCategories.map((c) => `area-${c.slug}`)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          setActive(visible.target.id.replace('area-', ''))
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.2, 0.45] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const shortLabel = (title: string) => {
    if (title.includes('Facility')) return 'Facility'
    if (title.includes('Sea')) return 'Sea freight'
    if (title.includes('Container')) return 'Safekeeping'
    if (title.includes('Lift')) return 'Lift off/out'
    if (title.includes('Trucking')) return 'Trucking'
    return title.split(' ')[0]
  }

  return (
    <nav
      aria-label="Gallery categories"
      className="sticky top-[4.25rem] z-30 rounded-xl border border-navy-900/10 bg-white/95 p-2 shadow-sm backdrop-blur-md md:top-[4.75rem]"
    >
      <ul className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {galleryCategories.map((cat) => {
          const isActive = active === cat.slug
          return (
            <li key={cat.slug} className="shrink-0">
              <a
                href={`#area-${cat.slug}`}
                className={cn(
                  'inline-flex rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition',
                  isActive
                    ? 'bg-navy-900 text-white'
                    : 'bg-transparent text-navy-900/65 hover:bg-slate-100',
                )}
              >
                {shortLabel(cat.title)}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
