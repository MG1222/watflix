import Movie from "../List/Movie";
import Series from "../List/Series";
import { useSelector, useDispatch } from 'react-redux';
import {getMovieByID} from "../../store/movies/movieIDSlice";
import {useEffect} from "react";

export default function Favoris() {
    const dispatch = useDispatch();
    const { favoris, series, movies } = useSelector(state => state);
    const language = movies.language;
    console.log("favoris", favoris.movies)
    const favMovies = movies.movies.filter(
        (e) => favoris.movies.includes(e.id)
    )
    const favSeries = series.series.filter(
        (e) => favoris.series.includes(e.id)
    )

    return (
        <div className="favoris">
            <div className="favorisMovie">
                {
                    favMovies.map((movie, key) => {
                        return <Movie
                            movie={movie}
                            key={`movie${key}`}
                            className="movie-favoris"
                        />
                    }
                    )
                }
            </div>
            <div className="favorisSeries">
                {
                    favSeries.map((serie, key) =>
                        <Series
                            serie={serie}
                            key={`serie${key}`}
                            className="serie-favoris"
                        />
                    )
                }
            </div>
        </div>
    )
}