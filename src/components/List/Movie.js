import { useState } from 'react';
import {Link} from 'react-router-dom';
import Image from '../Image/Image';

export default function Movie(props) {

    const { movie } = props;
    const { title, overview, backdrop_path, id } = movie;

    const [showOverview, setShowOverview] = useState(false);
    let description = overview;
    if(overview.length > 200) {
        description = overview.slice(0, 200) + " (...)";
    }
    return (
        <Link to={`/details/movie/${id}`}>
        <div className="movie"
            onMouseEnter={() => setShowOverview(true)}
            onMouseLeave={() => setShowOverview(false)}
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