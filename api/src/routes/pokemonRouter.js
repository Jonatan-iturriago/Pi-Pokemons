const { Router } = require("express");
const pokemonRouter = Router();
const {
    getAll,
    getById,
    postPokemon,
    

} = require("./handlers/handlersPokemons");


pokemonRouter.get('/', getAll);
pokemonRouter.get('/:id', getById);
// pokemonRouter.get("/name", getByName);

pokemonRouter.post('/',postPokemon)

module.exports = pokemonRouter;