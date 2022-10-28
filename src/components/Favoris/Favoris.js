import Movie from "../List/Movie";
import Series from "../List/Series";
import { useSelector, useDispatch } from 'react-redux';
import {getMovieByID} from "../../store/movies/movieIDSlice";
import React, {useEffect} from "react";
import ListRow from "../List/ListRow";

export default function Favoris() {
    const dispatch = useDispatch();
    const { favoris, series, movies } = useSelector(state => state);
    const favMovies = {
        movies : movies.movies.filter(
            (e) => favoris.movies.includes(e.id)
        )
    }
    const favSeries = {
        series: series.series.filter(
            (e) => favoris.series.includes(e.id)
        )
    }
    return (
        <div className="favoris">
            <ListRow category="Mes films favoris" movies={favMovies} type="movies"/>
            <ListRow category="Mes séries favorites" movies={favSeries} type="series"/>
        </div>
    )
}