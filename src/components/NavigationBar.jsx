import React from 'react';
import './NavigationBar.css';

const NavigationBar = ({ onButtonClick }) => {
  const handleButtonClick = (buttonNumber) => {
    if (onButtonClick) {
      onButtonClick(buttonNumber);
    }
  };

  return (
    <div className="navigation-bar">
      <div className="navigation-card">
        <button 
          className="nav-button"
          onClick={() => handleButtonClick('all')}
        >
          All
        </button>
        <button 
          className="nav-button"
          onClick={() => handleButtonClick('grafico')}
        >
          Gráfico
        </button>
        <button 
          className="nav-button"
          onClick={() => handleButtonClick('interior')}
        >
          Interior
        </button>
        <button 
          className="nav-button"
          onClick={() => handleButtonClick('exterior')}
        >
          Exterior
        </button>
        <button 
          className="nav-button"
          onClick={() => handleButtonClick('product')}
        >
          Product
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
