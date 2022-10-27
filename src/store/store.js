import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies/movieSlice";
import seriesReducer from "./series/serieSlice";
import favorisReducer from './favoris/favorisSlice';
import movieIDReducer from "./movies/movieIDSlice";
import serieIDReducer from "./series/serieIDSlice";



 const store = configureStore({
    reducer: {
        movies: moviesReducer,
        series: seriesReducer,
        serieID: serieIDReducer,
        movieID: movieIDReducer,
        favoris: favorisReducer
    },
});
export default store;