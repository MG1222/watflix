import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";
// need to return the data from the api call

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies", async (language) => {
        const response =  await movieApi.get(`/movie/top_rated?api_key=${ API_KEY }&language=${language}`);
        return response.data;
    });


const initialState = {
    movies: [],
    language: "fr-FR"
};

// we create a slice of the store for the movies

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        updateLanguageMovies(state, action) {
            state.language = action.payload;
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
        }
    },
})

export const { updateLanguageMovies } = movieSlice.actions;
export default movieSlice.reducer;
