/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../landingData';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(1); // default open first

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {FAQS.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`border rounded-2xl transition-all duration-300 ${
              isOpen
                ? 'bg-emerald-50/30 border-emerald-100 shadow-md'
                : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm'
            }`}
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex items-center justify-between p-6 text-left font-extrabold text-slate-800 transition-colors focus:outline-none cursor-pointer"
            >
              <div className="flex gap-4 items-center">
                <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-emerald-100 text-[#006B3F]' : 'bg-slate-50 text-slate-400'}`}>
                  <HelpCircle className="w-5 h-5 shrink-0" />
                </div>
                <span className="text-base md:text-lg leading-snug">{faq.question}</span>
              </div>
              <ChevronDown
                className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#10D66B]' : 'text-slate-400'
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-base text-slate-600 leading-relaxed border-t border-dashed border-slate-200 ml-16 mr-8">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
