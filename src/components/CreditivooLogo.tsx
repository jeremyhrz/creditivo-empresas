/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface CreditivooLogoProps {
  className?: string;
  showText?: boolean;
}

export default function CreditivooLogo({ className = 'h-8', showText = true }: CreditivooLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon portion: stylized overlapping fintech cards of Creditivoo */}
      <svg
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto filter drop-shadow-[0_2px_4px_rgba(16,214,107,0.15)]"
      >
        {/* Rear bright green card */}
        <rect
          x="10"
          y="4"
          width="42"
          height="72"
          rx="10"
          fill="#10D66B"
        />
        {/* Chip accent on the rear card */}
        <rect
          x="38"
          y="12"
          width="6"
          height="10"
          rx="1.5"
          fill="#FFFFFF"
          opacity="0.9"
        />
        
        {/* Front medium emerald card */}
        <rect
          x="28"
          y="25"
          width="48"
          height="51"
          rx="10"
          fill="#00B555"
          opacity="0.95"
        />
        
        {/* Frontmost dark forest card */}
        <rect
          x="44"
          y="25"
          width="42"
          height="51"
          rx="10"
          fill="#006B3F"
        />
      </svg>

      {showText && (
        <span className="font-sans font-black tracking-wider text-[22px] leading-none text-[#006B3F] flex items-center gap-0.5">
          <span className="text-[#10D66B]">CREDITIV</span>
          <span>OO</span>
        </span>
      )}
    </div>
  );
}
