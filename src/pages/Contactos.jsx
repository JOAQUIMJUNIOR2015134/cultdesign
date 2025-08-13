import React from 'react';
import './Contactos.css';

const Contactos = () => {
  return (
    <div className="contactos-page">
      <div className="page-header">
        <div className="container">
          <h1>Contactos</h1>
          <p>Estamos aqui para ajudar. Entre em contacto connosco!</p>
        </div>
      </div>
      
      <div className="content-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Informações de Contacto</h2>
              
              <div className="contact-item">
                <h3>📍 Morada</h3>
                <p>
                  Rua da Criatividade, 123<br />
                  1200-000 Lisboa<br />
                  Portugal
                </p>
              </div>
              
              <div className="contact-item">
                <h3>📞 Telefone</h3>
                <p>+351 21 123 4567</p>
              </div>
              
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <p>info@cultdesign.pt</p>
              </div>
              
              <div className="contact-item">
                <h3>🕒 Horário de Funcionamento</h3>
                <p>
                  Segunda a Sexta: 9h00 - 18h00<br />
                  Sábado: 9h00 - 13h00<br />
                  Domingo: Encerrado
                </p>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Envie-nos uma Mensagem</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="nome">Nome *</label>
                  <input type="text" id="nome" name="nome" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" name="telefone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="assunto">Assunto *</label>
                  <input type="text" id="assunto" name="assunto" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem *</label>
                  <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
