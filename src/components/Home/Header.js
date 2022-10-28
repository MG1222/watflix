import Image from "../Image/Image";
export default function Header(props) {

    const { movies } = props.movies;


    let movie = movies[(Math.random() * movies.length) | 0]

    {if(movie) {
        return (
            <div className="header">
                <div className="header-container">
                    <div className="header-image">
                        <Image src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} size="small" className="movie-img"/>
                    </div>
                    <div className="header-text">
                        <h1>{movie.title}</h1>
                        <div>
                        <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="header">
                <div className="header-container">
                    <div className="header-image">
                       We are loading the movies
                    </div>
                    <div className="header-text">
                        <h1>Movie</h1>
                    </div>
                </div>
            </div>
        )
    }
    }

    }


