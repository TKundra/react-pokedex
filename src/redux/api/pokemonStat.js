import { getPokemonStats, getPokemonStatsSuccess, getPokemonStatsFailure } from '../../redux/pokemonStat';
import axios from 'axios';

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonStats = (id) => {
    return async (dispatch) => {
        dispatch(getPokemonStats());
        try {
            await axios.get(
                `${BASE_URL}/pokemon/${id}`,
            ).then((response) => {
                dispatch(getPokemonStatsSuccess(response.data.stats));
            }).catch((error) => dispatch(getPokemonStatsFailure()));
        } catch (error) {
            console.log(error);
        }
    }
}
