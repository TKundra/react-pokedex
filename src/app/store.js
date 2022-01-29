import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../redux/pokemon';

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
    },
});