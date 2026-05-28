/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MessageSquare, ShieldCheck, Globe } from 'lucide-react';
import logoSecundario from '../../assets/logo-secundario.png';

interface FooterProps {
  onScrollToElement: (selector: string) => void;
}

export default function Footer({ onScrollToElement }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onScrollToElement(href);
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ━━━ Main Footer Grid — Symmetric 4-column ━━━ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-slate-100">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <img 
              src={logoSecundario} 
              alt="Creditivoo Empresas" 
              className="h-9 md:h-10 w-auto" 
            />
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              La solución de financiamiento propio de IVOO para tecnología, electrodomésticos y bienes corporativos.
            </p>
          </div>

          {/* Column 2: Directorio */}
          <div className="space-y-4">
            <h5 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest">
              Directorio
            </h5>
            <ul className="space-y-2.5">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Soluciones', href: '#soluciones' },
                { name: 'Cómo funciona', href: '#como-funciona' },
                { name: 'Soporte', href: '#preguntas-frecuentes' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h5 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest">
              Legal
            </h5>
            <ul className="space-y-2.5">
              {[
                { name: 'Requisitos', href: '#requisitos' },
                { name: 'Empresas Aliadas', href: '#empresas' },
                { name: 'Términos & Condiciones', href: '#terminos' },
                { name: 'Política de Privacidad', href: '#privacidad' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (['#requisitos', '#empresas'].includes(link.href)) {
                        handleLinkClick(e, link.href);
                      } else {
                        e.preventDefault();
                        alert('Documento legal disponible próximamente. En producción se abrirá el PDF correspondiente.');
                      }
                    }}
                    className="text-sm text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div className="space-y-4">
            <h5 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest">
              Atención Comercial
            </h5>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="https://wa.me/584140000000?text=Hola%20Creditivoo,%20deseo%20mayor%20informaci%C3%B3n"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2.5 group text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                >
                  <div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg group-hover:bg-emerald-100 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none">WhatsApp Oficial</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">+58 (414) IVOO-CRE</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:solicitudes@creditivoo.com"
                  className="flex items-center gap-2.5 group text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                >
                  <div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg group-hover:bg-emerald-100 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none">Correo Electrónico</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">solicitudes@creditivoo.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex gap-2 pt-1">
                  {['instagram', 'twitter', 'facebook'].map((social) => (
                    <a
                      key={social}
                      href={`https://${social}.com/ivoovenezuela`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="px-3 py-1.5 bg-slate-50 hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 border border-slate-100 hover:border-emerald-100 rounded-lg transition-all duration-200 capitalize text-[11px] font-bold"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* ━━━ Legal Disclaimer — Minimalist Executive ━━━ */}
        <div className="pt-8 pb-6">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 max-w-2xl">
            <div className="flex items-start gap-3">
              <div className="bg-white border border-slate-100 p-1.5 rounded-lg shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest leading-none block mb-1.5">
                  Cumplimiento Regulatorio
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Creditivoo no es una entidad bancaria tradicional ni emite tarjetas de crédito de uso universal. Las líneas de compra están sujetas a debida evaluación de riesgos y consignación digital de documentos verificados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ━━━ Copyright Strip ━━━ */}
        <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 border-t border-slate-100">
          <p className="pt-4">© {currentYear} Creditivoo. Todos los derechos reservados. Desarrollado para IVOO.</p>
          <div className="flex items-center gap-1.5 pt-4 font-semibold">
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sede Central: Valencia, Venezuela</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
