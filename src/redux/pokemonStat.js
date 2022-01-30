import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: false,
    loading: false,
    pokemonStats: [],
};

export const pokemonStatSlice = createSlice({
    name: "pokemonStat",
    initialState: initialState,
    reducers: {
        getPokemonStats: (state) => {
            state.loading = true;
        },
        getPokemonStatsSuccess: (state, action) => {
            state.pokemonStats = action.payload
            state.loading = false
            state.error = false
        },
        getPokemonStatsFailure: (state) => {
            state.loading = false
            state.error = true
        },
    },
})

export const { getPokemonStats, getPokemonStatsSuccess, getPokemonStatsFailure } = pokemonStatSlice.actions;
export default pokemonStatSlice.reducer;