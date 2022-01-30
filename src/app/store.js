import { configureStore, combineReducers } from '@reduxjs/toolkit';
import pokemonReducer from '../redux/pokemon';
import pokemonDetailReducer from '../redux/pokemonDetail';
import pokemonStatReducer from '../redux/pokemonStat';

const reducer = combineReducers({
    pokemon: pokemonReducer,
    pokemonDetail: pokemonDetailReducer,
    pokemonStat: pokemonStatReducer,
});
export const store = configureStore({
    reducer: reducer,
});