# CardImagens Component

## Descrição

O componente `CardImagens` é um componente React simples que exibe uma imagem em formato vertical com dimensões fixas e sem cantos redondos.

## Características

- **Formato**: Vertical (sem cantos redondos)
- **Dimensões fixas**: 250px x 350px (desktop)
- **Responsivo**: Adapta-se a diferentes tamanhos de ecrã
- **Suporte para modo dark/light**: Integrado com o sistema de temas
- **Efeito hover**: Leve animação ao passar o rato

## Propriedades (Props)

| Prop     | Tipo   | Obrigatório | Valor padrão | Descrição                             |
| -------- | ------ | ----------- | ------------ | ------------------------------------- |
| `imagem` | string | Sim         | -            | URL da imagem a ser exibida           |
| `alt`    | string | Não         | "Imagem"     | Texto alternativo para acessibilidade |

## Exemplo de Uso

```jsx
import CardImagens from '../components/CardImagens';

// Uso básico
<CardImagens
  imagem="https://exemplo.com/imagem.jpg"
  alt="Descrição da imagem"
/>

// Uso com imagens locais
<CardImagens
  imagem="/src/assets/minha-imagem.jpg"
  alt="Minha imagem"
/>
```

## Dimensões Responsivas

- **Desktop**: 250px x 350px
- **Tablet (≤768px)**: 200px x 280px
- **Mobile (≤480px)**: 180px x 252px

## Estilos CSS

O componente inclui:

- Border de 2px solid
- Object-fit: cover (a imagem preenche o container mantendo proporções)
- Transições suaves
- Efeito hover com scale e sombra
- Suporte para modo dark/light

## Localização dos Ficheiros

- **Componente**: `src/components/CardImagens.jsx`
- **Estilos**: `src/components/CardImagens.css`

## Integração com Temas

O componente adapta-se automaticamente ao tema da aplicação:

- **Modo Light**: Border cinzento claro
- **Modo Dark**: Border cinzento escuro, sombra adaptada
