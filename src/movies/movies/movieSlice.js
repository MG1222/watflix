import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (searchTerm, { rejectWithValue }) => {
        try {
            const response = await movieApi.get(`/?apikey=${API_KEY}&s=${searchTerm}`);
            return console.log(response.data);
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
};

const movieSlice = createSlice({
            name: "movies",
            initialState,
            reducers: {
                removeSelectedMovieOrShow: (state) => {
                    state.selectedMovieOrShow = {};
                },
            },
        });


