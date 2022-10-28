import { useState } from 'react';
import Image from '../Image/Image';
import { useSelector, useDispatch } from "react-redux";
import {addMovie, removeMovie } from "../../store/favoris/favorisSlice";

export default function Movie(props) {

    const dispatch = useDispatch();
    const { movie } = props;
    const { title, overview, backdrop_path} = movie;

    const [showOverview, setShowOverview] = useState(false);
    const favoris = useSelector((state) => state.favoris.movies);
    const [isFav, setFav] = useState(favoris.includes(movie));
    let description;
    if(overview.length > 200) {
        description = overview.split(0, 200);
    }
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
        <div className="movie"
            onMouseEnter={(event) => setShowOverview(true)}
           // onMouseLeave={(event) => setShowOverview(false)}
        >
            <Image src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`} size="small" className="movie-img"/>
            {
                showOverview ?

                    <div className='movie-description-short'>
                        <h3>{title}</h3>
                        <p>{description}</p>
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
    )
}