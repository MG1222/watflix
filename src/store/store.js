import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies/movieSlice";
import seriesReducer from "./series/serieSlice";
import favorisReducer from './favoris/favorisSlice';
import movieIDReducer from "./movies/movieIDSlice";



 const store = configureStore({
    reducer: {
        movies: moviesReducer,
        series: seriesReducer,
        movieID: movieIDReducer,
        favoris: favorisReducer
    },
});
export default store;