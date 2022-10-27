import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";

// need to return the data from the api call

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies", async () => {
        const response =  await movieApi.get(`/movie/upcoming?api_key=${ API_KEY }`);
        return response.data;
});

export const fetchAsyncGenres = createAsyncThunk(
    "movies/fetchAsyncGenres", async () => {
        const response =  await movieApi.get(`/genre/movie/list?api_key=${ API_KEY }`);
        console.log(response)
        return response.data;
});

const initialState = {
    moviesGenres:[],
    filter:true,
    movies: [],
};

// we create a slice of the store for the movies

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: ( state, action ) => {
            state.movies = action.payload;
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
            return { ...state, movies: {} };
        },

        [fetchAsyncGenres.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [fetchAsyncGenres.fulfilled]: (state, { payload }) => {
           state.moviesGenres = payload.results;
        },
        [fetchAsyncGenres.rejected]: (state) => {
            return { ...state, moviesGenres: [] };
        }
    },
})

export default movieSlice.reducer;
