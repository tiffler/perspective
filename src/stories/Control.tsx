import React, { useState, useEffect } from 'react';
import './control.css';

const ICONS = {
  checkbox: {
    unchecked:     'check_box_outline_blank',
    checked:       'check_box',
    indeterminate: 'indeterminate_check_box',
  },
  radio: {
    unchecked:     'radio_button_unchecked',
    checked:       'radio_button_checked',
    indeterminate: 'radio_button_checked',
  },
};

export interface ControlProps {
  /** Control type */
  type?: 'checkbox' | 'radio';
  /** Whether the control is checked */
  checked?: boolean;
  /** Indeterminate state (checkbox only) */
  indeterminate?: boolean;
  /** Whether the control is disabled */
  disabled?: boolean;
  /** Label text */
  label?: string;
  /** Optional subtext below the label */
  subtext?: string;
  /** Change handler */
  onChange?: (checked: boolean) => void;
}

export const Control = ({
  type = 'checkbox',
  checked = false,
  indeterminate = false,
  disabled = false,
  label = 'Text label',
  subtext,
  onChange,
}: ControlProps) => {
  const [isChecked, setIsChecked] = useState(checked ?? false);

  useEffect(() => { setIsChecked(checked ?? false); }, [checked]);

  const iconKey = indeterminate && type === 'checkbox'
    ? 'indeterminate'
    : isChecked
    ? 'checked'
    : 'unchecked';

  const icon = ICONS[type][iconKey];

  const handleClick = () => {
    if (disabled) return;
    const next = !isChecked;
    setIsChecked(next);
    if (onChange) onChange(next);
  };

  return (
    <div
      className={`control ${disabled ? 'control--disabled' : ''}`}
      onClick={handleClick}
      role={type}
      aria-checked={indeterminate ? 'mixed' : isChecked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleClick(); }}
    >
      <span className={`control__icon material-symbols-rounded control__icon--${isChecked || indeterminate ? 'checked' : 'unchecked'}`}>
        {icon}
      </span>
      {label && (
        <div className="control__label-group">
          <span className="control__label">{label}</span>
          {subtext && <span className="control__subtext">{subtext}</span>}
        </div>
      )}
    </div>
  );
};
