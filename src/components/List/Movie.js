import { useState } from 'react';
import {Link} from 'react-router-dom';
import Image from '../Image/Image';
import { useSelector, useDispatch } from "react-redux";
import {addMovie, removeMovie } from "../../store/favoris/favorisSlice";

export default function Movie(props) {

    const dispatch = useDispatch();
    const { movie } = props;
    console.log(movie);
    const { title, overview, backdrop_path, id } = movie;

    const [showOverview, setShowOverview] = useState(false);
    const favoris = useSelector((state) => state.favoris.movies);
    const [isFav, setFav] = useState(favoris.includes(movie));

    const toggleFavoris = () => {
        if(isFav) {
            dispatch(removeMovie(movie));
            setFav(false);
        } else {
            dispatch(addMovie(movie))
            setFav(true);
        }
    }
    return (
        <Link to={`/details/movie/${id}`}>
        <div className="movie"
            onMouseEnter={(event) => setShowOverview(true)}
            onMouseLeave={(event) => setShowOverview(false)}
        >
            <Image src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`} size="small" className="movie-img"/>
            {
                showOverview ?

                    <div className='movie-description-short'>
                        <h3>{title}</h3>
                        <p>{overview}</p>
                        <button
                            onClick={(event) => toggleFavoris()}
                        >
                            { isFav ? "Supprimer des favoris" : "Ajouter aux favoris"}
                        </button>
                    </div>
                    :
                    null
            }
        </div>
        </Link>
    )
}