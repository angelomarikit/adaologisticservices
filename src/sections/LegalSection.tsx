import { LegalGrid } from '../components/LegalGrid'
import { MotionSection } from '../components/MotionSection'
import { SectionHeader } from '../components/SectionHeader'
import { legalDocuments } from '../data/legal.manifest'
import { site } from '../data/site'

export function LegalSection() {
  return (
    <MotionSection id="legal" className="scroll-mt-24 bg-[#eef1f5] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Compliance"
          title="Registered business — documents on display"
          description="DTI registration, PPA port accreditation, and BIR posting notice — shown upright at natural proportions. Open any document to read the full detail."
        />

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="surface-card p-5">
            <dt className="text-xs font-bold uppercase tracking-wide text-navy-900/45">Registered name</dt>
            <dd className="mt-2 font-semibold text-navy-900">{site.businessNameRegistration.registeredName}</dd>
          </div>
          <div className="surface-card p-5">
            <dt className="text-xs font-bold uppercase tracking-wide text-navy-900/45">DTI business name no.</dt>
            <dd className="mt-2 font-display text-2xl font-semibold tracking-wide text-navy-900">
              {site.businessNameRegistration.number}
            </dd>
          </div>
          <div className="surface-card p-5">
            <dt className="text-xs font-bold uppercase tracking-wide text-navy-900/45">Valid through</dt>
            <dd className="mt-2 font-semibold text-navy-900">{site.businessNameRegistration.validThrough}</dd>
          </div>
        </dl>

        <div className="mt-10">
          <LegalGrid documents={legalDocuments} />
        </div>
      </div>
    </MotionSection>
  )
}
