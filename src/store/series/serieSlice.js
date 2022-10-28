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

export const fetchAsyncSeriesByGenres = createAsyncThunk(
    "movies/fetchAsyncSeriesByGenres", async () => {
        const select=document.getElementById("filter-series-by-genres");
        const response =  await movieApi.get(`/discover/tv?api_key=${ API_KEY }&sort_by=original_title.desc&with_genres=${parseInt(select.value)}`);
        return response.data;
});

const initialState = {
    series: [],
    seriesGenres:[],
    seriesByGenres:[],
    filter:false,
    filtervalue:0
};


const serieSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        changeSeriesFilter:(state)=>{
            state.filter=!state.filter;
        },
        changeSeriesFilterValue:(state,action)=>{
            state.filtervalue=action.payload;
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
        },

        [fetchAsyncSeriesByGenres.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [fetchAsyncSeriesByGenres.fulfilled]: (state, { payload }) => {
           state.seriesByGenres = payload.results;
        },
        [fetchAsyncSeriesByGenres.rejected]: (state) => {
            return { ...state, seriesByGenres: [] };
        }
    },
})

export const {changeSeriesFilter, changeSeriesFilterValue}=serieSlice.actions;
export default serieSlice.reducer;