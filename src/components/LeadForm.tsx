/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Building2, UserCircle, Smartphone, Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { LeadFormInput } from '../types';

interface LeadFormProps {
  preSelectedType?: 'mayorista' | 'emprendedor' | 'nomina' | 'empresa' | null;
  formId?: string;
}

const REVENUE_TIERS = [
  'Menos de $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  'Más de $50,000'
];

const SECTORS = [
  'Tecnología y Electrónica',
  'Electrodomésticos',
  'Retail general',
  'Servicios Profesionales',
  'Salud y Farmacia',
  'Otro sector'
];

export default function LeadForm({ preSelectedType, formId = 'formulario-solicitud' }: LeadFormProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const [shakeField, setShakeField] = useState(false);

  const [formData, setFormData] = useState<LeadFormInput>({
    companyName: '',
    companyRif: '',
    companyEmail: '',
    monthlyRevenue: '',
    commercialSector: '',
    repName: '',
    repPhone: '',
    requestType: 'mayorista',
    acceptedContact: true
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormInput, string>>>({});

  useEffect(() => {
    if (preSelectedType) {
      setFormData(prev => ({ ...prev, requestType: preSelectedType }));
    }
  }, [preSelectedType]);

  const validateStep = (step: number) => {
    const newErrors: Partial<Record<keyof LeadFormInput, string>> = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.companyName.trim()) newErrors.companyName = 'Ingresa el nombre de la empresa.';
      if (!formData.companyRif.trim()) newErrors.companyRif = 'El RIF es obligatorio.';
      if (!formData.companyEmail.trim()) newErrors.companyEmail = 'Correo corporativo requerido.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail)) newErrors.companyEmail = 'Correo inválido.';
    } else if (step === 2) {
      if (!formData.monthlyRevenue) newErrors.monthlyRevenue = 'Selecciona un rango de facturación.';
      if (!formData.commercialSector) newErrors.commercialSector = 'Selecciona tu sector.';
    } else if (step === 3) {
      if (!formData.repName.trim()) newErrors.repName = 'Ingresa el nombre del representante.';
      if (!formData.repPhone.trim()) newErrors.repPhone = 'Número de contacto requerido.';
      if (!formData.acceptedContact) newErrors.acceptedContact = 'Debes aceptar los términos.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
      setShakeField(true);
      setTimeout(() => setShakeField(false), 500);
    } else {
      setErrors({});
    }

    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (errors[name as keyof LeadFormInput]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => (prev + 1) as 1 | 2 | 3);
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => (prev - 1) as 1 | 2 | 3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setCurrentStep(1);
    }, 1500);
  };

  // UI Helpers
  const getBadgeIcon = () => {
    switch (formData.requestType) {
      case 'mayorista': return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'emprendedor': return <UserCircle className="w-5 h-5 text-emerald-600" />;
      case 'nomina': return <Smartphone className="w-5 h-5 text-emerald-600" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div
      id={formId}
      className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
    >
      {/* Decorative top accent */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-200 via-[#10D66B] to-[#006B3F]"></div>

      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20 px-8"
        >
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100">
            <CheckCircle2 className="w-10 h-10 text-[#10D66B]" />
          </div>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
            ¡Solicitud Recibida!
          </h3>
          <p className="text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
            Nuestro equipo analizará tu perfil comercial y te contactará en menos de 24 horas para darte respuesta.
          </p>
          <button
            onClick={() => { setSubmitStatus('idle'); setFormData({ ...formData, companyName: '', companyRif: '', companyEmail: '', monthlyRevenue: '', commercialSector: '', repName: '', repPhone: '' }); }}
            className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer"
          >
            Nueva Solicitud
          </button>
        </motion.div>
      ) : (
        <div className="p-8 md:p-12">
          {/* Progress Indicator */}
          <div className="mb-12 relative max-w-sm mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-[#10D66B] -translate-y-1/2 z-0 transition-all duration-500 ease-out"
              style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
            ></div>
            <div className="relative z-10 flex justify-between items-center">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                    currentStep === step 
                      ? 'bg-white border-[#10D66B] text-[#10D66B] shadow-[0_0_15px_rgba(16,214,107,0.3)] scale-110' 
                      : currentStep > step 
                        ? 'bg-[#10D66B] border-[#10D66B] text-white' 
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                  }`}>
                    {currentStep > step ? <Check className="w-4 h-4" /> : step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {currentStep === 1 ? 'Datos Legales' : currentStep === 2 ? 'Volumen Comercial' : 'Contacto Directo'}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Paso {currentStep} de 3
              </p>
            </div>
            <div className="hidden sm:flex gap-2 items-center px-3 py-1.5 bg-slate-50 border border-slate-200/60 rounded-lg">
              {getBadgeIcon()}
              <span className="text-[10px] font-extrabold text-slate-600 uppercase tracking-widest">
                {formData.requestType}
              </span>
            </div>
          </div>

          <form className={`space-y-6 transition-transform duration-300 ${shakeField ? 'animate-bounce' : ''}`}>
            
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nombre de la Empresa / Comercial</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Ej. Inversiones Global C.A."
                      className={`w-full px-5 py-4 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white transition-all ${
                        errors.companyName ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    />
                    {errors.companyName && <span className="text-xs text-orange-500 font-semibold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5"/> {errors.companyName}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">RIF Comercial o Personal</label>
                    <input
                      type="text"
                      name="companyRif"
                      value={formData.companyRif}
                      onChange={handleChange}
                      placeholder="Ej. J-12345678-9"
                      className={`w-full px-5 py-4 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white transition-all ${
                        errors.companyRif ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    />
                    {errors.companyRif && <span className="text-xs text-orange-500 font-semibold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5"/> {errors.companyRif}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Correo Corporativo</label>
                    <input
                      type="email"
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleChange}
                      placeholder="contacto@empresa.com"
                      className={`w-full px-5 py-4 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white transition-all ${
                        errors.companyEmail ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    />
                    {errors.companyEmail && <span className="text-xs text-orange-500 font-semibold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5"/> {errors.companyEmail}</span>}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Estimado de Facturación Mensual</label>
                    <select
                      name="monthlyRevenue"
                      value={formData.monthlyRevenue}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white transition-all ${
                        errors.monthlyRevenue ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    >
                      <option value="">Seleccione un rango</option>
                      {REVENUE_TIERS.map(tier => <option key={tier} value={tier}>{tier}</option>)}
                    </select>
                    {errors.monthlyRevenue && <span className="text-xs text-orange-500 font-semibold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5"/> {errors.monthlyRevenue}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Sector Comercial</label>
                    <select
                      name="commercialSector"
                      value={formData.commercialSector}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white transition-all ${
                        errors.commercialSector ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    >
                      <option value="">Seleccione su sector primario</option>
                      {SECTORS.map(sector => <option key={sector} value={sector}>{sector}</option>)}
                    </select>
                    {errors.commercialSector && <span className="text-xs text-orange-500 font-semibold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5"/> {errors.commercialSector}</span>}
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nombre del Representante</label>
                    <input
                      type="text"
                      name="repName"
                      value={formData.repName}
                      onChange={handleChange}
                      placeholder="Ej. Carlos Pérez"
                      className={`w-full px-5 py-4 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white transition-all ${
                        errors.repName ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    />
                    {errors.repName && <span className="text-xs text-orange-500 font-semibold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5"/> {errors.repName}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Teléfono Directo / WhatsApp</label>
                    <input
                      type="tel"
                      name="repPhone"
                      value={formData.repPhone}
                      onChange={handleChange}
                      placeholder="Ej. 0414-1234567"
                      className={`w-full px-5 py-4 bg-slate-50 border rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white transition-all ${
                        errors.repPhone ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500'
                      }`}
                    />
                    {errors.repPhone && <span className="text-xs text-orange-500 font-semibold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5"/> {errors.repPhone}</span>}
                  </div>
                  
                  <div className="pt-4 flex flex-col gap-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="acceptedContact"
                        checked={formData.acceptedContact}
                        onChange={handleChange}
                        className="mt-0.5 h-5 w-5 rounded border-slate-300 text-[#10D66B] focus:ring-[#10D66B] cursor-pointer"
                      />
                      <span className="text-[13px] text-slate-500 leading-relaxed group-hover:text-slate-700">
                        Acepto que Creditivoo evalúe esta solicitud preliminar y me contacte para continuar con el proceso comercial formal.
                      </span>
                    </label>
                    {errors.acceptedContact && <span className="text-xs text-orange-500 font-semibold flex items-center gap-1 ml-8"><AlertCircle className="w-3.5 h-3.5"/> {errors.acceptedContact}</span>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-6 border-t border-slate-100">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-sm rounded-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </button>
              )}
              
              <button
                type="button"
                onClick={currentStep === 3 ? handleSubmit : handleNext}
                disabled={isSubmitting}
                className={`flex-1 py-4 bg-[#10D66B] hover:bg-[#00B555] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-extrabold text-sm rounded-xl shadow-[0_8px_20px_rgba(16,214,107,0.2)] hover:shadow-[0_12px_25px_rgba(16,214,107,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  currentStep === 3 ? 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/20 hover:shadow-slate-900/30' : ''
                }`}
              >
                <span>
                  {isSubmitting 
                    ? 'Procesando...' 
                    : currentStep === 3 
                      ? 'Enviar Solicitud Oficial' 
                      : 'Continuar'
                  }
                </span>
                {!isSubmitting && (
                  currentStep === 3 ? <Send className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
                )}
              </button>
            </div>
            
          </form>
        </div>
      )}
    </div>
  );
}
