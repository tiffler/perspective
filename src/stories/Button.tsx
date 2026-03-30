import React from 'react';
import './button.css';

export interface ButtonProps {
  /** Visual style of the button */
  variant?: 'solid' | 'outline' | 'ghost';
  /** Intent/color theme */
  intent?: 'default' | 'destructive' | 'warning';
  /** Button state */
  state?: 'default' | 'disabled' | 'loading';
  /** Button label */
  label: string;
  /** Material Symbol icon name */
  icon?: string;
  /** Icon position relative to label */
  iconPosition?: 'leading' | 'trailing';
  /** Click handler */
  onClick?: () => void;
}

export const Button = ({
  variant = 'solid',
  intent = 'default',
  state = 'default',
  label,
  icon,
  iconPosition = 'leading',
  onClick,
}: ButtonProps) => {
  const isDisabled = state === 'disabled';
  const isLoading = state === 'loading';

  const iconEl = (name: string) => (
    <span className="btn__icon">{name}</span>
  );

  return (
    <button
      type="button"
      className={`btn btn--${variant} btn--${intent} btn--${state}`}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading && iconEl('progress_activity')}
      {!isLoading && icon && iconPosition === 'leading' && iconEl(icon)}
      {label}
      {!isLoading && icon && iconPosition === 'trailing' && iconEl(icon)}
    </button>
  );
};
