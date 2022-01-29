import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: false,
    loading: false,
    data: []
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers: {
        
    }
});

export const {} = pokemonSlice.actions;
export default pokemon.reducer;