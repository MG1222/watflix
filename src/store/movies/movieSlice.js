import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";
// need to return the data from the api call

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies", async () => {
        const response =  await movieApi.get(`/movie/upcoming?api_key=${ API_KEY }`);
        return response.data;
    });


const initialState = {
    movies: [],
};

// we create a slice of the store for the movies

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
           state.movies = payload.results;
        },
        [fetchAsyncMovies.rejected]: (state) => {
            return { ...state, movies: {} };
        }
    },
})

export default movieSlice.reducer;
