import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies/movieSlice";
import seriesReducer from "./series/serieSlice";
import movie_IDReducer from "./movies/movieIDSlice";



 const store = configureStore({
    reducer: {
        movies: moviesReducer,
        series: seriesReducer,
        movie_ID: movie_IDReducer
    },
});
export default store;