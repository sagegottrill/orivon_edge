import React from 'react'
import { NeonCard } from '@/components/ui/neon-card'

const PricingCard: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* diamond backdrop */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[420px] h-[420px] rotate-45 bg-gradient-to-b from-black/40 to-black/0 opacity-40 rounded-2xl blur-2xl" />
      </div>

      <NeonCard variant="showcase" className="mx-auto max-w-md rounded-2xl">
        <div className="relative text-center px-6 py-10">
          {/* pricing block removed per user request */}
          <div className="text-gray-400">&nbsp;</div>
        </div>
      </NeonCard>
    </div>
  )
}

export default PricingCard
