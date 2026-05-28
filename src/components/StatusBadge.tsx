/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface StatusBadgeProps {
  status: 'pending' | 'active' | 'success' | 'alert' | 'info';
  text: string;
  pulse?: boolean;
}

export default function StatusBadge({ status, text, pulse = false }: StatusBadgeProps) {
  const styles = {
    pending: 'bg-amber-50 text-amber-700 border-amber-200/60',
    active: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    success: 'bg-green-50 text-green-700 border-green-200/60',
    alert: 'bg-orange-50 text-orange-700 border-orange-200/60',
    info: 'bg-blue-50 text-blue-700 border-blue-200/60'
  };

  const dotStyles = {
    pending: 'bg-amber-500',
    active: 'bg-emerald-500',
    success: 'bg-green-500',
    alert: 'bg-orange-500',
    info: 'bg-blue-500'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${styles[status]} transition-all duration-300`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotStyles[status]} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotStyles[status]}`}></span>
        </span>
      )}
      {!pulse && <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[status]}`}></span>}
      {text}
    </span>
  );
}
