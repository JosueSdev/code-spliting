import pokemon from './pokemonData.json';

const Pokemon = () => {
  return (
    <ol>
      {pokemon.results.map((poke) => (<li>{poke.name}</li>))}
    </ol>
  );
}

export default Pokemon;
