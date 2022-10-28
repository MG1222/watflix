import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    series : []
}

const favorisSlice = createSlice({
    name: 'favoris',
    initialState,
    reducers: {
        addMovie(state, action) {
            let copie = [...state.movies]
            copie.push(action.payload);
            return {
                ...state,
                movies: copie
            }
        },
        removeMovie(state, action) {
            let copie = [...state.movies]
            copie = copie.filter(elem => elem !== action.payload);
            return {
                ...state,
                movies: copie
            }
        },
        addSerie(state, action) {
            let copie = [...state.series]
            copie.push(action.payload);
            return {
                ...state,
                series: copie
            }
        },
        removeSerie(state, action) {
            let copie = [...state.series]
            copie = copie.filter(elem => elem !== action.payload);
            return {
                ...state,
                series: copie
            }
        }
    }
})

export const {addMovie, addSerie, removeMovie, removeSerie} = favorisSlice.actions
export default favorisSlice.reducer