import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./movies/movieSlice";
import seriesReducer from "./series/serieSlice";
import favorisReducer from './favoris/favorisSlice'



 const store = configureStore({
    reducer: {
        movies: moviesReducer,
        series: seriesReducer,
        favoris: favorisReducer
    },
});
export default store;