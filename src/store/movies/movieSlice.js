import { createSlice } from "@reduxjs/toolkit";

import baseUrl from "../../apiConf/movieApi";
import {API_KEY} from "../../apiConf/movieApiKey";

const initialState = {
    movies: {},
};

const movieSlice = createSlice({
    name: 'movies',
    initialState:{
        moviesGenres:baseUrl.get("/genre/movie/list?"+API_KEY+"&language=fr-FR"),
        filter:true
    },
    reducers: {
        addMovies: ( state, action ) => {
            state.movies = action.payload;
        },
    },
});


export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
