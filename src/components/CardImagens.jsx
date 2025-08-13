import React from 'react';
import './CardImagens.css';

const CardImagens = ({ imagem, alt = "Imagem" }) => {
  return (
    <div className="card-imagens">
      <img 
        src={imagem} 
        alt={alt} 
        className="card-imagens-img"
      />
    </div>
  );
};

export default CardImagens;
