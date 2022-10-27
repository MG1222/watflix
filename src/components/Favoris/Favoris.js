import Movie from "../List/Movie";
import { useSelector } from 'react-redux';

export default function Favoris() {

    const { movies } = useSelector(state => state.favoris);
    console.log(movies);
    return (
        <div className="favoris">
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
    )
}