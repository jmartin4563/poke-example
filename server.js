import newrelic from "newrelic";
import express from "express";
import * as PokemonController from "./controllers/pokemon.js";
import * as PokemonMiddleware from "./middleware/pokemon.js";

const app = express();
const port = process.env.PORT;

app.get("/pokemon", PokemonController.getList);
app.get(
  "/pokemon/:id",
  PokemonMiddleware.validateId,
  PokemonController.getSingle
);

app.listen(port, () => {
  console.log(`Pokemon App running on ${port}`);
});
