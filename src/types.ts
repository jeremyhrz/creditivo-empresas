/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Segment {
  id: 'mayorista' | 'emprendedor' | 'nomina';
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  ctaText: string;
  badgeText: string;
  badgeStyle: 'emerald' | 'cyan' | 'indigo';
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface RequirementTab {
  id: 'mayorista' | 'emprendedor' | 'nomina' | 'empresas';
  label: string;
  title: string;
  description: string;
  documents: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface LeadFormInput {
  fullName: string;
  identityDoc: string;
  phone: string;
  email: string;
  requestType: 'mayorista' | 'emprendedor' | 'nomina' | 'empresa';
  city: string;
  ivooBranch: string;
  message?: string;
  acceptedContact: boolean;
}
