/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Calculator } from 'lucide-react';

export default function CreditSimulator() {
  const [amount, setAmount] = useState(25000);
  const [term, setTerm] = useState(6);

  const calculateInstallment = () => {
    // Estimación visual para propósitos de UI
    return amount / term;
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/60 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row">
      
      {/* LEFT: Controls Panel */}
      <div className="p-8 md:p-12 lg:w-3/5 bg-slate-50/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
            <Calculator className="w-5 h-5" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Simulador de Financiamiento
          </h3>
        </div>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10">
          Ajusta los valores deseados para visualizar un escenario base de tu línea de compra comercial corporativa.
        </p>
        
        {/* Slider for Amount */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-5">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
              Monto Solicitado
            </label>
            <span className="text-3xl md:text-4xl font-black text-[#10D66B] tracking-tight">
              ${amount.toLocaleString('en-US')}
            </span>
          </div>
          
          <div className="relative w-full pt-2 pb-4">
            <input 
              type="range" 
              min="5000" 
              max="100000" 
              step="5000" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))} 
              className="w-full h-2.5 rounded-full appearance-none cursor-pointer focus:outline-none 
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_4px_12px_rgba(0,0,0,0.15)] [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-slate-100 [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110
              [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-[0_4px_12px_rgba(0,0,0,0.15)] [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-slate-100"
              style={{
                background: `linear-gradient(to right, #10D66B 0%, #10D66B ${((amount - 5000) / 95000) * 100}%, #e2e8f0 ${((amount - 5000) / 95000) * 100}%, #e2e8f0 100%)`
              }}
            />
          </div>

          <div className="flex justify-between text-xs font-bold text-slate-400">
            <span>$5,000</span>
            <span>$100,000</span>
          </div>
        </div>

        {/* Term Selector */}
        <div>
          <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest block mb-4">
            Plazo Estimado (Meses)
          </label>
          <div className="flex gap-3">
            {[3, 6, 12].map(t => (
              <button
                key={t}
                onClick={() => setTerm(t)}
                className={`flex-1 py-3.5 rounded-xl border font-bold text-sm transition-all duration-300 ${
                  term === t 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md transform scale-[1.02]' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                {t} Meses
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Results Panel (Look Financiero) */}
      <div className="p-8 md:p-12 lg:w-2/5 bg-white border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col justify-center relative">
        <div className="space-y-8">
          
          <div>
            <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest mb-2">
              Línea de Crédito Estimada
            </p>
            <motion.p 
              key={amount}
              initial={{ opacity: 0.5, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-none"
            >
              ${amount.toLocaleString('en-US')}
            </motion.p>
            <p className="text-sm font-bold text-slate-500 mt-3">
              Pago ref: <span className="text-slate-700">${calculateInstallment().toLocaleString('en-US', {maximumFractionDigits: 0})} / mes</span>
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-slate-500 font-medium">Comisión de Apertura</span>
              <span className="text-sm font-bold text-slate-700">Sujeto a evaluación</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-slate-500 font-medium">Tiempo de Aprobación</span>
              <span className="text-[11px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg border border-emerald-100/50 whitespace-nowrap">
                Menos de 24 horas
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button 
              onClick={() => document.getElementById('formulario-solicitud-lead')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-slate-900/20 transition-all flex justify-center items-center gap-2 group cursor-pointer"
            >
               Iniciar Solicitud Formal
               <ChevronRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
