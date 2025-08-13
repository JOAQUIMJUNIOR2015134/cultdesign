import React from 'react';
import './ButtonGrid.css';

const ButtonGrid = ({ buttons, title, className = '' }) => {
  return (
    <div className={`button-grid-container ${className}`}>
      {title && (
        <div className="button-grid-header">
          <h2>{title}</h2>
        </div>
      )}
      
      <div className="button-grid">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`grid-button ${button.variant || 'primary'} ${button.disabled ? 'disabled' : ''}`}
            onClick={button.onClick}
            disabled={button.disabled}
          >
            {button.icon && (
              <span className="button-icon">{button.icon}</span>
            )}
            <span className="button-label">{button.label}</span>
            {button.description && (
              <span className="button-description">{button.description}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGrid;
