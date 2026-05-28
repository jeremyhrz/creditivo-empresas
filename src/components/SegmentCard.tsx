/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Award, TrendingUp, Smartphone, Building } from 'lucide-react';
import { Segment } from '../types';

interface SegmentCardProps {
  key?: any;
  segment: Segment;
  onSelect: (id: 'mayorista' | 'emprendedor' | 'nomina') => void;
}

export default function SegmentCard({ segment, onSelect }: SegmentCardProps) {
  // Styles based on badgeStyle
  const themeStyles = {
    emerald: {
      bg: 'hover:border-emerald-200 hover:shadow-emerald-100/40',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      icon: 'text-emerald-600 bg-emerald-50 border border-emerald-100/50',
      tagline: 'text-emerald-700',
      button: 'bg-[#10D66B] hover:bg-[#00B555] text-white shadow-md hover:shadow-emerald-200/50',
      decorative: 'from-emerald-400/20 to-transparent'
    },
    cyan: {
      bg: 'hover:border-cyan-200 hover:shadow-cyan-100/40',
      badge: 'bg-cyan-50 text-cyan-700 border-cyan-100',
      icon: 'text-cyan-600 bg-cyan-50 border border-cyan-100/50',
      tagline: 'text-cyan-700',
      button: 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-md hover:shadow-cyan-200/50',
      decorative: 'from-cyan-400/20 to-transparent'
    },
    indigo: {
      bg: 'hover:border-indigo-200 hover:shadow-indigo-100/40',
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      icon: 'text-indigo-600 bg-indigo-50 border border-indigo-100/50',
      tagline: 'text-indigo-700',
      button: 'bg-[#006B3F] hover:bg-[#005530] text-white shadow-md hover:shadow-green-200/50',
      decorative: 'from-indigo-400/20 to-transparent'
    }
  }[segment.badgeStyle || 'emerald'];

  const getIcon = () => {
    switch (segment.id) {
      case 'mayorista':
        return <TrendingUp className="w-6 h-6" />;
      case 'emprendedor':
        return <Smartphone className="w-6 h-6" />;
      case 'nomina':
        return <Building className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative h-full flex flex-col justify-between p-8 sm:p-10 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 ${themeStyles.bg}`}
    >
      {/* Absolute background accent line */}
      <span className={`absolute top-0 inset-x-0 h-1.5 rounded-t-[2rem] bg-gradient-to-r ${themeStyles.decorative}`}></span>

      <div>
        {/* Card Header & Badge */}
        <div className="flex justify-between items-start gap-4 mb-8">
          <div className={`p-4 rounded-2xl ${themeStyles.icon} flex items-center justify-center`}>
            {getIcon()}
          </div>
          <span className={`px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border ${themeStyles.badge}`}>
            {segment.badgeText}
          </span>
        </div>

        {/* Card Titles */}
        <p className={`text-sm font-extrabold uppercase tracking-widest ${themeStyles.tagline} mb-2`}>
          {segment.tagline}
        </p>
        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {segment.title}
        </h3>
        <p className="text-base text-slate-600 leading-relaxed mb-8">
          {segment.description}
        </p>

        {/* Card Bullets */}
        <div className="border-t border-slate-100 pt-6 mb-10">
          <p className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-4">
            Características destacadas
          </p>
          <ul className="space-y-4">
            {segment.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3 text-base text-slate-600">
                <span className="mt-1 p-1 bg-emerald-50 text-emerald-600 rounded-lg flex-shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Button */}
      <button
        onClick={() => onSelect(segment.id)}
        className={`w-full py-4 px-6 rounded-xl font-extrabold text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${themeStyles.button}`}
      >
        <span>{segment.ctaText}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
