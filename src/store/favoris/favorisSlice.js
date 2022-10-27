import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    series : []
}

const favorisSlice = createSlice({
    name: 'favoris',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            return {
                ...state,
                movies : [...state.movies, action.payload]
            }
        },
        removeMovie(state, action) {
            state.movies.remove(action.payload)
        },
        addSerie(state, action) {
            state.series.push(action.payload)
        },
        removeSerie(state, action) {
            state.series.remove(action.payload)
        }
    }
})

export const {addMovie, addSerie, removeMovie, removeSerie} = favorisSlice.actions
export default favorisSlice.reducer