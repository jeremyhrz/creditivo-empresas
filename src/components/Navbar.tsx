/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoPrincipal from '../../assets/logo-principal.png';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  onCtaClick: () => void;
  onCompanyClick: () => void;
}

export default function Navbar({ currentView, setCurrentView, onCtaClick, onCompanyClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Soluciones', id: 'soluciones' },
    { name: 'Cómo funciona', id: 'como-funciona' },
    { name: 'Requisitos', id: 'requisitos' },
    { name: 'Empresas', id: 'empresas' },
    { name: 'FAQ', id: 'faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, viewId: string) => {
    e.preventDefault();
    setIsOpen(false);
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
          : 'bg-white/80 backdrop-blur-sm py-5 border-b border-slate-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo link */}
          <button onClick={(e) => handleLinkClick(e, 'inicio')} className="flex items-center cursor-pointer focus:outline-none">
            <img
              src={logoPrincipal}
              alt="Creditivoo Empresas"
              loading="eager"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {menuItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`text-sm font-bold transition-colors relative group py-2 cursor-pointer focus:outline-none ${
                    isActive ? 'text-[#10D66B]' : 'text-slate-600 hover:text-[#10D66B]'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#10D66B] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </button>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => alert('Acceso de clientes en desarrollo corporativo. En este MVP, complete el formulario de solicitud.')}
              className="text-slate-600 hover:text-[#10D66B] font-extrabold text-sm flex items-center gap-1.5 transition-colors duration-300 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span>Iniciar sesión</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('inicio');
                setTimeout(onCtaClick, 100);
              }}
              className="bg-[#10D66B] hover:bg-[#00B555] text-white text-sm font-extrabold px-6 py-2.5 rounded-xl shadow-[0_4px_14px_0_rgba(16,214,107,0.25)] hover:shadow-[0_6px_20px_0_rgba(16,214,107,0.35)] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              <span>Solicitar Creditivoo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile hamburger icon */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => alert('Próximamente disponible. Use el formulario de contacto para canalizar su solicitud.')}
              className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              <LogIn className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-[#10D66B] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className={`w-full text-left block px-4 py-3 rounded-xl text-base font-extrabold transition-all cursor-pointer ${
                      isActive 
                        ? 'text-[#10D66B] bg-emerald-50/80 border border-emerald-100/50' 
                        : 'text-slate-600 hover:text-[#10D66B] hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              
              <div className="pt-4 mt-2 border-t border-slate-100 space-y-3 px-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    alert('Acceso de clientes en desarrollo corporativo. En este MVP, complete el formulario de solicitud.');
                  }}
                  className="w-full py-3 flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-extrabold text-sm rounded-xl hover:bg-slate-50 hover:shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Iniciar sesión</span>
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setCurrentView('inicio');
                    setTimeout(onCtaClick, 100);
                  }}
                  className="w-full bg-[#10D66B] hover:bg-[#00B555] text-white text-sm font-extrabold py-3.5 rounded-xl shadow-[0_4px_14px_0_rgba(16,214,107,0.25)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Solicitar Creditivoo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
