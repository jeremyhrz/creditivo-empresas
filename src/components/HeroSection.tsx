/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Shield, Zap, Clock } from 'lucide-react';
import MobileMockup from './MobileMockup';

interface HeroSectionProps {
  onCtaClick: () => void;
  onCompanyClick: () => void;
}

export default function HeroSection({ onCtaClick, onCompanyClick }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-12 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white"
    >
      {/* ── Ambient Background ── */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#10D66B]/[0.025] rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-100/[0.05] rounded-full blur-[100px] -z-10"></div>
      <div className="absolute inset-0 -z-10 opacity-[0.01]" style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          
          {/* ━━━ LEFT — Copy & CTA ━━━ */}
          <div className="space-y-8 text-left">
            
            {/* ── Micro-Badge ── */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-slate-200/80 text-xs font-bold text-slate-500 select-none shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10D66B] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10D66B]"></span>
              </span>
              <span className="tracking-wide">Financiamiento Propio de IVOO • 100% Digital</span>
            </motion.div>

            {/* ── Headline ── */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                La plataforma de crédito digital que impulsa{' '}
                <span className="bg-gradient-to-r from-[#005C36] via-[#00A94F] to-[#10D66B] bg-clip-text text-transparent">
                  el crecimiento de tu empresa.
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-xl">
                Líneas de crédito comerciales diseñadas para optimizar tu flujo de caja, financiar inventario corporativo y expandir tus operaciones de inmediato. Todo 100% digital, sin burocracia bancaria tradicional.
              </p>
            </motion.div>

            {/* ── CTAs ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3.5"
            >
              <button
                onClick={onCtaClick}
                className="group px-9 py-4 bg-gradient-to-b from-[#12E074] to-[#0DBF5E] hover:from-[#10D66B] hover:to-[#00A94F] text-white font-extrabold text-sm rounded-xl shadow-[0_4px_16px_0_rgba(16,214,107,0.28)] hover:shadow-[0_8px_28px_0_rgba(16,214,107,0.38)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98]"
              >
                <span>Solicitar Creditivoo</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={onCompanyClick}
                className="group px-9 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Afiliar mi empresa</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all duration-300" />
              </button>
            </motion.div>

            {/* ── Trust Strip ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              {[
                { icon: Shield, label: 'Sin intermediarios bancarios' },
                { icon: Zap, label: 'Evaluación en 24–48h' },
                { icon: Clock, label: 'Proceso 100% digital' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ━━━ RIGHT — Phone Mockup ━━━ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center relative"
          >
            <MobileMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
