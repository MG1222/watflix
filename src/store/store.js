import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies/movieSlice";
import seriesReducer from "./series/serieSlice";
import movieIDReducer from "./movies/movieIDSlice";
import serieIDReducer from "./series/serieIDSlice";



 const store = configureStore({
    reducer: {
        movies: moviesReducer,
        series: seriesReducer,
        movieID: movieIDReducer,
        serieID: serieIDReducer
    },
});
export default store;