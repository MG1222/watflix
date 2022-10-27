import Movie from "../List/Movie";
import { useSelector } from 'react-redux';

export default function Favoris() {

    const movies = useSelector(state => state);
    const series = useSelector(state => state);
    console.log(movies);
    //[undefined, undefined]
    return (
        <div className="favoris">
            {
                movies.map((movie, key) => 
                    <Movie
                        title={movie.title}
                        descriptionShort={movie.descriptionShort}
                        image={movie.img}
                        key={`movie${key}`}
                        className="movie-favoris"
                    />
                )
            }
        </div>
    )
}