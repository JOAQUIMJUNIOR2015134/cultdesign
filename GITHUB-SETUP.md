# Instruções para Criar Repositório no GitHub

## Passos para criar o repositório remoto:

### 1. Acesse o GitHub
- Vá para [github.com](https://github.com)
- Faça login na sua conta

### 2. Criar Novo Repositório
- Clique no botão **"+"** no canto superior direito
- Selecione **"New repository"**

### 3. Configurar o Repositório
- **Repository name**: `CultDesign-Portfolio`
- **Description**: `Portfolio responsivo construído com React + Vite para apresentar trabalhos de design`
- **Visibility**: 
  - ✅ **Public** (recomendado para portfolio)
  - ⚠️ **Private** (se preferir manter privado)
- ⚠️ **NÃO** marque "Add a README file" (já temos um)
- ⚠️ **NÃO** marque "Add .gitignore" (já temos um)
- ⚠️ **NÃO** escolha uma licença por agora

### 4. Criar o Repositório
- Clique em **"Create repository"**

### 5. Conectar o Repositório Local ao GitHub
Após criar o repositório, copie e execute estes comandos no terminal:

```bash
git remote add origin https://github.com/SEU_USERNAME/CultDesign-Portfolio.git
git branch -M main
git push -u origin main
```

⚠️ **IMPORTANTE**: Substitua `SEU_USERNAME` pelo seu username do GitHub!

### 6. Verificar Upload
- Acesse seu repositório no GitHub
- Verifique se todos os arquivos foram enviados
- Confirme se as imagens do portfolio estão visíveis

## Comandos Git Úteis para o Futuro:

```bash
# Verificar status
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push

# Ver histórico
git log --oneline
```

## Estrutura do Projeto Atual:

```
CultDesign/
├── src/
│   ├── assets/
│   │   ├── Exterior/ (9 imagens)
│   │   ├── Grafico/ (8 imagens)
│   │   ├── Interior/ (48 imagens)
│   │   └── Produto/ (16 imagens)
│   ├── components/
│   │   ├── CardImagens.jsx
│   │   └── NavigationBar.jsx
│   └── pages/
│       └── Home.jsx
├── public/
├── package.json
├── README.md
└── .gitignore
```

## Portfolio Features:
- ✅ Sistema de filtros por categoria
- ✅ Layout responsivo com CSS Grid
- ✅ 81 imagens organizadas
- ✅ Navegação intuitiva
- ✅ Performance otimizada
