
<img src="##" alt="exemplo site pokedex">

# 📘 Propósito da aplicação 
- Esta aplicação é uma Pokédex interativa, desenvolvida em React, que consome a PokéAPI para exibir informações sobre diferentes Pokémon. O objetivo principal é demonstrar habilidades com React moderno, consumo de APIs REST, gerenciamento de estado e organização modular de código utilizando boas práticas.

# ⚙️ Funcionalidades da Aplicação

- Exibição de uma lista de Pokémon com nome e imagem.

- Botão “Carregar mais” que adiciona novos Pokémon sem recarregar a página.

- Página individual de cada Pokémon com:

- Nome, tipo principal, imagem;

- Lista dos quatro primeiros movimentos;

- Habilidades com suas descrições obtidas via endpoint da PokéAPI.

- Tema claro/escuro com troca dinâmica de cores usando Context API.

- Navegação SPA (Single Page Application) via React Router.

# 🛠️ Ferramentas Utilizadas
- **React**: Framework moderno, componentizado e ideal para SPAs.

- **Vite**: Ferramenta leve e rápida para criação e build do projeto.

- **Styled-components**: Permite estilização dinâmica e reativa ao tema.

- **React Router DOM**: Facilita a navegação entre páginas sem recarregar a aplicação.

- **PokéAPI**: API pública e gratuita com dados completos sobre Pokémon.
# 🧠 Decisões de Projeto

Separação por responsabilidades:

- Lógica de API foi isolada em /src/api, enquanto o consumo e estado estão em hooks personalizados (/src/hooks), e a renderização nas páginas (/src/pages).

- Theme Context implementado para permitir mudança de tema globalmente com facilidade, evitando prop drilling.

- Criação pensada em um código modular e escalável, onde cada parte da aplicação tem uma função clara e pode ser reutilizada ou expandida com mínimo impacto.

# 🚀 Como Rodar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/pokedex-react.git
cd pokedex-react

2️⃣ Instalar dependências
npm install

3️⃣ Rodar o projeto em modo desenvolvimento
npm run dev

4️⃣ Abrir no navegador

Acesse o endereço que aparecer no terminal (geralmente http://localhost:5173
).