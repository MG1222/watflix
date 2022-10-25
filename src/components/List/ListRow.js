import Movie from './Movie.js';

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
            </div>
    )
}