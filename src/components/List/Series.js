import { useState } from 'react';
import { useDispatch } from "react-redux";

import {Link} from 'react-router-dom';

export default function Series(props) {

    const dispatch = useDispatch();
    const { name, overview, backdrop_path, id} = props.serie;
    const [showOverview, setShowOverview] = useState(false);
    let description = overview;
    if(overview.length > 200) {
        description = overview.slice(0, 200) + " (...)";
    }


    return (
        <Link to={`/details/tv/${id}`} >
            <div className="movie"
                 onMouseEnter={() => setShowOverview(true)}
                 onMouseLeave={() => setShowOverview(false)}
            >
                <img src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`} className="movie-img" alt="img movie"></img>
                {
                    showOverview ?

                    <div className='movie-description-short'>
                        <h3>{name}</h3>
                        <p>{description}</p>

                    </div>
                    :
                    null
            }
        </div>
        </Link>
    )
}