import axios from 'axios';
import { getPokemons, getPokemonsSuccess, getPokemonsFailure } from '../pokemon';

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemons = (offset=20) => {
    return async (dispatch) => {
        dispatch(getPokemons());
        try {
            await axios.get(
                `${BASE_URL}/pokemon?limit=20&offset=${offset}`,
            ).then((response) => {
                dispatch(getPokemonsSuccess(response.data.results));
            }).catch((error) => dispatch(getPokemonsFailure()));
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchPokemonType = (type='normal') => {
    return async (dispatch) => {
        dispatch(getPokemons());
        try {
            await axios.get(
                `${BASE_URL}/type/${type}`,
            ).then((response) => {
                dispatch(getPokemonsSuccess(response.data.pokemon));
            }).catch((error) => dispatch(getPokemonsFailure()));
        } catch (error) {
            console.log(error);
        }
    }
}
