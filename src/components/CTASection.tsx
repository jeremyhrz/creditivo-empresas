/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onCtaClick: () => void;
  onCompanyClick: () => void;
}

export default function CTASection({ onCtaClick, onCompanyClick }: CTASectionProps) {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">

          {/* Micro-badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100/60 text-xs font-bold text-emerald-700 select-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-wide uppercase">Activa tu línea hoy</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-2xl mx-auto">
            ¿Listo para impulsar el crecimiento de tu operación comercial?
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Elige tu perfil, carga tus recaudos digitales y deja que nuestro equipo analice tu potencial comercial.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={onCtaClick}
              className="group px-10 py-4 bg-gradient-to-b from-[#12E074] to-[#0DBF5E] hover:from-[#10D66B] hover:to-[#00A94F] text-white font-extrabold text-sm rounded-xl shadow-[0_4px_16px_0_rgba(16,214,107,0.28)] hover:shadow-[0_8px_28px_0_rgba(16,214,107,0.38)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98]"
            >
              <span>Solicitar Creditivoo</span>
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={onCompanyClick}
              className="group px-10 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>Afiliar mi empresa</span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all duration-300" />
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-slate-400 max-w-sm mx-auto pt-2 leading-relaxed">
            *La asignación de línea se realiza por evaluación manual, no por aprobación automática. Sin cobros ocultos ni papeleo bancario.
          </p>
        </div>
      </div>
    </section>
  );
}
