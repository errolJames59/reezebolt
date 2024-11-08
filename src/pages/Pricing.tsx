import React from 'react'
import { Button } from '@/components/ui/button';

interface PricingProps {
    className?: string;
}

const Pricing: React.FC<PricingProps> = ({className}) => {
  return (
    <section className={`min-h-screen grid place-content-center bg-red-300 ${className}`}>
        <h1>PRICING</h1>
        <Button>Place order</Button>
    </section>
  )
}

export default Pricing
