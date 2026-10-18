import { cn } from '../lib/cn'

type BrandLogoProps = {
  /** Slightly larger mark for footer */
  size?: 'nav' | 'footer'
  className?: string
}

export function BrandLogo({ size = 'nav', className }: BrandLogoProps) {
  return (
    <img
      src="/brand/logo-clear.png"
      alt="ADAO Logistic Services"
      className={cn(
        'w-auto object-contain',
        size === 'nav' && 'h-12 md:h-[3.35rem]',
        size === 'footer' && 'h-16 md:h-[4.25rem]',
        className,
      )}
      width={200}
      height={72}
      decoding="async"
    />
  )
}
