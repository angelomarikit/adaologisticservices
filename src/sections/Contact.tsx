import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'
import { site } from '../data/site'

export function Contact() {
  return (
    <MotionSection id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Talk to the team on the ground"
          description="For quotes, yard availability, lift scheduling, or forwarding coordination — use either hotline or email."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {site.phones.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="surface-card group p-7 transition hover:-translate-y-0.5"
            >
              <Phone className="h-6 w-6 text-royal-600" aria-hidden />
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-navy-900/45">Hotline</p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-wide text-navy-900 group-hover:text-royal-600">
                {phone.display}
              </p>
            </a>
          ))}

          <a
            href={`mailto:${site.email}`}
            className="surface-card group p-7 transition hover:-translate-y-0.5 md:col-span-1"
          >
            <Mail className="h-6 w-6 text-royal-600" aria-hidden />
            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-navy-900/45">Email</p>
            <p className="mt-2 break-all text-lg font-semibold text-navy-900 group-hover:text-royal-600">
              {site.email}
            </p>
          </a>
        </div>

        <div className="surface-card mt-5 flex gap-4 p-7">
          <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-royal-600" aria-hidden />
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-navy-900/45">Office & yard</p>
            <p className="mt-2 text-lg text-navy-900/80">{site.address}</p>
            <a href="#location" className="mt-3 inline-block text-sm font-semibold text-royal-600 hover:underline">
              View map section
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </MotionSection>
  )
}
