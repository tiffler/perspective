import React from 'react';
import './card.css';

export interface CardProps {
  /** Content to render inside the card */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`card ${className}`.trim()}>
      {children}
    </div>
  );
};
