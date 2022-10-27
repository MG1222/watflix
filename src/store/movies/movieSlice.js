import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";

// need to return the data from the api call

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies", async () => {
        const response =  await movieApi.get(`/movie/top_rated?api_key=${ API_KEY }`);
        return response.data;
});

export const fetchAsyncMoviesGenres = createAsyncThunk(
    "movies/fetchAsyncMoviesGenres", async () => {
        const response =  await movieApi.get(`/genre/movie/list?api_key=${ API_KEY }`);
        return response.data;
});

export const fetchAsyncMoviesByGenres = createAsyncThunk(
    "movies/fetchAsyncMoviesByGenres", async () => {
        const response =  await movieApi.get(`/discover/movie?api_key=${ API_KEY }&sort_by=original_title.desc&with_genres=${initialState.filterValue}`);
        return response.data;
});

const initialState = {
    movies: [],
    moviesGenres:[],
    moviesByGenres:[],
    filter:true,
    filterValue:0
};

// we create a slice of the store for the movies

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        changeFilter:(state)=>{
            state.filter=!state.filter;
        },
        changeFilterValue:(state,action)=>{
            state.filterValue=action.payload;
            console.log(state.filterValue);
            console.log(state.moviesByGenres);
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
           state.movies = payload.results;
        },
        [fetchAsyncMovies.rejected]: (state) => {
            return { ...state, movies: [] };
        },

        [fetchAsyncMoviesGenres.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [fetchAsyncMoviesGenres.fulfilled]: (state, { payload }) => {
           state.moviesGenres = payload.genres;
        },
        [fetchAsyncMoviesGenres.rejected]: (state) => {
            return { ...state, moviesGenres: [] };
        },

        [fetchAsyncMoviesByGenres.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [fetchAsyncMoviesByGenres.fulfilled]: (state, { payload }) => {
           state.moviesByGenres = payload.results;
        },
        [fetchAsyncMoviesByGenres.rejected]: (state) => {
            return { ...state, moviesByGenres: [] };
        }
    },
})

export const {changeFilter, changeFilterValue}=movieSlice.actions;
export default movieSlice.reducer;
