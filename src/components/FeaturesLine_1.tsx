import React from 'react';

interface FeaturesLine_1Props {
  style?: React.CSSProperties;
  className?: string;
}

const FeaturesLine_1: React.FC<FeaturesLine_1Props> = ({ style, className }) => {
  return (
    <svg
      width="13"
      height="180"
      viewBox="0 0 13 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <rect x="0.5" width="12" height="180" fill="url(#paint0_linear_20_38)" />
      <defs>
        <linearGradient
          id="paint0_linear_20_38"
          x1="6.5"
          y1="0"
          x2="6.5"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#D9D9D9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FeaturesLine_1;
