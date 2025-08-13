import React, { useState } from 'react';
import './Home.css';
import CardImagens from '../components/CardImagens';
import NavigationBar from '../components/NavigationBar';

const Home = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Organizar imagens por categoria
  const imagesData = {
    grafico: [
      "/src/assets/Grafico/Grafico (1).jpg",
      "/src/assets/Grafico/Grafico (1).png",
      "/src/assets/Grafico/Grafico (2).jpg",
      "/src/assets/Grafico/Grafico (4).jpg",
      "/src/assets/Grafico/Grafico (5).jpg",
      "/src/assets/Grafico/Grafico (6).jpg",
      "/src/assets/Grafico/Grafico (7).jpg",
      "/src/assets/Grafico/Grafico (8).jpg"
    ],
    interior: [
      "/src/assets/Interior/Interior (1).jpg",
      "/src/assets/Interior/Interior (1).png",
      "/src/assets/Interior/Interior (2).jpg",
      "/src/assets/Interior/Interior (2).png",
      "/src/assets/Interior/Interior (3).jpg",
      "/src/assets/Interior/Interior (3).png",
      "/src/assets/Interior/Interior (4).jpg",
      "/src/assets/Interior/Interior (4).png",
      "/src/assets/Interior/Interior (5).png",
      "/src/assets/Interior/Interior (6).jpg",
      "/src/assets/Interior/Interior (6).png",
      "/src/assets/Interior/Interior (7).jpg",
      "/src/assets/Interior/Interior (7).png",
      "/src/assets/Interior/Interior (8).jpg",
      "/src/assets/Interior/Interior (8).png",
      "/src/assets/Interior/Interior (9).jpg",
      "/src/assets/Interior/Interior (9).png",
      "/src/assets/Interior/Interior (10).jpg",
      "/src/assets/Interior/Interior (10).png",
      "/src/assets/Interior/Interior (11).jpg",
      "/src/assets/Interior/Interior (11).png",
      "/src/assets/Interior/Interior (12).jpg",
      "/src/assets/Interior/Interior (12).png",
      "/src/assets/Interior/Interior (13).jpg",
      "/src/assets/Interior/Interior (13).png",
      "/src/assets/Interior/Interior (14).jpg",
      "/src/assets/Interior/Interior (14).png",
      "/src/assets/Interior/Interior (15).jpg",
      "/src/assets/Interior/Interior (15).png",
      "/src/assets/Interior/Interior (16).jpg",
      "/src/assets/Interior/Interior (16).png",
      "/src/assets/Interior/Interior (17).jpg",
      "/src/assets/Interior/Interior (17).png",
      "/src/assets/Interior/Interior (18).jpg",
      "/src/assets/Interior/Interior (18).png",
      "/src/assets/Interior/Interior (19).jpg",
      "/src/assets/Interior/Interior (19).png",
      "/src/assets/Interior/Interior (20).jpg",
      "/src/assets/Interior/Interior (21).jpg",
      "/src/assets/Interior/Interior (21).png",
      "/src/assets/Interior/Interior (22).jpg",
      "/src/assets/Interior/Interior (22).png",
      "/src/assets/Interior/Interior (23).png",
      "/src/assets/Interior/Interior (24).png",
      "/src/assets/Interior/Interior (25).png",
      "/src/assets/Interior/Interior (28).png",
      "/src/assets/Interior/Interior (29).png",
      "/src/assets/Interior/Interior (30).png",
      "/src/assets/Interior/Interior (31).png",
      "/src/assets/Interior/Interior (32).png"
    ],
    exterior: [
      "/src/assets/Exterior/Exterior (1).jpg",
      "/src/assets/Exterior/Exterior (1).png",
      "/src/assets/Exterior/Exterior (2).jpg",
      "/src/assets/Exterior/Exterior (3).jpg",
      "/src/assets/Exterior/Exterior (4).jpg",
      "/src/assets/Exterior/Exterior (5).jpg",
      "/src/assets/Exterior/Exterior (6).jpg",
      "/src/assets/Exterior/Exterior (7).jpg",
      "/src/assets/Exterior/Exterior (8).jpg"
    ],
    product: [
      "/src/assets/Produto/enhanced_horse chess piece.png",
      "/src/assets/Produto/enhanced_0,70.png",
      "/src/assets/Produto/Produto_ (1).png",
      "/src/assets/Produto/Produto_ (2).jpg",
      "/src/assets/Produto/Produto_ (2).png",
      "/src/assets/Produto/Produto_ (3).jpg",
      "/src/assets/Produto/Produto_ (3).png",
      "/src/assets/Produto/Produto_ (4).jpg",
      "/src/assets/Produto/Produto_ (6).jpg",
      "/src/assets/Produto/Produto_ (8).jpg",
      "/src/assets/Produto/Produto_ (9).jpg",
      "/src/assets/Produto/enhanced_Produto_ 7.png",
      "/src/assets/Produto/enhanced_Produto_ 10.png",
      "/src/assets/Produto/enhanced_IMG_20230718_125435_199.png",
      "/src/assets/Produto/enhanced_rHINO.png",
      "/src/assets/Produto/6a022f203041139.67379db6ccfeb.jpg"
    ],
    digital: []
  };

  // Obter todas as imagens para o filtro 'all'
  const allImages = Object.values(imagesData).flat();

  const handleNavigationClick = (category) => {
    console.log(`Navigation category "${category}" clicked`);
    setActiveFilter(category);
  };

  // Função para obter as imagens filtradas
  const getFilteredImages = () => {
    if (activeFilter === 'all') {
      return allImages;
    }
    return imagesData[activeFilter] || [];
  };

  return (
    <div className="home-page white-mode">
      <div className="content-container"> 
      </div>
      
      <div className="card-imagens-container">
        {getFilteredImages().map((imagePath, index) => (
          <CardImagens 
            key={`${activeFilter}-${index}`} 
            imagem={imagePath} 
            alt="Design Portfolio" 
          />
        ))}
      </div>      <NavigationBar onButtonClick={handleNavigationClick} />
    </div>
  );
};

export default Home;
