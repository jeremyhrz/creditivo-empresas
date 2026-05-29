/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sliders, Smartphone, CheckCircle } from 'lucide-react';
import { Benefit } from '../types';

interface BenefitCardProps {
  key?: any;
  benefit: Benefit;
  index?: number;
}

export default function BenefitCard({ benefit, index = 0 }: BenefitCardProps) {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.215, 0.610, 0.355, 1] }}
      className="relative group flex gap-5 p-7 sm:p-9 bg-white border border-slate-200/50 rounded-[2rem] hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out overflow-hidden"
    >
      {/* ── Inner glow orb for depth ── */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-400/[0.06] rounded-full blur-[60px] pointer-events-none group-hover:bg-emerald-400/[0.12] transition-all duration-700"></div>

      {/* ── Reflective top border line ── */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent"></div>

      <div className="relative flex-shrink-0 p-4 h-14 w-14 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100/50 group-hover:shadow-emerald-200/40 group-hover:shadow-lg transition-shadow duration-500">
        {getIcon()}
      </div>
      <div className="relative flex flex-col justify-center">
        <h4 className="font-extrabold text-slate-900 text-lg md:text-xl leading-snug mb-2 tracking-tight">
          {benefit.title}
        </h4>
        <p className="text-base text-slate-600 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}
