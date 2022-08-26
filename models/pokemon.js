import Pokeapi from "pokedex-promise-v2";

const service = new Pokeapi();

export function getList() {
  return service.getPokemonsList().then((data) => data.results);
}

export function getSingle(id) {
  return service.getPokemonByName(id);
}
