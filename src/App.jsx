import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Contactos from './pages/Contactos';
import Private from './pages/Private';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'sobre':
        return <SobreNos />;
      case 'contactos':
        return <Contactos />;
      case 'private':
        return <Private />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
