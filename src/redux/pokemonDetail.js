import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: false,
    loading: false,
    pokemonDetails: [],
};

export const pokemonDetailSlice = createSlice({
    name: "pokemonDetail",
    initialState: initialState,
    reducers: {
        getPokemonDetails: (state) => {
            state.loading = true;
        },
        getPokemonDetailsSuccess: (state, action) => {
            state.pokemonDetails = action.payload
            state.loading = false
            state.error = false
        },
        getPokemonDetailsFailure: (state) => {
            state.loading = false
            state.error = true
        },
    },
})

export const { getPokemonDetails, getPokemonDetailsSuccess, getPokemonDetailsFailure } = pokemonDetailSlice.actions;
export default pokemonDetailSlice.reducer;