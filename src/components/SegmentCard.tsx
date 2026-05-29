/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Award, TrendingUp, Smartphone, Building, Star } from 'lucide-react';
import { Segment } from '../types';

interface SegmentCardProps {
  key?: any;
  segment: Segment;
  isFeatured?: boolean;
  index?: number;
  onSelect: (id: 'mayorista' | 'emprendedor' | 'nomina') => void;
}

export default function SegmentCard({ segment, isFeatured = false, index = 0, onSelect }: SegmentCardProps) {
  // Styles based on badgeStyle
  const themeStyles = {
    emerald: {
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-100/60',
      icon: 'text-emerald-600 bg-emerald-50 border border-emerald-100/50',
      tagline: 'text-emerald-700',
      button: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-emerald-200/50'
    },
    cyan: {
      badge: 'bg-cyan-50 text-cyan-700 border-cyan-100/60',
      icon: 'text-cyan-600 bg-cyan-50 border border-cyan-100/50',
      tagline: 'text-cyan-700',
      button: 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm hover:shadow-cyan-200/50'
    },
    indigo: {
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-100/60',
      icon: 'text-indigo-600 bg-indigo-50 border border-indigo-100/50',
      tagline: 'text-indigo-700',
      button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-indigo-200/50'
    }
  }[segment.badgeStyle || 'emerald'];

  const getIcon = () => {
    const iconClass = isFeatured ? "w-8 h-8" : "w-6 h-6";
    switch (segment.id) {
      case 'mayorista':
        return <TrendingUp className={iconClass} />;
      case 'emprendedor':
        return <Smartphone className={iconClass} />;
      case 'nomina':
        return <Building className={iconClass} />;
      default:
        return <Award className={iconClass} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-slate-200/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 overflow-hidden ${
        isFeatured
          ? 'md:col-span-2 bg-gradient-to-br from-slate-50 to-white'
          : 'md:col-span-1 bg-white'
      }`}
    >
      {/* Subtle top reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>

      <div>
        {/* Header & Badges */}
        <div className="flex justify-between items-start gap-4 mb-8">
          <div className={`p-4 rounded-xl ${themeStyles.icon} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
            {getIcon()}
          </div>
          
          <div className="flex flex-col items-end gap-2">
            {isFeatured && (
              <span className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full bg-slate-900 text-white shadow-sm">
                <Star className="w-3 h-3 fill-white" />
                Recomendado
              </span>
            )}
            <span className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full border ${themeStyles.badge}`}>
              {segment.badgeText}
            </span>
          </div>
        </div>

        {/* Card Copy */}
        <p className={`text-[11px] font-black uppercase tracking-widest ${themeStyles.tagline} mb-2`}>
          {segment.tagline}
        </p>
        <h3 className={`${isFeatured ? 'text-4xl' : 'text-3xl'} font-extrabold text-slate-900 tracking-tight leading-tight mb-4`}>
          {segment.title}
        </h3>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-8 max-w-md">
          {segment.description}
        </p>

        {/* Features List */}
        <div className="border-t border-slate-100/80 pt-6 mb-10">
          <ul className={`${isFeatured ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4' : 'space-y-4'}`}>
            {segment.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                <span className="mt-0.5 p-1 bg-emerald-50 text-emerald-600 rounded-md shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onSelect(segment.id as any)}
        className={`w-full sm:w-auto self-start px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${themeStyles.button}`}
      >
        <span>{segment.ctaText}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
