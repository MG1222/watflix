import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Serie(props) {

    const { title, overview, image, id} = props;
    const [showOverview, setShowOverview] = useState(false);

    return (
        <Link to={`/details/tv/${id}`} >
            <div className="movie"
                 onMouseEnter={(event) => setShowOverview(true)}
                 onMouseLeave={(event) => setShowOverview(false)}
            >
                <img src={`https://image.tmdb.org/t/p/w780/${image}`} className="movie-img" alt="img movie"></img>
                {
                    showOverview ?

                        <div className='movie-description-short'>
                            <h3>{title}</h3>
                            <p>{overview}</p>

                        </div>
                        :
                        null
                }
            </div>
        </Link>
    )
}