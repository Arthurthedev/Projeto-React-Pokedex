import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { usePokemons } from "../hooks/UsePokemons";
import { searchPokemonByName } from "../api/searchPokemon";
import SearchBar from "../components/SearchBar";


function PokemonHome() {
  const { pokemonData, loading, fetchPokemons, offset, setOffset, setPokemonData } = usePokemons();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  async function handleSearchPokemon() {
    if (searchTerm.trim() === "") {
      fetchPokemons(10, 0);
      return;
    }

    const resultado = await searchPokemonByName(searchTerm);
    setPokemonData(resultado);
  }

  return (
    <Main>
      <h1>Bem-vindo à Pokédex!</h1>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onSearch={handleSearchPokemon}
        isSearching={isSearching}
      />

      <Div>
        {pokemonData.map((pokemon) => (
          <StyledLink to={`/pokemon/${pokemon.nome}`} key={pokemon.id}>
            <PokeInfo>
              <p>{pokemon.nome}</p>
              <img
                src={pokemon.imagem}
                alt={`Imagem do Pokémon ${pokemon.nome}`}
              />
            </PokeInfo>
          </StyledLink>
        ))}
      </Div>

      <LoadButton
        onClick={() => {
          const newOffset = offset + 10;
          setOffset(newOffset);
          fetchPokemons(10, newOffset);
        }}
        disabled={loading || isSearching}
      >
        {loading ? "Carregando..." : "Carregar mais"}
      </LoadButton>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #dadfe8;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const PokeInfo = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid orange;
  padding: 10px;
  text-align: center;
  width: 120px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const LoadButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ffb347;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SearchButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #ffb347;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.card.backgroundColor};
  color: ${({ theme }) => theme.card.textColor};
  border: 1px solid ${({ theme }) => theme.card.borderColor};
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 16px;
  outline: none;
  transition: 0.2s;
  width: 250px;

  &::placeholder {
    color: ${({ theme }) => theme.card.textColor}99;
  }

  &:focus {
    filter: brightness(1.1);
  }
`;

export default PokemonHome;
