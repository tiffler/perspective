import React, { useState, useEffect } from 'react';
import './switch.css';

export interface SwitchProps {
  /** Whether the switch is on */
  checked?: boolean;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Label text */
  label?: string;
  /** Optional subtext below the label */
  subtext?: string;
  /** Change handler */
  onChange?: (checked: boolean) => void;
}

export const Switch = ({
  checked = false,
  disabled = false,
  label = 'Text label',
  subtext,
  onChange,
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => { setIsChecked(checked); }, [checked]);

  const handleClick = () => {
    if (disabled) return;
    const next = !isChecked;
    setIsChecked(next);
    if (onChange) onChange(next);
  };

  return (
    <div
      className={`switch ${disabled ? 'switch--disabled' : ''}`}
      onClick={handleClick}
      role="switch"
      aria-checked={isChecked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') handleClick(); }}
    >
      <div className={`switch__track ${isChecked ? 'switch__track--on' : 'switch__track--off'}`}>
        <div className={`switch__knob ${isChecked ? 'switch__knob--on' : 'switch__knob--off'}`} />
      </div>
      {label && (
        <div className="switch__label-group">
          <span className="switch__label">{label}</span>
          {subtext && <span className="switch__subtext">{subtext}</span>}
        </div>
      )}
    </div>
  );
};
