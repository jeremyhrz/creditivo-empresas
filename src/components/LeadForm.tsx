/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Sparkles, Building2, UserCircle, Smartphone } from 'lucide-react';
import { LeadFormInput } from '../types';

interface LeadFormProps {
  preSelectedType?: 'mayorista' | 'emprendedor' | 'nomina' | 'empresa' | null;
  formId?: string;
}

const CITIES = [
  'Valencia',
  'Caracas',
  'Maracaibo',
  'Barquisimeto',
  'Maracay',
  'San Cristóbal',
  'Puerto La Cruz',
  'Mérida',
  'Maturín',
  'Barinas',
  'Margarita',
  'Otra Ciudad'
];

const IVOO_BRANCHES = [
  'IVOO Valencia (Guaparo - Sede Principal)',
  'IVOO Caracas (Av. Las Mercedes)',
  'IVOO Maracaibo (Av. Fuerzas Armadas)',
  'IVOO Barquisimeto (Av. Venezuela)',
  'IVOO Maracay (Av. Las Delicias)',
  'IVOO San Cristóbal (Av. 19 de Abril)',
  'IVOO Puerto La Cruz (Av. Intercomunal)',
  'IVOO Mérida (Av. Las Américas)',
  'IVOO Lechería',
  'Plataforma Online / Despacho a domicilio'
];

