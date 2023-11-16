import { useState, useEffect } from "react";

function Card({ name }) {
  const [pokemon, setPokemon] = useState([]);

  async function getData(pokeName) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`,
      { mode: "cors" }
    );
    const pokeData = await response.json();
    setPokemon(pokeData);
    console.log(pokemon);
  }

  useEffect(() => {
    getData(name);
  }, []);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />
    </div>
  );
}

export default Card;
