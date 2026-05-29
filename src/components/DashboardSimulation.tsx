/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ArrowUpRight, ArrowDownLeft, CheckCircle2, Clock, CreditCard, BarChart3 } from 'lucide-react';

const TRANSACTIONS = [
  { id: 1, desc: 'Compra Mayorista — 12x iPhone 15', amount: '$8,400.00', status: 'Aprobado', icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
  { id: 2, desc: 'Transferencia a Sucursal VLC', amount: '$3,200.00', status: 'Transferido', icon: ArrowUpRight, color: 'text-blue-600 bg-blue-50' },
  { id: 3, desc: 'Pago Cuota #3 — Ciclo Feb', amount: '$1,850.00', status: 'Procesando', icon: Clock, color: 'text-amber-600 bg-amber-50' },
];

const CHART_BARS = [35, 52, 45, 68, 80, 72, 90, 85, 95, 78, 88, 100];

export default function DashboardSimulation() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1] }}
      className="relative"
    >
      {/* ── Ambient glow behind the dashboard ── */}
      <div className="absolute -top-16 left-1/4 w-80 h-80 bg-emerald-400/[0.07] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-10 right-1/4 w-64 h-64 bg-cyan-400/[0.05] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative bg-white border border-slate-200/60 rounded-3xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
        
        {/* ── Dashboard Header Bar ── */}
        <div className="px-6 md:px-8 py-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100/50">
              <BarChart3 className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-slate-900 tracking-tight">Panel Creditivoo Empresas</p>
              <p className="text-[10px] text-slate-400 font-medium">Vista ejecutiva — Demo interactiva</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-emerald-600">En vivo</span>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">

          {/* ── Row 1: Balance + Mini Chart ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Balance Card */}
            <div className="relative p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none"></div>
              <div className="relative">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Línea de Crédito Disponible</p>
                <p className="text-3xl md:text-4xl font-black text-white tracking-tight font-mono">$50,000<span className="text-lg text-slate-500">.00</span></p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+12.4%</span>
                  </div>
                  <span className="text-[10px] text-slate-500">vs. ciclo anterior</span>
                </div>
              </div>
              <div className="mt-5 flex items-end gap-1 h-16">
                {CHART_BARS.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.04, ease: [0.215, 0.610, 0.355, 1] }}
                    onMouseEnter={() => setHoveredBar(i)}
                    onMouseLeave={() => setHoveredBar(null)}
                    className={`flex-1 rounded-t-sm cursor-pointer transition-colors duration-200 ${
                      hoveredBar === i ? 'bg-emerald-400' : 'bg-emerald-500/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Utilizado', value: '$32,500', sub: '65% de línea', accent: 'text-slate-900' },
                { label: 'Cuotas al día', value: '3/3', sub: 'Historial perfecto', accent: 'text-emerald-600' },
                { label: 'Próx. vencimiento', value: '15 Jun', sub: 'Cuota #4 — $1,850', accent: 'text-slate-900' },
                { label: 'Puntuación', value: 'A+', sub: 'Riesgo mínimo', accent: 'text-emerald-600' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.06, ease: [0.215, 0.610, 0.355, 1] }}
                  className="p-4 bg-slate-50/80 border border-slate-100 rounded-2xl hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                >
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className={`text-xl font-black tracking-tight ${stat.accent}`}>{stat.value}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-medium">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Row 2: Recent Transactions ── */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-slate-400" />
                Movimientos Recientes
              </h4>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Últimos 30 días</span>
            </div>
            <div className="space-y-3">
              {TRANSACTIONS.map((tx, idx) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                  className="flex items-center justify-between p-4 bg-slate-50/60 border border-slate-100 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${tx.color} transition-transform duration-300 group-hover:scale-110`}>
                      <tx.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{tx.desc}</p>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">{tx.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-extrabold text-slate-900 font-mono tracking-tight">{tx.amount}</p>
                    <span className={`inline-block mt-1 text-[9px] font-bold px-2 py-0.5 rounded-full ${
                      tx.status === 'Aprobado' ? 'bg-emerald-50 text-emerald-600' :
                      tx.status === 'Transferido' ? 'bg-blue-50 text-blue-600' :
                      'bg-amber-50 text-amber-600'
                    }`}>{tx.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
