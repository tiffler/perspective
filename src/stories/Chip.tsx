import React from 'react';
import './chip.css';

const INTENT_ICONS: Record<string, string> = {
  default:      'star',
  error:         'dangerous',
  running:       'fiber_manual_record',
  informational: 'info',
  success:       'check',
  urgent:        'warning',
};

export interface ChipProps {
  /** Color intent */
  intent?: 'default' | 'error' | 'running' | 'informational' | 'success' | 'urgent';
  /** Visual style */
  style?: 'solid' | 'halftone' | 'outline';
  /** Label text */
  label?: string;
}

export const Chip = ({
  intent = 'default',
  style = 'solid',
  label = 'Status',
}: ChipProps) => {
  return (
    <div className={`chip chip--${intent} chip--${style}`}>
      <span className="chip__icon material-symbols-rounded">
        {INTENT_ICONS[intent]}
      </span>
      <span className="chip__label">{label}</span>
    </div>
  );
};
