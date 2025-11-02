import styled from "styled-components";
import { Link } from "react-router-dom";
import { usePokemons } from "../hooks/UsePokemons";

function PokemonHome() {
   const {pokemonData, loading, fetchPokemons, offset, setOffset} = usePokemons()

    return (
        <Main>
            <h1>Bem-vindo à Pokédex!</h1>

            <Div>
                {pokemonData.map((pokemon) => (
                    <StyledLink to={`/pokemon/${pokemon.nome}`} key={pokemon.id}>
                        <PokeInfo>
                            <p>{pokemon.nome}</p>
                            <img src={pokemon.imagem} alt={`Imagem do Pokémon ${pokemon.nome}`} />
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
                disabled={loading}
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
`

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

export default PokemonHome;
