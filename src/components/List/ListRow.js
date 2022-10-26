import Movie from './Movie.js';
import Filter from "../filter.js";

export default function ListRow(props) {
    const { movies, category } = props;

    return (
            
            <div className="movie-container">
                <h2>{category}</h2>
                {movies.map( (movie, key) =>
                    <Movie 
                        title={movie.title}
                        descriptionShort={movie.descriptionShort}
                        image={movie.img}
                        key={`movie${key}`}
                    />
                )}
                <Filter/>
            </div>
    )
}