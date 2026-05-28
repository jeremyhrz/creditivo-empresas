/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Step } from '../types';

interface StepCardProps {
  key?: any;
  step: Step;
}

export default function StepCard({ step }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center p-8 pt-10 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 group">
      {/* Step Number Circle */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 font-black text-xl flex items-center justify-center shadow-sm select-none transition-all group-hover:bg-[#10D66B] group-hover:text-white group-hover:scale-110 group-hover:shadow-emerald-200">
        {step.number}
      </div>

      <div className="mt-4">
        <h4 className="font-extrabold text-slate-900 text-lg leading-snug mb-3 group-hover:text-[#006B3F] transition-colors tracking-tight">
          {step.title}
        </h4>
        <p className="text-base text-slate-600 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
