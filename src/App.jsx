import { createGlobalStyle } from "styled-components"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonInfos from "./pages/pokemonInfo";
import PokemonHome from "./pages/pokemonHome";
function App() {
  
  return (
      <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<PokemonHome/>} />
        <Route exact path="/pokemon/:name" element={<PokemonInfos/>}/>
      </Routes>
      </BrowserRouter>
  );

}

const GlobalStyle = createGlobalStyle`
  
*{
      font-family: Poppins, sans-serif;
      margin:0;
      padding:0;
      list-style: none;
}
`

export default App
