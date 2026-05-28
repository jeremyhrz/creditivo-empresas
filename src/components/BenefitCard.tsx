/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Sliders, Smartphone, CheckCircle } from 'lucide-react';
import { Benefit } from '../types';

interface BenefitCardProps {
  key?: any;
  benefit: Benefit;
}

export default function BenefitCard({ benefit }: BenefitCardProps) {
  const getIcon = () => {
    switch (benefit.id) {
      case 'perfil':
        return <Sliders className="w-6 h-6 text-emerald-600" />;
      case 'celular':
        return <Smartphone className="w-6 h-6 text-emerald-600" />;
      case 'ivoo':
        return <CheckCircle className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="flex gap-5 p-6 sm:p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-md hover:border-emerald-100 transition-all duration-300">
      <div className="flex-shrink-0 p-4 h-14 w-14 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100/50">
        {getIcon()}
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="font-extrabold text-slate-900 text-lg md:text-xl leading-snug mb-2 tracking-tight">
          {benefit.title}
        </h4>
        <p className="text-base text-slate-600 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}
