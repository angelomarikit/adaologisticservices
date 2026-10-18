import { site } from '../data/site'

export function TrustStrip() {
  return (
    <section className="border-b border-navy-900/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="font-display text-xl font-bold tracking-tight text-navy-900 md:text-2xl">
          {site.taglinePrimary}
        </p>
        <p className="max-w-md text-base text-navy-900/70 md:text-right">{site.taglineSecondary}</p>
      </div>
    </section>
  )
}
