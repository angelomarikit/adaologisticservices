import { Mail, MapPin, Phone } from 'lucide-react'
import { BrandLogo } from '../components/BrandLogo'
import { site } from '../data/site'

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#areas', label: 'Gallery' },
  { href: '#legal', label: 'Legal' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-950 pb-24 text-white md:pb-12">
      <div className="section-shell py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <BrandLogo size="footer" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {site.taglinePrimary}. {site.taglineSecondary}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">Navigate</p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/75 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">Reach us</p>
            <ul className="mt-4 space-y-3">
              {site.phones.map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={`tel:${phone.tel}`}
                    className="inline-flex items-center gap-2 font-semibold text-cta-400 hover:text-cta-500"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {site.address}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {site.email}
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/45">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
