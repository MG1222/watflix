import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies", async () => {
        return await movieApi.get(`/movie/upcoming?api_key=${ API_KEY }`);
    });
export const fetchAsyncSeries = createAsyncThunk("movies/fetchAsyncSeries", async () => {
   return  await movieApi.get(`/tv/popular?api_key=${API_KEY}`);
});


const initialState = {
    movies: {},
    series: {}

};

// we create a slice of the store for the movies, series

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) => {
            return { ...state, isLoading: true };


        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {

            return { ...state, movies: payload.data.results };
        },
        [fetchAsyncMovies.rejected]: (state) => {
            return { ...state, movies: {} };

        },
        [fetchAsyncSeries.pending]: (state) => {
            return { ...state, series: {} };

        },
        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {

            console.log(payload);
            return { ...state, series: payload.data.results };
        },
        [fetchAsyncSeries.rejected]: (state) => {

            return { ...state, series: {} };

        }
    },
})



export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export default movieSlice.reducer;
