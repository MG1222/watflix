import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
    "store/fetchAsyncMovies",
    async () => {
        return await movieApi.get(`/movie/upcoming?api_key=${ API_KEY }`);
    }
);

export const fetchAsyncShows = createAsyncThunk(
    "store/fetchAsyncShows",
    async () => {
        return await movieApi.get(`/tv/popular?api_key=${ API_KEY }`);
    }
);

const initialState = {
    movies: {},
    shows: {},
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
    },
  })
export default movieSlice.reducer;