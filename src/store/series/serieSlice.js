import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";

export const fetchAsyncSeries = createAsyncThunk(
    "series/fetchSeries", async () => {
        const response = await movieApi.get(
            `/tv/popular?api_key=${API_KEY}`);
        return response.data;
    });

const initialState = {
    series: [],
};


const serieSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncSeries.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
            state.series = payload.results;
        },
        [fetchAsyncSeries.rejected]: (state) => {
            return { ...state, series: {} };
        }
    },
})

export default serieSlice.reducer;