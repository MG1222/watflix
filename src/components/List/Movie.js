import { useState } from 'react';
import {Link} from 'react-router-dom';
import Image from '../Image/Image';
import { useSelector, useDispatch } from "react-redux";
import {addMovie, removeMovie } from "../../store/favoris/favorisSlice";

export default function Movie(props) {

    const dispatch = useDispatch();
    const { movie } = props;
    const { title, overview, backdrop_path, id } = movie;

    const [showOverview, setShowOverview] = useState(false);
    let description = overview;
    if(overview.length > 200) {
        description = overview.slice(0, 200) + " (...)";
    }
    if(title === "Parasite") console.log(movie);
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
                        <p>{description}</p>

                    </div>
                    :
                    null
            }
        </div>
        </Link>
    )
}