import Movie from './Movie.js';
import {useEffect} from "react";

export default function ListRow(props) {
    const { movies } = props.movies;

    useEffect(() => {
        console.log(movies);
    }, [movies]);



    return (

        <div className="list-row">
            <div className='movie-container'>
                {movies.map((movie, key) => {
                        return (
                            <Movie
                                title={movie.title}
                                descriptionShort={movie.overview}
                                image={movie.poster_path}
                                key={`movie${key}`}
                            />
                        )
                    })
                }


            </div>
        </div>
    )
}
