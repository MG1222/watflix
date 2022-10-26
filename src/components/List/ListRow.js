import Movie from './Movie.js';

export default function ListRow(props) {
    const { movies, category } = props;

    return (
            
            <div className="list-row">
                <h2>{category}</h2>
                <div className='movie-container'>
                    {movies.map( (movie, key) =>
                        <Movie 
                            title={movie.title}
                            descriptionShort={movie.descriptionShort}
                            image={movie.img}
                            key={`movie${key}`}
                            className="movie-home"
                        />
                    )}
                </div>
            </div>
    )
}