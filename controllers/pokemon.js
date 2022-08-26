import * as PokemonModel from "../models/pokemon.js";

export function getList(req, res) {
  return PokemonModel.getList()
    .then((results) => {
      return res.status(200).json({ results });
    })
    .catch((err) => {
      return res.status(500).json({ error: err });
    });
}

export function getSingle(req, res) {
  const id = req.params.id;

  return PokemonModel.getSingle(id)
    .then((results) => {
      return res.status(200).json({ results });
    })
    .catch((err) => {
      return res.status(500).json({ error: err });
    });
}
