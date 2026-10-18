import { cn } from '../lib/cn'

type PhotoFrameProps = {
  src: string
  alt: string
  className?: string
  aspect?: 'square' | 'video' | 'portrait' | 'wide'
  priority?: boolean
  onClick?: () => void
}

const aspectClass = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/10]',
}

export function PhotoFrame({
  src,
  alt,
  className,
  aspect = 'wide',
  priority,
  onClick,
}: PhotoFrameProps) {
  const Wrapper = onClick ? 'button' : 'div'

  return (
    <Wrapper
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={cn(
        'group relative block w-full overflow-hidden rounded-lg bg-navy-950/5 ring-1 ring-navy-900/10',
        aspectClass[aspect],
        onClick && 'cursor-zoom-in text-left',
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        className="absolute inset-0 h-full w-full object-contain p-0.5 transition duration-700 group-hover:scale-[1.02]"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
    </Wrapper>
  )
}
