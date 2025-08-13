import React from 'react';
import './SobreNos.css';

const SobreNos = () => {
  return (
    <div className="sobre-nos-page">
      <div className="page-header">
        <div className="container">
          <h1>Sobre Nós</h1>
          <p>Conheça a nossa história e valores</p>
        </div>
      </div>
      
      <div className="content-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Nossa História</h2>
              <p>
                A CultDesign nasceu da paixão pela criatividade e inovação. Fundada em 2020, 
                nossa empresa tem como missão transformar ideias em soluções visuais impactantes 
                que conectam marcas aos seus públicos.
              </p>
              <p>
                Com uma equipe multidisciplinar de designers, desenvolvedores e estrategistas, 
                criamos experiências únicas que combinam estética, funcionalidade e propósito.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Imagem da Equipe</span>
              </div>
            </div>
          </div>
          
          <div className="values-section">
            <h2>Nossos Valores</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Criatividade</h3>
                <p>Buscamos soluções inovadoras e originais em cada projeto</p>
              </div>
              <div className="value-card">
                <h3>Qualidade</h3>
                <p>Comprometemo-nos com a excelência em todos os detalhes</p>
              </div>
              <div className="value-card">
                <h3>Colaboração</h3>
                <p>Trabalhamos em parceria com nossos clientes para alcançar os melhores resultados</p>
              </div>
              <div className="value-card">
                <h3>Inovação</h3>
                <p>Estamos sempre em busca das últimas tendências e tecnologias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;
