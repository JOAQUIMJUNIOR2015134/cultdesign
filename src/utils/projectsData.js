// projectsData.js
// Este arquivo contém os dados dos projetos organizados por categorias
// Você pode substituir pelos seus projetos reais da pasta "Publicar"

export const projectsData = {
  "Web Design": [
    {
      id: 1,
      title: "Website Corporativo",
      description: "Design moderno e responsivo para empresa tecnológica",
      image: "/images/web-design/projeto1.jpg", // Caminho para sua pasta de imagens
      category: "Web Design",
      year: "2024",
      technologies: ["React", "CSS3", "JavaScript"],
      client: "TechCorp",
      url: "https://exemplo.com",
    },
    {
      id: 2,
      title: "E-commerce Fashion",
      description: "Loja online com design elegante e funcional",
      image: "/images/web-design/projeto2.jpg",
      category: "Web Design",
      year: "2024",
      technologies: ["Vue.js", "SCSS", "Node.js"],
      client: "FashionStore",
      url: "https://exemplo.com",
    },
    {
      id: 3,
      title: "Portfolio Artístico",
      description: "Website showcase para artista visual",
      image: "/images/web-design/projeto3.jpg",
      category: "Web Design",
      year: "2023",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      client: "Artista Visual",
      url: "https://exemplo.com",
    },
  ],
  Branding: [
    {
      id: 4,
      title: "Identidade Startup Tech",
      description: "Logo e identidade visual completa para startup",
      image: "/images/branding/projeto1.jpg",
      category: "Branding",
      year: "2024",
      services: ["Logo Design", "Identidade Visual", "Manual de Marca"],
      client: "StartupTech",
      deliverables: ["Logo", "Cartões de Visita", "Papelaria"],
    },
    {
      id: 5,
      title: "Rebranding Restaurante",
      description: "Nova identidade para cadeia de restaurantes",
      image: "/images/branding/projeto2.jpg",
      category: "Branding",
      year: "2024",
      services: ["Rebranding", "Design de Embalagem", "Sinalização"],
      client: "Restaurante Gourmet",
      deliverables: ["Nova Identidade", "Embalagens", "Menu Design"],
    },
    {
      id: 6,
      title: "Logo Consultoria",
      description: "Marca profissional para empresa de consultoria",
      image: "/images/branding/projeto3.jpg",
      category: "Branding",
      year: "2023",
      services: ["Logo Design", "Papelaria Corporativa"],
      client: "Consultoria Business",
      deliverables: ["Logo", "Cartões", "Apresentações"],
    },
  ],
  "Design Gráfico": [
    {
      id: 7,
      title: "Catálogo Produtos",
      description: "Design editorial para catálogo de produtos",
      image: "/images/graphic-design/projeto1.jpg",
      category: "Design Gráfico",
      year: "2024",
      services: ["Design Editorial", "Layout", "Fotografia"],
      client: "Empresa Industrial",
      deliverables: ["Catálogo Digital", "Versão Impressa"],
    },
    {
      id: 8,
      title: "Campanha Publicitária",
      description: "Materiais gráficos para campanha de marketing",
      image: "/images/graphic-design/projeto2.jpg",
      category: "Design Gráfico",
      year: "2024",
      services: ["Design Publicitário", "Social Media", "Outdoor"],
      client: "Agência de Marketing",
      deliverables: ["Posts Social", "Banners", "Flyers"],
    },
    {
      id: 9,
      title: "Packaging Design",
      description: "Embalagens criativas para produtos alimentares",
      image: "/images/graphic-design/projeto3.jpg",
      category: "Design Gráfico",
      year: "2023",
      services: ["Design de Embalagem", "Ilustração", "Prototipagem"],
      client: "Alimentar Premium",
      deliverables: ["Embalagens", "Rótulos", "Displays"],
    },
  ],
};

// Função para obter todos os projetos
export const getAllProjects = () => {
  return Object.values(projectsData).flat();
};

// Função para obter projetos por categoria
export const getProjectsByCategory = (category) => {
  if (category === "Todos") {
    return getAllProjects();
  }
  return projectsData[category] || [];
};

// Função para obter categorias disponíveis
export const getCategories = () => {
  return ["Todos", ...Object.keys(projectsData)];
};

// Função para obter projeto por ID
export const getProjectById = (id) => {
  const allProjects = getAllProjects();
  return allProjects.find((project) => project.id === parseInt(id));
};

/*
INSTRUÇÕES PARA CONECTAR SEUS PROJETOS REAIS:

1. Copie suas imagens da pasta "C:\Users\migue\OneDrive\Ambiente de Trabalho\Projectos para Website\Publicar" 
   para a pasta "public/images/" do projeto

2. Organize as imagens em subpastas por categoria:
   - public/images/web-design/
   - public/images/branding/
   - public/images/graphic-design/

3. Atualize os caminhos das imagens no objeto projectsData acima

4. Substitua os dados de exemplo pelos dados reais dos seus projetos

5. Adicione mais categorias se necessário

6. Para adicionar novos projetos, simplesmente adicione novos objetos aos arrays das categorias correspondentes
*/
