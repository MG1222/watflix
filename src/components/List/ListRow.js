import Movie from './Movie.js';

export default function ListRow(props) {
    const { movies } = props;



    return (

        <div className="list-row">
            <div className='movie-container'>
                {props.movies.map( (movie, key) =>
                    <Movie
                        title={movie.title}
                        descriptionShort={movie.overview}
                        image={movie.poster_path}
                        key={`movie${key}`}
                    />
                )}
            </div>
        </div>
    )
}
