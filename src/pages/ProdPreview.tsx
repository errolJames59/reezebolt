import React from 'react';
import Fan_3 from "@/components/Fan_3";
import Fan_4 from "@/components/Fan_4";

interface ProdPreviewProps {
  className?: string;
}

const ProdPreview: React.FC<ProdPreviewProps> = ({ className }) => {
  return (
    <section className={`flex flex-col place-content-center ${className}`}>

      <div className='grid'>
        <Fan_3 className="md:w-2/6"/>
        <div className="w-3/5 md:w-2/6 lg:w-3/6 lg:relative mx-auto">
          <p className="text-sm text-center md:text-base lg:text-lg">
            “The Ultimate 3-in-1 device for power, Comfort, and light —anytime,
            anywhere". ReezeBolt Trio is designed to provide a portable and
            reliable power solution, especially for students and individuals
            facing frequent power outages. With its multi-functional design, it
            provides essential energy, lighting, and cooling wherever it's
            needed most.”
          </p>
        </div>
        <Fan_4 />
      </div>

      <div
        className="flex h-28"
        style={{
          background: "linear-gradient(360deg, #FFE525 61.9%, #FFF 100%)",
        }}
      ></div>

    </section>
  );
};

export default ProdPreview;
