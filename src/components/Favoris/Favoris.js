import Movie from "../List/Movie";
import Series from "../List/Series";
import { useSelector } from 'react-redux';

export default function Favoris() {

    const { movies, series } = useSelector(state => state.favoris);
    return (
        <div className="favoris">
            <div className="favorisMovie">
                {
                    movies.map((movie, key) =>
                        <Movie
                            movie={movie}
                            key={`movie${key}`}
                            className="movie-favoris"
                        />
                    )
                }
            </div>
            <div className="favorisSeries">
                {
                    series.map((serie, key) =>
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