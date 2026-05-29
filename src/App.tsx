/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  Smartphone,
  Building,
  Check,
  ChevronRight,
  FileCheck2,
  ShieldCheck,
  Zap,
  Package,
  Users,
  CreditCard,
  BarChart3,
  Lock,
  Globe
} from 'lucide-react';

// Data lists
import { SEGMENTS, BENEFITS, STEPS } from './landingData';

// Subcomponents
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SegmentCard from './components/SegmentCard';
import BenefitCard from './components/BenefitCard';
import StepCard from './components/StepCard';
import RequirementTabs from './components/RequirementTabs';
import StatusBadge from './components/StatusBadge';
import LeadForm from './components/LeadForm';
import CreditSimulator from './components/CreditSimulator';
import DashboardSimulation from './components/DashboardSimulation';
import FAQAccordion from './components/FAQAccordion';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<string>('inicio');

  // Lead form pre-selection state
  const [selectedLeadType, setSelectedLeadType] = useState<'mayorista' | 'emprendedor' | 'nomina' | 'empresa' | null>(null);

  const scrollToLeadForm = () => {
    setTimeout(() => {
      const formElement = document.getElementById('formulario-solicitud-lead');
      if (formElement) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = formElement.getBoundingClientRect().top;
        window.scrollTo({
          top: elementRect - bodyRect - offset,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  // Specific handler when user clicks a CTA button inside content
  const handleActionClick = (profileId: 'mayorista' | 'emprendedor' | 'nomina' | 'empresa') => {
    setSelectedLeadType(profileId);
    setCurrentView('inicio');
    scrollToLeadForm();
  };

  // Smooth scroll utility for footer links (fallback logic)
  const handleScrollToSection = (elementSelector: string) => {
    const mapping: Record<string, string> = {
      '#inicio': 'inicio',
      '#soluciones': 'soluciones',
      '#como-funciona': 'como-funciona',
      '#requisitos': 'requisitos',
      '#empresas': 'empresas',
      '#preguntas-frecuentes': 'faq'
    };
    
    if (mapping[elementSelector]) {
      setCurrentView(mapping[elementSelector]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'inicio':
        return (
          <motion.div
            key="inicio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Hero Section */}
            <HeroSection onCtaClick={() => handleActionClick('mayorista')} onCompanyClick={() => handleActionClick('empresa')} />
            
            {/* Credit Simulator Premium Component */}
            <section className="py-20 md:py-24 bg-white relative z-10 -mt-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <CreditSimulator />
              </div>
            </section>

            {/* Formulario Principal de Leads */}
            <section id="formulario-solicitud-lead" className="py-28 md:py-36 bg-slate-50/60 border-t border-slate-100">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center space-y-4">
                  <span className="text-xs font-bold text-emerald-700 bg-white border border-emerald-100/50 shadow-sm px-4 py-1.5 rounded-full uppercase tracking-widest">
                    Postulación Digital
                  </span>
                  <h2 className="font-black tracking-tight text-slate-900 text-3xl md:text-5xl leading-[1.1]">
                    Solicita tu línea hoy mismo
                  </h2>
                  <p className="text-lg text-slate-500 font-normal max-w-lg mx-auto">
                    Nuestros analistas te guiarán paso a paso por WhatsApp.
                  </p>
                </div>
                <LeadForm preSelectedType={selectedLeadType} />
              </div>
            </section>
          </motion.div>
        );

      case 'soluciones':
        return (
          <motion.div
            key="soluciones"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-24"
          >
            {/* Segment Selection Cards */}
            <section className="relative py-28 md:py-36 bg-white overflow-hidden">
              {/* ── Ambient Glow ── */}
              <div className="absolute -top-10 left-1/4 w-72 h-72 bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="absolute -bottom-16 right-1/3 w-64 h-64 bg-cyan-400/[0.06] rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-14">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1] }}
                  className="max-w-2xl mx-auto space-y-4"
                >
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100/50 px-4 py-1.5 rounded-full uppercase tracking-widest">
                    Opciones de financiamiento
                  </span>
                  <h2 className="font-black tracking-tight text-slate-900 text-3xl md:text-5xl leading-[1.1]">
                    Elige el Creditivoo que va contigo
                  </h2>
                  <p className="text-lg text-slate-500 font-normal max-w-lg mx-auto">
                    Tres modalidades diseñadas para tu perfil comercial.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {SEGMENTS.map((segment, index) => (
                    <SegmentCard
                      key={segment.id}
                      segment={segment}
                      isFeatured={index === 0}
                      index={index}
                      onSelect={(id) => handleActionClick(id as any)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* What is Creditivoo — Grid instead of dense paragraphs */}
            <section className="relative py-28 md:py-36 bg-slate-50/60 border-t border-slate-100 overflow-hidden">
              {/* ── Ambient Glow ── */}
              <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-400/[0.07] rounded-full blur-[120px] pointer-events-none"></div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1] }}
                  className="text-center max-w-2xl mx-auto space-y-4"
                >
                  <span className="text-xs font-bold text-emerald-700 bg-white border border-emerald-100/50 shadow-sm px-4 py-1.5 rounded-full uppercase tracking-widest">
                    ¿Qué es Creditivoo?
                  </span>
                  <h2 className="font-black tracking-tight text-slate-900 text-3xl md:text-5xl leading-[1.1]">
                    Financiamiento propio de IVOO
                  </h2>
                  <p className="text-lg text-slate-500 font-normal max-w-lg mx-auto">
                    No somos un banco. Somos tu línea directa de compra.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {BENEFITS.map((benefit, index) => (
                    <BenefitCard key={benefit.id} benefit={benefit} index={index} />
                  ))}
                </div>
              </div>
            </section>

            {/* Creditivoo Mayorista — Clean grid, no dense text */}
            <section className="relative py-28 md:py-36 bg-white border-t border-slate-100 overflow-hidden">
              {/* ── Ambient Glow ── */}
              <div className="absolute -top-10 right-1/4 w-72 h-72 bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none"></div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Left: benefit grid cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1] }}
                    className="space-y-6 order-2 lg:order-1"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { icon: BarChart3, title: 'Perfil de ventas', desc: 'Asignación basada en tu actividad comercial.' },
                        { icon: Package, title: 'Sin historial previo', desc: 'No necesitas compras anteriores en IVOO.' },
                        { icon: ShieldCheck, title: 'Inventario directo', desc: 'Respaldado por el stock oficial de IVOO.' },
                        { icon: TrendingUp, title: 'Compras por volumen', desc: 'Ideal para re-abastecimiento corporativo.' }
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.215, 0.610, 0.355, 1] }}
                          className="relative group p-6 bg-white border border-slate-200/50 rounded-2xl space-y-3 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
                        >
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent"></div>
                          <div className="p-2.5 bg-emerald-50 rounded-xl w-fit border border-emerald-100/50 group-hover:shadow-emerald-200/40 group-hover:shadow-lg transition-shadow duration-500">
                            <item.icon className="w-5 h-5 text-emerald-600" />
                          </div>
                          <h4 className="font-extrabold text-slate-900 text-base">{item.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right: heading and CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.215, 0.610, 0.355, 1] }}
                    className="space-y-6 text-left order-1 lg:order-2"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-100/50">
                      <TrendingUp className="w-4 h-4" />
                      <span>Especial para Distribuidores</span>
                    </div>
                    <h2 className="font-black tracking-tight text-slate-900 text-3xl md:text-5xl leading-[1.1]">
                      Creditivoo Mayorista
                    </h2>
                    <p className="text-lg text-slate-500 font-normal max-w-md">
                      La línea pensada para mover inventario y ampliar tus oportunidades de crecimiento.
                    </p>
                    <button
                      onClick={() => handleActionClick('mayorista')}
                      className="px-8 py-4 bg-[#10D66B] hover:bg-[#00B555] text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-2 group"
                    >
                      <span>Solicitar Mayorista</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Creditivoo Emprendedores — Clean two-column */}
            <section className="py-28 md:py-36 bg-slate-50/60 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-6 text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 text-cyan-700 text-xs font-bold rounded-full border border-cyan-100">
                      <Smartphone className="w-4 h-4" />
                      <span>Comerciantes Independientes</span>
                    </div>
                    <h2 className="font-black tracking-tight text-slate-900 text-3xl md:text-5xl leading-[1.1]">
                      Creditivoo Emprendedores
                    </h2>
                    <p className="text-lg text-slate-500 font-normal max-w-md">
                      Haz crecer tu negocio digital u offline. Solo necesitas tu RIF personal al día.
                    </p>
                    <button
                      onClick={() => handleActionClick('emprendedor')}
                      className="px-8 py-4 bg-[#006B3F] hover:bg-[#005530] text-white font-extrabold text-sm rounded-xl shadow-lg cursor-pointer inline-flex items-center gap-2 group transition-all"
                    >
                      <span>Solicitar como emprendedor</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Requirements checklist card */}
                  <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <h4 className="text-xs font-extrabold text-cyan-700 uppercase tracking-widest flex items-center gap-2 mb-6">
                      <div className="p-1.5 bg-cyan-50 rounded-lg">
                        <FileCheck2 className="w-4 h-4 text-cyan-600" />
                      </div>
                      <span>Documentos Requeridos</span>
                    </h4>
                    <div className="divide-y divide-slate-100">
                      {['Cédula de Identidad', 'RIF Personal Vigente', 'Prueba de Vida (Selfie)', 'Capturas de ventas o redes'].map((doc, idx) => (
                        <div key={idx} className="py-4 flex justify-between items-center">
                          <span className="text-base font-bold text-slate-800">{doc}</span>
                          <span className="text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-100/50 px-3 py-1 rounded-full">Obligatorio</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Creditivoo Nómina — Two cards grid, no dense text */}
            <section className="relative py-28 md:py-36 bg-white border-t border-slate-100 overflow-hidden">
              {/* ── Ambient Glow ── */}
              <div className="absolute top-1/2 left-1/6 w-72 h-72 bg-indigo-400/[0.06] rounded-full blur-[120px] pointer-events-none"></div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Left: two stacked benefit cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1] }}
                    className="space-y-5 order-2 lg:order-1"
                  >
                    <div className="relative group p-8 bg-white border border-slate-200/50 rounded-2xl hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"></div>
                      <span className="text-xs font-black text-indigo-700 bg-indigo-50 px-3 py-1 rounded-lg uppercase tracking-widest inline-block mb-3 border border-indigo-100/50">Para la Empresa</span>
                      <p className="text-lg font-bold text-slate-900 leading-snug mb-2">Cero carga administrativa</p>
                      <p className="text-base text-slate-500">No compromete flujo de caja ni implica descuento de nómina.</p>
                    </div>
                    <div className="relative group p-8 bg-white border border-slate-200/50 rounded-2xl hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent"></div>
                      <span className="text-xs font-black text-[#006B3F] bg-emerald-50 px-3 py-1 rounded-lg uppercase tracking-widest inline-block mb-3 border border-emerald-100/50">Para el Colaborador</span>
                      <p className="text-lg font-bold text-slate-900 leading-snug mb-2">Acceso directo simplificado</p>
                      <p className="text-base text-slate-500">Línea de crédito verificando tu relación laboral.</p>
                    </div>
                  </motion.div>

                  {/* Right: heading and CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.215, 0.610, 0.355, 1] }}
                    className="space-y-6 text-left order-1 lg:order-2"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100/50">
                      <Building className="w-4 h-4" />
                      <span>Beneficio Laboral</span>
                    </div>
                    <h2 className="font-black tracking-tight text-slate-900 text-3xl md:text-5xl leading-[1.1]">
                      Creditivoo Nómina
                    </h2>
                    <p className="text-lg text-slate-500 font-normal max-w-md">
                      Un beneficio alternativo para colaboradores de empresas afiliadas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button
                        onClick={() => handleActionClick('empresa')}
                        className="px-8 py-4 bg-[#006B3F] hover:bg-[#005530] text-white font-extrabold text-sm rounded-xl shadow-lg cursor-pointer transition-all"
                      >
                        Afiliar mi empresa
                      </button>
                      <button
                        onClick={() => handleActionClick('nomina')}
                        className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-extrabold border border-slate-200 text-sm rounded-xl transition-all cursor-pointer shadow-sm"
                      >
                        Activar como colaborador
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
            <CTASection onCtaClick={() => handleActionClick('mayorista')} onCompanyClick={() => handleActionClick('empresa')} />
          </motion.div>
        );

      case 'como-funciona':
        return (
          <motion.div
            key="como-funciona"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-24"
          >
            <section className="relative py-28 md:py-36 bg-white overflow-hidden">
              {/* ── Ambient Glow ── */}
              <div className="absolute -top-10 left-1/4 w-72 h-72 bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="absolute bottom-0 right-1/3 w-56 h-56 bg-cyan-400/[0.05] rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-14">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1] }}
                  className="max-w-2xl mx-auto space-y-4"
                >
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100/50 px-4 py-1.5 rounded-full uppercase tracking-widest">
                    Paso a paso
                  </span>
                  <h2 className="font-black tracking-tight text-slate-900 text-3xl md:text-5xl leading-[1.1]">
                    Solicita tu línea en minutos
                  </h2>
                  <p className="text-lg text-slate-500 font-normal max-w-md mx-auto">
                    Sube tus documentos desde el celular. Nosotros procesamos todo.
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-4">
                  {STEPS.map((step, index) => (
                    <StepCard key={step.number} step={step} index={index} />
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="pt-8"
                >
                  <button
                    onClick={() => handleActionClick('mayorista')}
                    className="px-10 py-4 bg-[#006B3F] hover:bg-[#005530] text-white text-sm font-extrabold rounded-xl shadow-lg hover:shadow-emerald-200 transition-all cursor-pointer inline-flex items-center gap-2 group"
                  >
                    <span>Comenzar solicitud</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-slate-500 mt-4 max-w-sm mx-auto font-medium">
                    *Evaluación sujeta al horario de analistas de Creditivoo.
                  </p>
                </motion.div>
              </div>
            </section>
          </motion.div>
        );

      case 'requisitos':
        return (
          <motion.div
            key="requisitos"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-24"
          >
            <section className="relative py-28 md:py-36 bg-white overflow-hidden">
              {/* ── Ambient Glow ── */}
              <div className="absolute top-1/4 right-1/5 w-80 h-80 bg-emerald-400/[0.07] rounded-full blur-[120px] pointer-events-none"></div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1] }}
                  className="text-center max-w-2xl mx-auto space-y-4"
                >
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100/50 px-4 py-1.5 rounded-full uppercase tracking-widest">
                    Recaudación básica
                  </span>
                  <h2 className="font-black tracking-tight text-slate-900 text-3xl md:text-5xl leading-[1.1]">
                    Requisitos según tu perfil
                  </h2>
                  <p className="text-lg text-slate-500 font-normal max-w-md mx-auto">
                    Selecciona tu modalidad para ver los documentos requeridos.
                  </p>
                </motion.div>
                <RequirementTabs />
              </div>
            </section>
          </motion.div>
        );

      case 'empresas':
        return (
          <motion.div
            key="empresas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-24"
          >
            <section className="relative py-28 md:py-36 bg-slate-50/60 border-b border-slate-100 overflow-hidden">
              {/* ── Ambient Glow ── */}
              <div className="absolute -top-10 left-1/4 w-72 h-72 bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-400/[0.05] rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1] }}
                  className="text-center max-w-2xl mx-auto space-y-4"
                >
                  <span className="text-xs font-bold text-emerald-700 bg-white border border-emerald-100/50 shadow-sm px-4 py-1.5 rounded-full uppercase tracking-widest">
                    Aliados Corporativos
                  </span>
                  <h2 className="font-black tracking-tight text-slate-900 text-3xl md:text-5xl leading-[1.1]">
                    Ofrece Creditivoo a tu equipo
                  </h2>
                  <p className="text-lg text-slate-500 font-normal max-w-lg mx-auto">
                    Beneficio laboral de primer nivel sin costos de administración crediticia.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Users, title: 'Más valor', desc: 'Beneficio robusto para adquirir tecnología.' },
                    { icon: Lock, title: 'Validación simple', desc: 'Solo confirma la relación laboral.' },
                    { icon: CreditCard, title: 'Sin descuento', desc: 'El empleado paga directamente.' },
                    { icon: Globe, title: 'Pilotos controlados', desc: 'Empieza con un grupo clave.' }
                  ].map((card, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.215, 0.610, 0.355, 1] }}
                      className="relative group p-8 bg-white border border-slate-200/50 rounded-2xl text-left space-y-4 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent"></div>
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-400/[0.05] rounded-full blur-[40px] pointer-events-none group-hover:bg-emerald-400/[0.1] transition-all duration-700"></div>
                      <div className="relative p-3 rounded-xl bg-emerald-50 text-emerald-600 w-fit border border-emerald-100/50 group-hover:shadow-emerald-200/40 group-hover:shadow-lg transition-shadow duration-500">
                        <card.icon className="w-5 h-5" />
                      </div>
                      <h4 className="relative font-extrabold text-slate-900 text-lg">{card.title}</h4>
                      <p className="relative text-base text-slate-500">{card.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* ── Dashboard Simulation ── */}
                <div className="pt-8">
                  <DashboardSimulation />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center pt-4"
                >
                  <button
                    onClick={() => handleActionClick('empresa')}
                    className="px-10 py-4 bg-[#10D66B] hover:bg-[#00B555] text-white font-extrabold text-sm rounded-xl shadow-lg shadow-[#10D66B]/15 hover:shadow-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Quiero afiliar mi empresa</span>
                  </button>
                </motion.div>
              </div>
            </section>
            <CTASection onCtaClick={() => handleActionClick('mayorista')} onCompanyClick={() => handleActionClick('empresa')} />
          </motion.div>
        );

      case 'faq':
        return (
          <motion.div
            key="faq"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="pt-24"
          >
            <section className="relative py-28 md:py-36 bg-white overflow-hidden">
              {/* ── Ambient Glow ── */}
              <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-emerald-400/[0.06] rounded-full blur-[120px] pointer-events-none"></div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1] }}
                  className="text-center max-w-2xl mx-auto space-y-4"
                >
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100/50 px-4 py-1.5 rounded-full uppercase tracking-widest">
                    Resuelve tus dudas
                  </span>
                  <h2 className="font-black tracking-tight text-slate-900 text-3xl md:text-5xl leading-[1.1]">
                    Preguntas frecuentes
                  </h2>
                  <p className="text-lg text-slate-500 font-normal max-w-md mx-auto">
                    Respuestas claras sobre la línea Creditivoo de IVOO.
                  </p>
                </motion.div>
                <FAQAccordion />
              </div>
            </section>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-[#10D66B] selection:text-white flex flex-col">
      {/* Header Navigation Bar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onCtaClick={() => handleActionClick('mayorista')}
        onCompanyClick={() => handleActionClick('empresa')}
      />

      {/* Main Content Area -> Conditional Rendering */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>

      {/* Footer -> Always at the bottom */}
      <Footer onScrollToElement={handleScrollToSection} />
    </div>
  );
}
