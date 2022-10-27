import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";

export const fetchAsyncSeries = createAsyncThunk(
    "series/fetchSeries", async () => {
        const response = await movieApi.get(
            `/tv/popular?api_key=${API_KEY}`);
        return response.data;
});

export const fetchAsyncSeriesGenres = createAsyncThunk(
    "movies/fetchAsyncSeriesGenres", async () => {
        const response =  await movieApi.get(`/genre/tv/list?api_key=${ API_KEY }`);
        return response.data;
});

const initialState = {
    series: [],
    seriesGenres:[],
    filter:false
};


const serieSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        changeFilter:(state)=>{
            state.filter=!state.filter;
        }
    },
    extraReducers: {
        [fetchAsyncSeries.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
            state.series = payload.results;
        },
        [fetchAsyncSeries.rejected]: (state) => {
            return { ...state, series: [] };
        },

        [fetchAsyncSeriesGenres.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [fetchAsyncSeriesGenres.fulfilled]: (state, { payload }) => {
           state.seriesGenres = payload.genres;
        },
        [fetchAsyncSeriesGenres.rejected]: (state) => {
            return { ...state, seriesGenres: [] };
        }
    },
})

export const {changeFilter}=serieSlice.actions;
export default serieSlice.reducer;