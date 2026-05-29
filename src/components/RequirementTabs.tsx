/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { FileCheck2, ShieldAlert, BadgeInfo, Check, FolderOpen } from 'lucide-react';
import { REQUIREMENTS } from '../landingData';

export default function RequirementTabs() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REQUIREMENTS.map((req, idx) => {
          // Asymmetric Bento Grid logic
          // First and Last item take 2 columns, middle items take 1 column each
          const isFeatured = idx === 0 || idx === 3;
          
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              key={req.id}
              className={`relative group flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-slate-200/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 overflow-hidden ${
                isFeatured ? 'md:col-span-2 bg-gradient-to-br from-slate-50 to-white' : 'md:col-span-1 bg-white'
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start gap-4 mb-6">
                  <div className="p-3.5 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <FolderOpen className={isFeatured ? "w-7 h-7" : "w-5 h-5"} />
                  </div>
                  <span className="px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100/60">
                    {req.label}
                  </span>
                </div>

                <h4 className={`${isFeatured ? 'text-3xl' : 'text-2xl'} font-extrabold text-slate-900 leading-tight tracking-tight mb-3`}>
                  {req.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-md">
                  {req.description}
                </p>

                <div className="border-t border-slate-100/80 pt-6">
                  <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <FileCheck2 className="w-3.5 h-3.5 text-slate-400" />
                    Documentos a consignar
                  </h5>
                  
                  <ul className={`${isFeatured ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3' : 'space-y-3'}`}>
                    {req.documents.map((doc, docIdx) => (
                      <li key={docIdx} className="flex gap-3 text-sm text-slate-600 items-start">
                        <span className="mt-0.5 p-0.5 bg-slate-100 text-slate-500 rounded flex-shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span className="leading-relaxed font-medium">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Disclaimer microcopy for featured cards */}
              {isFeatured && (
                <div className="mt-8 pt-6 border-t border-slate-100/80 flex gap-3 items-center text-left">
                  <div className="p-1.5 bg-emerald-50 rounded-lg shrink-0">
                    <BadgeInfo className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Creditivoo evalúa de forma manual cada soporte. El objetivo es asignarte el mayor límite posible sin comprometer tu liquidez ni generar pasivos ocultos.
                  </p>
                </div>
              )}
              
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
