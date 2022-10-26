import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";

export const getMovieByID = createAsyncThunk(
    "movies/fetchMovieByID",
    async (movie_ID, thunkAPI) => {
        const response =  await movieApi.get(`/movie/${movie_ID}?api_key=${ API_KEY }`);
        return response.data;
    });


const initialState = {
    movie: [],
};


const movieIDSlice = createSlice({
    name: 'movieID',
    initialState,
    reducers: {},
    extraReducers: {
        [getMovieByID.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [getMovieByID.fulfilled]: (state, { payload }) => {
            state.movie = payload.results;
        },
        [getMovieByID.rejected]: (state) => {
            return { ...state, isLoading: false };

        }
    },
})




export const movieIDReducer = movieIDSlice.reducer;
