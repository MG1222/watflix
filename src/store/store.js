import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies/movieSlice";
import seriesReducer from "./series/serieSlice";
import movieIDReducer from "./movies/movieIDSlice";



 const store = configureStore({
    reducer: {
        movies: moviesReducer,
        series: seriesReducer,
        movieID: movieIDReducer
    },
});
export default store;