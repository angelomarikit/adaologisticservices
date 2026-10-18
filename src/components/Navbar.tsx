import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { cn } from '../lib/cn'
import { BrandLogo } from './BrandLogo'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#areas', label: 'Gallery' },
  { href: '#process', label: 'Process' },
  { href: '#legal', label: 'Legal' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [elevated, setElevated] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    document.body.classList.toggle('mobile-nav-open', menuOpen)
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('mobile-nav-open')
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 border-b transition-all duration-300',
          menuOpen && 'max-lg:hidden',
          elevated
            ? 'border-navy-900/10 bg-white/95 shadow-[0_8px_30px_-20px_rgba(11,31,58,0.35)] backdrop-blur-md'
            : 'border-transparent bg-white/88 backdrop-blur-sm',
        )}
      >
        <div className="section-shell flex h-[4.5rem] items-center justify-between gap-4 md:h-[5rem]">
          <a href="#" className="shrink-0 rounded-md py-1" aria-label="ADAO Logistic Services home">
            <BrandLogo size="nav" />
          </a>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-navy-900/75 transition hover:text-royal-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phones[0].tel}`}
              className="hidden items-center gap-2 rounded-lg bg-cta-400 px-4 py-2 text-sm font-bold text-navy-950 transition hover:bg-cta-500 sm:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call
            </a>
            <button
              type="button"
              className="inline-flex rounded-lg border border-navy-900/12 p-2 text-navy-900 lg:hidden"
              aria-expanded={menuOpen}
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-[#f4f6f9] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="shrink-0 border-b border-navy-900/10 bg-white">
            <div className="section-shell flex h-14 items-center justify-between sm:h-[4.5rem] md:h-[5rem]">
              <a href="#" onClick={() => setMenuOpen(false)} aria-label="ADAO Logistic Services home">
                <BrandLogo size="nav" />
              </a>
              <button
                type="button"
                className="inline-flex rounded-lg border border-navy-900/12 p-2 text-navy-900"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <nav className="section-shell flex-1 overflow-y-auto py-6" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg py-3 font-display text-2xl font-semibold text-navy-900 active:bg-white/80"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`tel:${site.phones[0].tel}`}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta-400 px-4 py-3.5 font-bold text-navy-950"
            >
              <Phone className="h-5 w-5" />
              {site.phones[0].display}
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
