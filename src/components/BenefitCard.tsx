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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-5 p-6 sm:p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-md hover:border-emerald-100 transition-all duration-300"
    >
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
    </motion.div>
  );
}
