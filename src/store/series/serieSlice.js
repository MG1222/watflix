import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";

export const fetchAsyncSeries = createAsyncThunk(
    "series/fetchSeries", async (language) => {
        const response = await movieApi.get(
            `/tv/popular?api_key=${API_KEY}&language=${language}`);
        return response.data;
    });

const initialState = {
    series: [],
    language: "fr-FR"
};


const serieSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        updateLanguageSeries(state, action) {
            state.language = action.payload;
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
            return { ...state, series: {} };
        }
    },
})

export const { updateLanguageSeries } = serieSlice.actions;
export default serieSlice.reducer;