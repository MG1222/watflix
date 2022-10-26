import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies/movieSlice";
import seriesReducer from "./series/serieSlice";



 const store = configureStore({
    reducer: {
        movies: moviesReducer,
        series: seriesReducer
    },
});
export default store;