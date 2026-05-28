/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileCheck2, ShieldAlert, BadgeInfo } from 'lucide-react';
import { REQUIREMENTS } from '../landingData';

export default function RequirementTabs() {
  const [activeTab, setActiveTab] = useState<'mayorista' | 'emprendedor' | 'nomina' | 'empresas'>('mayorista');

  const currentTabInfo = REQUIREMENTS.find((req) => req.id === activeTab) || REQUIREMENTS[0];

  return (
    <div className="w-full bg-white rounded-[2rem] border border-slate-100 p-8 md:p-12 shadow-sm">
      {/* Scrollable Tab Controls */}
      <div className="flex border-b border-slate-100 overflow-x-auto scrollbar-none pb-4 mb-8 gap-3">
        {REQUIREMENTS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`whitespace-nowrap px-6 py-3 text-sm font-extrabold rounded-xl border transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#10D66B] text-white border-[#10D66B] shadow-lg shadow-[#10D66B]/20'
                : 'bg-slate-50 text-slate-500 border-transparent hover:text-slate-800 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Animated Content Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Tab Description Context */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
              {currentTabInfo.title}
            </h4>
            <p className="text-base text-slate-600 leading-relaxed">
              {currentTabInfo.description}
            </p>

            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100/50 flex gap-4 text-left">
              <div className="p-1.5 bg-emerald-100 rounded-lg shrink-0 mt-0.5">
                <BadgeInfo className="w-5 h-5 text-[#006B3F]" />
              </div>
              <p className="text-sm text-emerald-800 leading-relaxed">
                <strong>Análisis Personalizado:</strong> Recordamos que Creditivoo no es un banco. Los documentos suministrados son analizados manualmente para otorgar el máximo límite viable adaptado a tu capacidad real.
              </p>
            </div>
          </div>

          {/* Tab Document Bullets list */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <h5 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <div className="p-1 bg-white rounded-md border border-slate-200">
                <FileCheck2 className="w-5 h-5 text-[#10D66B]" />
              </div>
              <span>Documentos a consignar</span>
            </h5>
            
            <ul className="space-y-4">
              {currentTabInfo.documents.map((doc, idx) => (
                <li key={idx} className="flex gap-4 text-base text-slate-700 items-start">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#10D66B] shrink-0"></span>
                  <span className="leading-relaxed font-medium">{doc}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-slate-400 mt-8 leading-relaxed flex gap-2 items-center">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>*Los recaudos pueden variar levemente según el criterio del analista asignado.</span>
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
