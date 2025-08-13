# Como Adicionar Seus Projetos ao Portfólio

## 📁 Estrutura de Pastas

As imagens dos projetos devem ser colocadas nas seguintes pastas:

```
public/images/
├── web-design/
├── branding/
└── graphic-design/
```

## 🎯 Passo a Passo

### 1. Copiar Imagens

- Copie as imagens da pasta `C:\Users\migue\OneDrive\Ambiente de Trabalho\Projectos para Website\Publicar`
- Cole nas pastas correspondentes em `public/images/`

### 2. Organizar por Categoria

- **Web Design**: Sites, aplicações web, interfaces
- **Branding**: Logos, identidades visuais, manuais de marca
- **Design Gráfico**: Flyers, catálogos, embalagens, materiais impressos

### 3. Atualizar Dados dos Projetos

Edite o arquivo `src/utils/projectsData.js` e substitua os projetos de exemplo pelos seus projetos reais:

```javascript
{
  id: 1,
  title: 'Nome do Seu Projeto',
  description: 'Descrição do projeto',
  image: '/images/web-design/seu-projeto.jpg', // Caminho para a imagem
  category: 'Web Design',
  year: '2024',
  technologies: ['React', 'CSS3'], // Para projetos web
  client: 'Nome do Cliente',
  url: 'https://projeto.com' // Se aplicável
}
```

### 4. Formatos de Imagem Recomendados

- **Formato**: JPG, PNG, WebP
- **Dimensões**: 600x400px (proporção 3:2)
- **Tamanho**: Máximo 500KB por imagem
- **Qualidade**: 80-90% para otimizar carregamento

### 5. Adicionar Novas Categorias

Se tiver outros tipos de projeto, pode adicionar novas categorias:

1. Crie uma nova pasta em `public/images/`
2. Adicione a categoria no arquivo `projectsData.js`
3. Os filtros serão criados automaticamente

## 🚀 Exemplo Prático

Se tiver um projeto de design de um website para uma padaria:

1. **Coloque a imagem**: `public/images/web-design/padaria-website.jpg`
2. **Adicione os dados**:

```javascript
{
  id: 10,
  title: 'Website Padaria Artesanal',
  description: 'Site responsivo com catálogo de produtos e sistema de encomendas',
  image: '/images/web-design/padaria-website.jpg',
  category: 'Web Design',
  year: '2024',
  technologies: ['HTML5', 'CSS3', 'JavaScript'],
  client: 'Padaria do Bairro',
  url: 'https://padaria-artesanal.pt'
}
```

## 💡 Dicas

- Use nomes descritivos para as imagens
- Mantenha consistência no tamanho das imagens
- Otimize as imagens antes de adicionar
- Teste se as imagens aparecem corretamente no site

## ❓ Problemas Comuns

- **Imagem não aparece**: Verifique se o caminho está correto
- **Site lento**: Reduza o tamanho das imagens
- **Layout quebrado**: Mantenha a proporção 3:2 nas imagens
