import { useState, useEffect } from "react";

function Card({ name, handleClick }) {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function getData(pokeName) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
        { mode: "cors" }
      );
      const pokeData = await response.json();
      setPokemon(pokeData);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData(name);
  }, [name]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div onClick={handleClick}>
      <h1>{pokemon.name}</h1>
      {pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default Card;