export default function LeadForm({ preSelectedType, formId = 'formulario-solicitud' }: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormInput>({
    fullName: '',
    identityDoc: '',
    phone: '',
    email: '',
    requestType: 'mayorista',
    city: '',
    ivooBranch: '',
    message: '',
    acceptedContact: true
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormInput, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [shakeField, setShakeField] = useState(false);

  // Sync with prop preSelectedType
  useEffect(() => {
    if (preSelectedType) {
      setFormData((prev) => ({ ...prev, requestType: preSelectedType }));
    }
  }, [preSelectedType]);

  const validateField = (name: keyof LeadFormInput, value: any) => {
    let err = '';
    if (name === 'fullName') {
      if (!value.trim()) err = 'El nombre completo es requerido';
      else if (value.trim().split(' ').length < 2) err = 'Por favor, introduce nombre y apellido';
    } else if (name === 'identityDoc') {
      if (!value.trim()) err = 'La cédula o RIF comercial es mandatorio';
    } else if (name === 'phone') {
      if (!value.trim()) err = 'El número de teléfono es indispensable';
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) err = 'El correo electrónico es requerido';
      else if (!emailRegex.test(value)) err = 'Ingresa un correo electrónico válido';
    } else if (name === 'city') {
      if (!value) err = 'Selecciona tu ciudad';
    } else if (name === 'ivooBranch') {
      if (!value) err = 'Selecciona una sucursal de interés';
    } else if (name === 'acceptedContact') {
      if (!value) err = 'Debes aceptar ser contactado para continuar';
    }
    return err;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: val }));

    // Realtime clear errors
    const errorMsg = validateField(name as keyof LeadFormInput, val);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Partial<Record<keyof LeadFormInput, string>> = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key as keyof LeadFormInput, formData[key as keyof LeadFormInput]);
      if (err) newErrors[key as keyof LeadFormInput] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShakeField(true);
      setTimeout(() => setShakeField(false), 500);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate fintech lead capture
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        fullName: '',
        identityDoc: '',
        phone: '',
        email: '',
        requestType: 'mayorista',
        city: '',
        ivooBranch: '',
        message: '',
        acceptedContact: true
      });
    }, 1500);
  };

  const getBadgeIcon = () => {
    switch (formData.requestType) {
      case 'mayorista': return <Building2 className="w-6 h-6 text-emerald-600" />;
      case 'emprendedor': return <UserCircle className="w-6 h-6 text-emerald-600" />;
      case 'nomina': return <Smartphone className="w-6 h-6 text-emerald-600" />;
      default: return <Sparkles className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div
      id={formId}
      className={`bg-white rounded-[2rem] border border-slate-100 p-8 md:p-12 shadow-xl relative overflow-hidden transition-all duration-300 ${
        shakeField ? 'animate-bounce' : ''
      }`}
    >
      {/* Decorative top green accent line */}
      <span className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#10D66B] to-[#006B3F]"></span>

      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            key="success-state"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-100">
              <CheckCircle2 className="w-12 h-12 text-[#10D66B]" />
            </div>
            
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              ¡Solicitud Recibida con éxito!
            </h3>
            
            <div className="max-w-lg mx-auto text-base text-slate-600 space-y-4 leading-relaxed">
              <p>
                <strong>Recibimos tus datos.</strong> Nuestro equipo de analistas de Creditivoo iniciará la revisión de tu perfil comercial de inmediato.
              </p>
              <p className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-sm">
                Te contactaremos por WhatsApp o correo electrónico para coordinar la carga digital de soportes adicionales y finiquitar la asignación de tu línea disponible.
              </p>
            </div>

            <button
              onClick={() => setSubmitStatus('idle')}
              className="mt-10 px-8 py-4 bg-[#006B3F] hover:bg-[#005530] text-white text-base font-bold rounded-xl shadow-md transition-all cursor-pointer"
            >
              Realizar otra solicitud
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form-fields"
            onSubmit={handleSubmit}
            className="space-y-8 text-left"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Comienza tu solicitud Creditivoo
              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Déjanos tus datos de contacto iniciales. Evaluaremos tu perfil para contactarte y coordinar tu línea de compra en IVOO.
              </p>
            </div>

            {/* Request Type Dynamic Badge Header */}
            <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100/50">
                {getBadgeIcon()}
              </div>
              <div>
                <p className="text-xs uppercase font-extrabold text-slate-400 tracking-widest leading-none mb-1.5">Perfil Seleccionado</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold text-slate-900 capitalize tracking-tight">
                    {formData.requestType === 'mayorista' && 'Mayorista / Compra Comercial'}
                    {formData.requestType === 'emprendedor' && 'Emprendedor Independiente'}
                    {formData.requestType === 'nomina' && 'Colaborador Creditivoo Nómina'}
                    {formData.requestType === 'empresa' && 'Empresa interesada en Afiliarse'}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-sm font-bold text-slate-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Ej. Carlos Pérez"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-white border rounded-xl text-base text-slate-800 transition-all shadow-sm focus:outline-none focus:bg-white ${
                    errors.fullName ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  }`}
                />
                {errors.fullName && (
                  <span className="text-xs font-semibold text-orange-600 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Identity Document (Cedula or RIF) */}
              <div className="flex flex-col gap-2">
                <label htmlFor="identityDoc" className="text-sm font-bold text-slate-700">
                  Cédula o RIF comercial
                </label>
                <input
                  type="text"
                  id="identityDoc"
                  name="identityDoc"
                  placeholder="Ej. J-12345678-9 o V-12345678"
                  value={formData.identityDoc}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-white border rounded-xl text-base text-slate-800 transition-all shadow-sm focus:outline-none focus:bg-white ${
                    errors.identityDoc ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  }`}
                />
                {errors.identityDoc && (
                  <span className="text-xs font-semibold text-orange-600 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errors.identityDoc}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-bold text-slate-700">
                  Teléfono de contacto / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ej. 0414-1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-white border rounded-xl text-base text-slate-800 transition-all shadow-sm focus:outline-none focus:bg-white ${
                    errors.phone ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  }`}
                />
                {errors.phone && (
                  <span className="text-xs font-semibold text-orange-600 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-slate-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="carlos@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-white border rounded-xl text-base text-slate-800 transition-all shadow-sm focus:outline-none focus:bg-white ${
                    errors.email ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  }`}
                />
                {errors.email && (
                  <span className="text-xs font-semibold text-orange-600 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Request Type dropdown */}
              <div className="flex flex-col gap-2 md:col-span-1">
                <label htmlFor="requestType" className="text-sm font-bold text-slate-700">
                  Tipo de Solicitud
                </label>
                <select
                  id="requestType"
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-base text-slate-800 shadow-sm focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option value="mayorista">Mayorista / Compra Comercial</option>
                  <option value="emprendedor">Emprendedor Independiente</option>
                  <option value="nomina">Colaborador Nómina</option>
                  <option value="empresa">Empresa Interesada</option>
                </select>
              </div>

              {/* City */}
              <div className="flex flex-col gap-2 md:col-span-1">
                <label htmlFor="city" className="text-sm font-bold text-slate-700">
                  Ciudad de residencia
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-white border rounded-xl text-base text-slate-800 shadow-sm focus:outline-none focus:bg-white ${
                    errors.city ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  }`}
                >
                  <option value="">-- Selecciona --</option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.city && (
                  <span className="text-xs font-semibold text-orange-600 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errors.city}
                  </span>
                )}
              </div>

              {/* IVOO Branch */}
              <div className="flex flex-col gap-2 md:col-span-1">
                <label htmlFor="ivooBranch" className="text-sm font-bold text-slate-700">
                  Sucursal de interés
                </label>
                <select
                  id="ivooBranch"
                  name="ivooBranch"
                  value={formData.ivooBranch}
                  onChange={handleChange}
                  className={`w-full px-5 py-4 bg-white border rounded-xl text-base text-slate-800 shadow-sm focus:outline-none focus:bg-white ${
                    errors.ivooBranch ? 'border-orange-300 focus:ring-2 focus:ring-orange-300/50' : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  }`}
                >
                  <option value="">-- Selecciona sucursal --</option>
                  {IVOO_BRANCHES.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                {errors.ivooBranch && (
                  <span className="text-xs font-semibold text-orange-600 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errors.ivooBranch}
                  </span>
                )}
              </div>
            </div>

            {/* Optional message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-slate-700">
                Mensaje adicional o descripción del negocio (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Ej. Vendo teléfonos en Puerto Cabello a través de WhatsApp Web y catálogo digital..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-base text-slate-800 shadow-sm transition-all focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 resize-none"
              ></textarea>
            </div>

            {/* Verification Checkbox */}
            <div className="flex flex-col gap-3 pt-6 border-t border-slate-100">
              <label className="relative flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="acceptedContact"
                  checked={formData.acceptedContact}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-[#10D66B] focus:ring-[#10D66B] transition-all cursor-pointer"
                />
                <span className="text-sm text-slate-500 leading-relaxed select-none group-hover:text-slate-700 transition-colors">
                  Acepto ser contactado por los analistas y asesores comerciales de Creditivoo para dar continuidad a mi solicitud y remitir recaudos adicionales.
                </span>
              </label>
              {errors.acceptedContact && (
                <span className="text-xs font-semibold text-orange-600 flex items-center gap-1.5 pl-9">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errors.acceptedContact}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 py-5 bg-[#10D66B] hover:bg-[#00B555] disabled:bg-opacity-50 text-white font-extrabold text-lg tracking-wide rounded-xl shadow-lg shadow-[#10D66B]/20 transition-all flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>{isSubmitting ? 'Procesando tu solicitud...' : 'Enviar solicitud oficial'}</span>
              {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
