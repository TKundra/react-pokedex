import axios from 'axios';
import { getPokemonDetails, getPokemonDetailsSuccess, getPokemonDetailsFailure } from '../pokemonDetail';

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonDetailName = (name) => {
    return async (dispatch) => {
        dispatch(getPokemonDetails());
        try {
            await axios.get(
                `${BASE_URL}/pokemon/${name}`,
            ).then((response) => {
                dispatch(getPokemonDetailsSuccess(response.data.forms));
            }).catch((error) => dispatch(getPokemonDetailsFailure()));
        } catch (error) {
            console.log(error);
        }
    }
}
