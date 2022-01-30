import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: false,
    loading: false,
    pokemons: [],
};

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: initialState,
    reducers: {
        getPokemons: (state) => {
            state.loading = true;
        },
        getPokemonsSuccess: (state, action) => {
            state.pokemons = action.payload
            state.loading = false
            state.error = false
        },
        getPokemonsFailure: (state) => {
            state.loading = false
            state.error = true
        },
    },
})

export const { getPokemons, getPokemonsSuccess, getPokemonsFailure } = pokemonSlice.actions;
export default pokemonSlice.reducer;