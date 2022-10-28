import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";

export const getserieByID = createAsyncThunk(
    "serie/getserieByID",
    /**  @param arg {serieID: number} */
    async (arg, language) => {
        const response = await movieApi.get(`/tv/${arg}?api_key=${ API_KEY }&language=${language}`);
        return response.data;

    });


const initialState = {
    serie: {},
};


const serieIDSlice = createSlice({
    name: 'serieID',
    initialState,
    reducers: {},
    extraReducers: {
        [getserieByID.pending]: (state) => {
            return { ...state, isLoading: true };
        },
        [getserieByID.fulfilled]: (state, { payload }) => {
            state.serie = payload;
        },
        [getserieByID.rejected]: (state) => {
            return { ...state, isLoading: false };

        }
    },
})



export default serieIDSlice.reducer;
