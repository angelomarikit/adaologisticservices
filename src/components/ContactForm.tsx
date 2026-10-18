import { Loader2, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { services, site } from '../data/site'
import { cn } from '../lib/cn'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'mt-1.5 w-full rounded-lg border border-navy-900/12 bg-white px-4 py-3 text-navy-900 outline-none transition placeholder:text-navy-900/40 focus:border-royal-600 focus:ring-2 focus:ring-royal-600/20'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: String(data.get('name') ?? ''),
      phone: String(data.get('phone') ?? ''),
      email: String(data.get('email') ?? ''),
      service: String(data.get('service') ?? ''),
      message: String(data.get('message') ?? ''),
      _subject: `ADAO website inquiry — ${data.get('name')}`,
      _template: 'table',
    }

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Send failed')

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage(
        'We could not send your message right now. Please call us directly or email ' + site.email,
      )
    }
  }

  return (
    <div id="contact-form" className="surface-card mt-12 overflow-hidden">
      <div className="border-b border-navy-900/8 bg-[#f8fafc] px-6 py-5 md:px-8">
        <h3 className="heading-md normal-case text-navy-900">Send a message</h3>
        <p className="mt-2 text-sm text-navy-900/65">
          Request a quote or ask about yard space, trucking, or lift services. We&apos;ll reply to
          your email or phone.
        </p>
      </div>

      {status === 'success' ? (
        <div className="px-6 py-10 md:px-8" role="status">
          <p className="font-semibold text-navy-900">Thank you — your message was sent.</p>
          <p className="mt-2 text-sm text-navy-900/70">
            For urgent moves, call{' '}
            <a className="font-semibold text-royal-600" href={`tel:${site.phones[0].tel}`}>
              {site.phones[0].display}
            </a>
            .
          </p>
          <button
            type="button"
            className="mt-6 text-sm font-semibold text-royal-600 hover:underline"
            onClick={() => setStatus('idle')}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="px-6 py-8 md:px-8" onSubmit={handleSubmit} noValidate>
          {/* Honeypot — hidden from users */}
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="text-sm font-semibold text-navy-900">
                Name <span className="text-royal-600">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="text-sm font-semibold text-navy-900">
                Phone <span className="text-royal-600">*</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={inputClass}
                placeholder="09XX XXX XXXX"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm font-semibold text-navy-900">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="contact-service" className="text-sm font-semibold text-navy-900">
                Service needed
              </label>
              <select id="contact-service" name="service" className={cn(inputClass, 'cursor-pointer')}>
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Other / not sure</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="contact-message" className="text-sm font-semibold text-navy-900">
              Message <span className="text-royal-600">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              className={cn(inputClass, 'resize-y min-h-[120px]')}
              placeholder="Cargo details, container size, dates, pickup/delivery locations…"
            />
          </div>

          {status === 'error' && (
            <p className="mt-4 text-sm text-red-700" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta-400 px-6 py-3.5 text-base font-bold text-navy-950 transition hover:bg-cta-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                <Send className="h-5 w-5" aria-hidden />
                Submit inquiry
              </>
            )}
          </button>

          <p className="mt-4 text-xs text-navy-900/50">
            By submitting, you agree we may contact you about your request. Messages are delivered
            to {site.email}.
          </p>
        </form>
      )}
    </div>
  )
}
