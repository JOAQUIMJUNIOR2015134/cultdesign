import React from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, onNavigate }) => {
  const handleNavigation = (page) => {
    onNavigate(page);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand à esquerda */}
        <div className="navbar-brand">
          <a href="#" onClick={() => handleNavigation('home')}>
            CultDesign
          </a>
        </div>

        {/* Links de navegação à direita */}
        <div className="navbar-links">
          <a 
            href="#" 
            className={currentPage === 'sobre' ? 'active' : ''}
            onClick={() => handleNavigation('sobre')}
          >
            Sobre Nós
          </a>
          <a 
            href="#" 
            className={currentPage === 'contactos' ? 'active' : ''}
            onClick={() => handleNavigation('contactos')}
          >
            Contactos
          </a>
          <a 
            href="#" 
            className={currentPage === 'private' ? 'active' : ''}
            onClick={() => handleNavigation('private')}
          >
            Private
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
