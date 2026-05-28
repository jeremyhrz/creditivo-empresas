/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, UserCheck, Smartphone, Check, ArrowRight, FileText, Sparkles, Building2, TrendingUp } from 'lucide-react';
import StatusBadge from './StatusBadge';
import logoSecundario from '../../assets/logo-secundario.png';

export default function MobileMockup() {
  const [step, setStep] = useState<number>(1);
  const [selectedProfile, setSelectedProfile] = useState<string>('mayorista');
  const [isSubmittingDoc, setIsSubmittingDoc] = useState<boolean>(false);
  const [docProgress, setDocProgress] = useState<number>(0);

  const startDocUpload = () => {
    setIsSubmittingDoc(true);
    setDocProgress(10);
    const interval = setInterval(() => {
      setDocProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setStep(4);
            setIsSubmittingDoc(false);
          }, 800);
          return 100;
        }
        return prev + 15;
      });
    }, 150);
  };

  const resetSimulator = () => {
    setStep(1);
    setSelectedProfile('mayorista');
    setDocProgress(0);
    setIsSubmittingDoc(false);
  };

  return (
    <div className="relative w-full max-w-[340px] mx-auto xl:max-w-[370px] flex items-center justify-center">
      
      {/* ━━━ PHONE DEVICE FRAME ━━━ */}
      <div className="relative aspect-[9/18.5] w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black rounded-[52px] p-3 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] border-[3px] border-gray-700/60 ring-1 ring-gray-500/10 flex flex-col overflow-hidden">
        
        {/* Dynamic Island notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[22px] w-[120px] bg-black rounded-b-[18px] z-20 flex items-center justify-center gap-2">
          <div className="h-[6px] w-[6px] bg-gray-700 rounded-full"></div>
          <div className="h-[4px] w-[36px] bg-gray-800 rounded-full"></div>
        </div>

        {/* Embedded Mobile Canvas */}
        <div className="w-full h-full bg-gradient-to-b from-white to-gray-50/80 rounded-[42px] overflow-hidden relative flex flex-col pt-7 font-sans select-none border border-white/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]">
          
          {/* Mobile Status Bar */}
          <div className="px-5 py-2 flex justify-between items-center text-[10px] font-bold text-gray-400">
            <span>9:41 AM</span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">Creditivoo Red</span>
            </div>
          </div>

          {/* Dynamic App Content */}
          <div className="flex-1 flex flex-col p-4 overflow-hidden relative">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    <div className="flex justify-center my-2">
                      <img
                        src={logoSecundario}
                        alt="Creditivoo"
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                    
                    <h3 className="text-center font-extrabold text-gray-900 text-base leading-tight mt-2">
                      Tu línea digital IVOO
                    </h3>
                    <p className="text-center text-[10px] text-gray-400 mt-1.5 font-medium">
                      Sin bancos. Sin papeleo. Sin vueltas.
                    </p>

                    <div className="space-y-2.5 mt-5">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <p className="text-[11px] font-bold text-gray-800">100% Protegido</p>
                          <p className="text-[9px] text-gray-400 font-medium">Datos encriptados de extremo a extremo</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                          <UserCheck className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <p className="text-[11px] font-bold text-gray-800">Tres Perfiles</p>
                          <p className="text-[9px] text-gray-400 font-medium">Mayorista, emprendedor o nómina</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <button
                      onClick={() => setStep(2)}
                      className="w-full py-3 bg-gradient-to-b from-[#12E074] to-[#0DBF5E] text-white rounded-xl text-xs font-extrabold shadow-[0_4px_14px_0_rgba(16,214,107,0.25)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.97]"
                    >
                      Comenzar Solicitud
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    <span className="text-[9px] font-bold text-[#006B3F] bg-emerald-50 px-2.5 py-1 rounded-full">
                      Paso 2 de 5
                    </span>
                    <h3 className="font-extrabold text-gray-900 text-base mt-2 text-left leading-tight">
                      ¿Cuál es tu perfil?
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-1 text-left font-medium">
                      Selecciona el tipo de línea que necesitas.
                    </p>

                    <div className="space-y-2.5 mt-4">
                      {[
                        { id: 'mayorista', label: 'Mayorista / Negocio', desc: 'Inventario y volumen' },
                        { id: 'emprendedor', label: 'Emprendedor', desc: 'Comercio independiente' },
                        { id: 'nomina', label: 'Nómina', desc: 'Empleado de empresa afiliada' }
                      ].map((prof) => (
                        <div
                          key={prof.id}
                          onClick={() => setSelectedProfile(prof.id)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 flex items-center justify-between ${
                            selectedProfile === prof.id
                              ? 'border-[#10D66B] bg-emerald-50/50 ring-1 ring-[#10D66B] shadow-sm'
                              : 'border-gray-100 hover:border-gray-200 bg-white'
                          }`}
                        >
                          <div>
                            <p className="text-[11px] font-bold text-gray-800">{prof.label}</p>
                            <p className="text-[9px] text-gray-400 font-medium">{prof.desc}</p>
                          </div>
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                            selectedProfile === prof.id ? 'border-[#10D66B] bg-[#10D66B] text-white scale-110' : 'border-gray-300'
                          }`}>
                            {selectedProfile === prof.id && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl text-xs font-bold transition-all cursor-pointer border border-gray-100"
                    >
                      Atrás
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-2.5 bg-gradient-to-b from-[#12E074] to-[#0DBF5E] text-white rounded-xl text-xs font-bold shadow-md shadow-[#10D66B]/15 transition-all cursor-pointer"
                    >
                      Siguiente
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    <span className="text-[9px] font-bold text-[#006B3F] bg-emerald-50 px-2.5 py-1 rounded-full">
                      Paso 4 de 5
                    </span>
                    <h3 className="font-extrabold text-gray-900 text-base mt-2 text-left leading-tight">
                      Sube tus documentos
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-1 text-left font-medium">
                      Carga digital en segundos para iniciar tu revisión.
                    </p>

                    <div className="mt-4 space-y-3">
                      <div className="border border-dashed border-gray-200 rounded-xl p-4 bg-gray-50/50 flex flex-col items-center justify-center">
                        <FileText className="w-5 h-5 text-gray-300 mb-1.5" />
                        <p className="text-[10px] font-bold text-gray-700">Cédula & RIF</p>
                        <p className="text-[8px] text-gray-400 font-medium">PDF o foto legible</p>
                      </div>

                      <div className="border border-dashed border-gray-200 rounded-xl p-4 bg-gray-50/50 flex flex-col items-center justify-center">
                        <Smartphone className="w-5 h-5 text-gray-300 mb-1.5" />
                        <p className="text-[10px] font-bold text-gray-700">Prueba de Actividad</p>
                        <p className="text-[8px] text-gray-400 font-medium">WhatsApp, Instagram o facturas</p>
                      </div>

                      {isSubmittingDoc && (
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[8px] text-gray-500">
                            <span className="font-medium">Subiendo archivos...</span>
                            <span className="font-bold">{docProgress}%</span>
                          </div>
                          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-[#10D66B] to-[#00B555] h-full transition-all duration-150 rounded-full" style={{ width: `${docProgress}%` }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      disabled={isSubmittingDoc}
                      onClick={() => setStep(2)}
                      className="flex-1 py-2.5 bg-gray-50 disabled:opacity-50 hover:bg-gray-100 text-gray-600 rounded-xl text-xs font-bold transition-all cursor-pointer border border-gray-100"
                    >
                      Atrás
                    </button>
                    <button
                      disabled={isSubmittingDoc}
                      onClick={startDocUpload}
                      className="flex-1 py-2.5 bg-gradient-to-b from-[#12E074] to-[#0DBF5E] disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-md shadow-[#10D66B]/15 transition-all cursor-pointer"
                    >
                      {isSubmittingDoc ? 'Cargando...' : 'Confirmar & Cargar'}
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full justify-between items-center text-center"
                >
                  <div className="my-auto py-2">
                    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-[#10D66B] mx-auto mb-3 border border-emerald-100">
                      <Sparkles className="w-6 h-6 fill-current animate-bounce" />
                    </div>
                    
                    <span className="text-[10px] font-bold text-white bg-emerald-600 px-3 py-1 rounded-full inline-block">
                      ¡Solicitud Recibida!
                    </span>

                    <h3 className="font-extrabold text-gray-900 text-base mt-3 leading-tight">
                      Evaluación en Progreso
                    </h3>
                    
                    <p className="text-[10px] text-gray-400 mt-2 max-w-[210px] mx-auto font-medium">
                      Perfil <strong className="text-gray-800 capitalize">{selectedProfile}</strong> recibido con éxito.
                    </p>

                    <div className="mt-4 p-3.5 bg-emerald-50/50 border border-emerald-100 rounded-2xl mx-auto max-w-[200px]">
                      <p className="text-[9px] text-emerald-700 uppercase tracking-widest font-black">Línea Estimada</p>
                      <p className="text-2xl font-black text-[#006B3F] mt-1 tracking-tight">$1,500</p>
                      <p className="text-[8px] text-gray-400 mt-1 font-medium">Sujeto a validación de documentos</p>
                    </div>
                  </div>

                  <div className="w-full mt-2">
                    <button
                      onClick={resetSimulator}
                      className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
                    >
                      Probar de Nuevo
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ━━━ GLASSMORPHIC FLOATING LABELS — Asymmetric Strategic Positioning ━━━ */}
      
      {/* ── Label 1: Línea Activa — Top Left, overshooting ── */}
      <motion.div 
        initial={{ opacity: 0, y: 24, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-14 top-12 z-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="backdrop-blur-md bg-white/80 border border-white/20 shadow-2xl rounded-2xl p-4 transition-transform duration-500 hover:scale-105 max-w-[165px]"
        >
          <div className="flex items-center gap-2 mb-2.5">
            <div className="p-1.5 bg-emerald-50 rounded-lg">
              <TrendingUp className="w-3.5 h-3.5 text-[#10D66B]" />
            </div>
            <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider">Línea Activa</span>
          </div>
          <p className="text-lg font-black text-gray-900 tracking-tight leading-none">$2,400.00</p>
          <p className="text-[9px] text-emerald-600 font-bold mt-1 tracking-wide">Disponible en IVOO</p>
        </motion.div>
      </motion.div>

      {/* ── Label 2: Cédula & RIF — Bottom Right, offset ── */}
      <motion.div 
        initial={{ opacity: 0, y: 24, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-16 bottom-1/3 z-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.2 }}
          className="backdrop-blur-md bg-white/80 border border-white/20 shadow-2xl rounded-2xl p-4 transition-transform duration-500 hover:scale-105 max-w-[180px]"
        >
          <div className="flex gap-2.5 items-center">
            <div className="relative">
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400"></div>
              <div className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping opacity-40"></div>
            </div>
            <span className="text-[10px] font-extrabold text-gray-800 tracking-tight">Cédula & RIF</span>
          </div>
          <p className="text-[9px] text-gray-400 mt-2 leading-snug font-medium">En revisión por analistas</p>
          <div className="mt-2.5">
            <StatusBadge status="pending" text="Revisión Manual" />
          </div>
        </motion.div>
      </motion.div>

      {/* ── Label 3: Convenio Nómina — Bottom Left, lower offset ── */}
      <motion.div 
        initial={{ opacity: 0, y: 24, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-12 bottom-[15%] z-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }}
          className="backdrop-blur-md bg-white/80 border border-white/20 shadow-2xl rounded-2xl p-4 transition-transform duration-500 hover:scale-105 max-w-[170px]"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-extrabold text-gray-800">Convenio Nómina</p>
              <p className="text-[8px] text-gray-400 mt-0.5 font-medium">Validado por tu empresa</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
}
