// Exemplos de uso do componente ButtonGrid

import ButtonGrid from "../components/ButtonGrid";

// Exemplo 1: 6 botões de navegação (como implementado na Home)
const navigationButtons = [
  {
    label: "Sobre Nós",
    description: "Conheça nossa história",
    icon: "👥",
    variant: "primary",
    onClick: () => console.log("Navegar para Sobre Nós"),
  },
  {
    label: "Contactos",
    description: "Entre em contacto",
    icon: "📞",
    variant: "secondary",
    onClick: () => console.log("Navegar para Contactos"),
  },
  {
    label: "Serviços",
    description: "Nossos serviços",
    icon: "🛠️",
    variant: "success",
    onClick: () => console.log("Ver Serviços"),
  },
  {
    label: "Portfolio",
    description: "Nossos trabalhos",
    icon: "🎨",
    variant: "info",
    onClick: () => console.log("Ver Portfolio"),
  },
  {
    label: "Blog",
    description: "Artigos e novidades",
    icon: "📝",
    variant: "warning",
    onClick: () => console.log("Ver Blog"),
  },
  {
    label: "Suporte",
    description: "Ajuda e suporte",
    icon: "❓",
    variant: "danger",
    onClick: () => console.log("Contactar Suporte"),
  },
];

// Exemplo 2: 6 botões de ações administrativas
const adminButtons = [
  {
    label: "Utilizadores",
    description: "Gerir utilizadores",
    icon: "👤",
    variant: "primary",
    onClick: () => console.log("Gerir Utilizadores"),
  },
  {
    label: "Relatórios",
    description: "Ver relatórios",
    icon: "📊",
    variant: "info",
    onClick: () => console.log("Ver Relatórios"),
  },
  {
    label: "Configurações",
    description: "Configurar sistema",
    icon: "⚙️",
    variant: "secondary",
    onClick: () => console.log("Configurações"),
  },
  {
    label: "Backup",
    description: "Fazer backup",
    icon: "💾",
    variant: "success",
    onClick: () => console.log("Fazer Backup"),
  },
  {
    label: "Logs",
    description: "Ver logs do sistema",
    icon: "📋",
    variant: "warning",
    onClick: () => console.log("Ver Logs"),
  },
  {
    label: "Sair",
    description: "Terminar sessão",
    icon: "🚪",
    variant: "danger",
    onClick: () => console.log("Terminar Sessão"),
  },
];

// Exemplo 3: 6 botões de categorias de produtos
const categoryButtons = [
  {
    label: "Eletrónicos",
    description: "Dispositivos eletrónicos",
    icon: "📱",
    variant: "primary",
    onClick: () => console.log("Ver Eletrónicos"),
  },
  {
    label: "Roupas",
    description: "Vestuário e acessórios",
    icon: "👕",
    variant: "secondary",
    onClick: () => console.log("Ver Roupas"),
  },
  {
    label: "Casa",
    description: "Artigos para casa",
    icon: "🏠",
    variant: "success",
    onClick: () => console.log("Ver Casa"),
  },
  {
    label: "Desporto",
    description: "Equipamentos desportivos",
    icon: "⚽",
    variant: "info",
    onClick: () => console.log("Ver Desporto"),
  },
  {
    label: "Livros",
    description: "Livros e revistas",
    icon: "📚",
    variant: "warning",
    onClick: () => console.log("Ver Livros"),
  },
  {
    label: "Jogos",
    description: "Jogos e brinquedos",
    icon: "🎮",
    variant: "danger",
    onClick: () => console.log("Ver Jogos"),
  },
];

// Como usar nos componentes:

// <ButtonGrid
//   title="Navegação Principal"
//   buttons={navigationButtons}
//   className="six-columns"
// />

// <ButtonGrid
//   title="Painel Administrativo"
//   buttons={adminButtons}
// />

// <ButtonGrid
//   title="Categorias de Produtos"
//   buttons={categoryButtons}
//   className="three-columns"
// />

export { navigationButtons, adminButtons, categoryButtons };
