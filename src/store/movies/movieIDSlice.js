import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";

export const getMovieByID = createAsyncThunk(
    "movie/getMovieByID",
    /**  @param arg {movieID: number} */
    async (arg) => {
        const response = await movieApi.get(`/movie/${arg}?api_key=${ API_KEY }&language=fr-FR`);
        return response.data;
    });


const initialState = {
    movie: {},
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
            state.movie = payload;
        },
        [getMovieByID.rejected]: (state) => {
            return { ...state, isLoading: false };
        }
    },
})



export default movieIDSlice.reducer;
