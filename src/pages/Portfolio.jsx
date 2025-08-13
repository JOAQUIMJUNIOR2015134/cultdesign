import React, { useState } from 'react';
import { getCategories, getProjectsByCategory } from '../utils/projectsData';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const categories = getCategories();

  const getFilteredProjects = () => {
    return getProjectsByCategory(selectedCategory);
  };

  return (
    <div className="portfolio-page">
      <div className="page-header">
        <div className="container">
          <h1>Nosso Portfólio</h1>
          <p>Conheça alguns dos nossos trabalhos mais recentes</p>
        </div>
      </div>
      
      <div className="content-section">
        <div className="container">
          {/* Filtros por categoria */}
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de projetos */}
          <div className="projects-grid">
            {getFilteredProjects().map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>Imagem do Projeto</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-info">
                      <span className="project-category">{project.category}</span>
                      <span className="project-year">{project.year}</span>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button className="view-project-btn">Ver Projeto</button>
                </div>
              </div>
            ))}
          </div>

          {getFilteredProjects().length === 0 && (
            <div className="no-projects">
              <p>Nenhum projeto encontrado para esta categoria.</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="cta-section">
            <h2>Gostou do que viu?</h2>
            <p>Entre em contacto connosco para discutir o seu próximo projeto</p>
            <button className="cta-btn">Falar Connosco</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
