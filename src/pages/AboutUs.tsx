import React from 'react'
import { Button } from '@/components/ui/button';

interface AboutUsProps {
    className?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({className}) => {
  return (
    <section className={`min-h-screen bg-green-300 grid place-content-center ${className}`}>
        <h1>About Us</h1>
        <Button>Contact Us</Button>
    </section>
  )
}


export default AboutUs
