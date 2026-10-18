type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}: SectionHeaderProps) {
  return (
    <header className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <p className={`eyebrow ${dark ? '!text-sky-400' : ''}`}>{eyebrow}</p>
      <h2
        className={`heading-lg mt-3 text-balance ${dark ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 font-body text-base leading-relaxed md:text-lg ${dark ? 'text-white/75' : 'text-navy-900/70'}`}
        >
          {description}
        </p>
      )}
    </header>
  )
}
