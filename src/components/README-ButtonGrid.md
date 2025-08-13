# Componente ButtonGrid

## 📋 Descrição

O `ButtonGrid` é um componente React flexível que permite exibir até 6 botões (ou mais) organizados em uma grade responsiva. É ideal para criar menus de navegação, painéis de controle, ou qualquer interface que precise de botões organizados.

## 🚀 Como Usar

### Importação

```jsx
import ButtonGrid from "../components/ButtonGrid";
```

### Uso Básico

```jsx
const meusBotoes = [
  {
    label: "Botão 1",
    description: "Descrição do botão",
    icon: "🎯",
    variant: "primary",
    onClick: () => console.log("Clicou no botão 1"),
  },
  // ... mais 5 botões
];

<ButtonGrid title="Meus Botões" buttons={meusBotoes} />;
```

## 🔧 Propriedades

### Propriedades do Componente

| Propriedade | Tipo   | Obrigatório | Padrão | Descrição                       |
| ----------- | ------ | ----------- | ------ | ------------------------------- |
| `buttons`   | Array  | Sim         | -      | Array com os dados dos botões   |
| `title`     | String | Não         | -      | Título exibido acima dos botões |
| `className` | String | Não         | ''     | Classes CSS adicionais          |

### Propriedades de cada Botão

| Propriedade   | Tipo     | Obrigatório | Padrão    | Descrição                    |
| ------------- | -------- | ----------- | --------- | ---------------------------- |
| `label`       | String   | Sim         | -         | Texto principal do botão     |
| `description` | String   | Não         | -         | Texto secundário explicativo |
| `icon`        | String   | Não         | -         | Emoji ou ícone               |
| `variant`     | String   | Não         | 'primary' | Estilo do botão              |
| `onClick`     | Function | Sim         | -         | Função executada ao clicar   |
| `disabled`    | Boolean  | Não         | false     | Se o botão está desabilitado |

## 🎨 Variantes Disponíveis

- `primary` - Azul (padrão)
- `secondary` - Roxo
- `success` - Verde
- `warning` - Amarelo
- `danger` - Vermelho
- `info` - Azul claro

## 📱 Classes de Layout

- `two-columns` - 2 colunas
- `three-columns` - 3 colunas
- `four-columns` - 4 colunas
- `six-columns` - 6 colunas

## 💻 Exemplo Completo

```jsx
import React from "react";
import ButtonGrid from "../components/ButtonGrid";

const MinhaPage = ({ onNavigate }) => {
  const actionButtons = [
    {
      label: "Sobre Nós",
      description: "Conheça nossa história e valores",
      icon: "👥",
      variant: "primary",
      onClick: () => onNavigate("sobre"),
    },
    {
      label: "Contactos",
      description: "Entre em contacto connosco",
      icon: "📞",
      variant: "secondary",
      onClick: () => onNavigate("contactos"),
    },
    {
      label: "Serviços",
      description: "Veja nossos serviços",
      icon: "🛠️",
      variant: "success",
      onClick: () => alert("Em desenvolvimento"),
    },
    {
      label: "Portfolio",
      description: "Nossos trabalhos",
      icon: "🎨",
      variant: "info",
      onClick: () => console.log("Ver portfolio"),
      disabled: true, // Botão desabilitado
    },
    {
      label: "Blog",
      description: "Artigos e novidades",
      icon: "📝",
      variant: "warning",
      onClick: () => window.open("/blog", "_blank"),
    },
    {
      label: "Suporte",
      description: "Ajuda e suporte técnico",
      icon: "❓",
      variant: "danger",
      onClick: () => onNavigate("suporte"),
    },
  ];

  return (
    <div>
      <ButtonGrid
        title="Menu Principal"
        buttons={actionButtons}
        className="six-columns"
      />
    </div>
  );
};
```

## 📱 Responsividade

O componente é totalmente responsivo:

- **Desktop**: Até 6 colunas
- **Tablet**: Máximo 3 colunas
- **Mobile**: 2 colunas
- **Mobile pequeno**: 1 coluna

## 🎯 Casos de Uso

1. **Menu Principal** - Navegação entre páginas
2. **Dashboard** - Ações administrativas
3. **Categorias** - Filtros ou categorias de produtos
4. **Ações Rápidas** - Shortcuts para funcionalidades
5. **Configurações** - Opções de configuração
6. **Social Media** - Links para redes sociais

## ⚡ Performance

- Componente leve e otimizado
- Suporte a lazy loading
- Animações CSS performáticas
- Acessibilidade incluída

## 🔧 Personalização

Você pode personalizar os estilos editando o arquivo `ButtonGrid.css` ou adicionando classes CSS personalizadas através da propriedade `className`.

## 🐛 Troubleshooting

### Botões não aparecem

- Verifique se o array `buttons` não está vazio
- Confirme que cada botão tem pelo menos `label` e `onClick`

### Layout quebrado

- Verifique se está usando uma classe de layout válida
- Confirme que o container pai tem largura suficiente

### Cliques não funcionam

- Verifique se a função `onClick` está definida
- Confirme que o botão não está `disabled`
