import express from "express";

import { getPokemon, createPokemon, getPokemonId, deletePokemon, updatePokemon } from "../controllers/pokemon.js";

const router = express.Router();

let pokemon = [];

// create get route to get all pokemon data
router.get("/", getPokemon);

// create post route to add pokemon data to database
router.post("/", createPokemon);

// create get route to access pokemon by Id
router.get('/:id', getPokemonId);

// create delete route to delete pokemon data from database
router.delete('/:id', deletePokemon);

// create patch route to update pokemon data
router.patch('/:id', updatePokemon);

export default router;

// {
//     "order": 13,
//     "name": "Weedle",
//     "type": "Bug and Poison",
//     "evolutionStage": "Basic"
// }