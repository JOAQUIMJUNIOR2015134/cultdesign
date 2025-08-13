import React from 'react';
import './Private.css';

const Private = () => {
  return (
    <div className="private-page">
      <div className="page-header">
        <div className="container">
          <h1>Área Private</h1>
          <p>Acesso exclusivo para clientes e parceiros</p>
        </div>
      </div>
      
      <div className="content-section">
        <div className="container">
          <div className="private-content">
            <div className="login-section">
              <div className="login-card">
                <h2>Iniciar Sessão</h2>
                <p>Aceda à sua área reservada</p>
                
                <form className="login-form">
                  <div className="form-group">
                    <label htmlFor="username">Nome de Utilizador</label>
                    <input type="text" id="username" name="username" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="password">Palavra-passe</label>
                    <input type="password" id="password" name="password" required />
                  </div>
                  
                  <div className="form-options">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      Lembrar-me
                    </label>
                    <a href="#" className="forgot-password">Esqueceu a palavra-passe?</a>
                  </div>
                  
                  <button type="submit" className="login-btn">Entrar</button>
                </form>
              </div>
            </div>
            
            <div className="info-section">
              <h2>Área Exclusiva</h2>
              <p>
                Esta área é destinada aos nossos clientes e parceiros privilegiados. 
                Aqui pode aceder a:
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <div>
                    <h3>Relatórios Detalhados</h3>
                    <p>Acompanhe o progresso dos seus projetos em tempo real</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <span className="feature-icon">💼</span>
                  <div>
                    <h3>Portfólio Personalizado</h3>
                    <p>Acesso ao seu portfólio exclusivo e histórico de projetos</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <div>
                    <h3>Suporte Prioritário</h3>
                    <p>Contacto direto com a nossa equipa especializada</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <span className="feature-icon">📈</span>
                  <div>
                    <h3>Analytics Avançados</h3>
                    <p>Métricas detalhadas sobre o desempenho dos seus projetos</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-info">
                <h3>Precisa de Acesso?</h3>
                <p>
                  Se é nosso cliente e ainda não tem acesso, entre em contacto connosco 
                  através do email <strong>private@cultdesign.pt</strong> ou telefone 
                  <strong>+351 21 123 4567</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Private;
