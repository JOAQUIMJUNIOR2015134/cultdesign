import React, { useState } from 'react';
import './Home.css';

const Home = ({ onNavigate }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home-page ${isDarkMode ? 'dark-mode' : 'white-mode'}`}>
      <div className="mode-toggle-container">
        <button 
          className="mode-toggle-button"
          onClick={toggleMode}
        >
          {isDarkMode ? '☀️ White Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      
      <div className="content-container">
        <h1>CultDesign</h1>
        <p>Modo atual: {isDarkMode ? 'Dark Mode' : 'White Mode'}</p>
        
        <div className="demo-content">
          <h2>Demonstração dos Modos</h2>
          <p>Este é um exemplo de como o conteúdo aparece em diferentes modos de visualização.</p>
          
          <div className="demo-cards">
            <div className="demo-card">
              <h3>Card 1</h3>
              <p>Conteúdo do primeiro card</p>
            </div>
            <div className="demo-card">
              <h3>Card 2</h3>
              <p>Conteúdo do segundo card</p>
            </div>
            <div className="demo-card">
              <h3>Card 3</h3>
              <p>Conteúdo do terceiro card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
