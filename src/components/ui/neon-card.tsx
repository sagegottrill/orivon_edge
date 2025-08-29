import * as React from 'react'
import { cn } from '@/lib/utils'

type NeonCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'showcase' | 'compact'
}

const NeonCard = React.forwardRef<HTMLDivElement, NeonCardProps>(({ className, children, variant = 'default', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/6 border border-white/8',
        'shadow-[0_18px_60px_rgba(0,0,0,0.6)]',
        'transition-transform will-change-transform duration-300 ease-out',
        'group-hover:scale-[1.02] group-hover:shadow-[0_30px_90px_rgba(124,58,237,0.18)]',
        // showcase variant: larger glow, darker core, subtle top accent
        variant === 'showcase' && 'bg-black/50 border-white/6',
        // compact variant: tighter radius, darker fill
        variant === 'compact' && 'rounded-3xl bg-black/60 border-white/6',
        className
      )}
      {...props}
    >
      {/* neon accents */}
      <div className="pointer-events-none absolute -inset-6 blur-3xl opacity-60 transition-all duration-400 transform-gpu group-hover:opacity-100 group-hover:blur-4xl">
        <div className="absolute left-0 top-0 w-60 h-60 rounded-full bg-gradient-to-tr from-purple-500/40 via-pink-400/25 to-transparent transform -translate-x-6 -translate-y-6 group-hover:scale-105" />
        <div className="absolute right-0 bottom-0 w-48 h-48 rounded-full bg-gradient-to-bl from-cyan-400/35 via-blue-400/20 to-transparent transform translate-x-6 translate-y-6 group-hover:scale-105" />
        {variant === 'showcase' && (
          <>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4 w-40 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-80 blur-sm" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,88,0,0.04)_0%,rgba(255,88,0,0.00)_30%)] mix-blend-screen pointer-events-none" />
          </>
        )}
      </div>

      {/* subtle rim glow that intensifies on hover */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-0 transition-opacity duration-400 group-hover:opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,rgba(124,58,237,0.02)_40%,transparent_60%)]" />
      </div>

  <div className={cn('relative z-10 text-white', variant === 'compact' ? 'p-4' : '')}>{children}</div>
    </div>
  )
})
NeonCard.displayName = 'NeonCard'

export { NeonCard }

// Convenience wrappers
const ShowcaseCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <NeonCard variant="showcase" className={cn('p-8', className)} {...props}>
    {children}
  </NeonCard>
)

const CompactCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <NeonCard variant="compact" className={cn('p-4', className)} {...props}>
    {children}
  </NeonCard>
)

export { ShowcaseCard, CompactCard }
