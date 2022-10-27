import { useState } from 'react';
import {Link} from 'react-router-dom';
import Image from '../Image/Image';


export default function Movie(props) {

    const { title, overview, image, id} = props;
    const [showOverview, setShowOverview] = useState(false);

    return (
        <Link to={`/details/movie/${id}`}>
            <div className="movie"
                onMouseEnter={(event) => setShowOverview(true)}
                onMouseLeave={(event) => setShowOverview(false)}
            >
                <Image src={`https://image.tmdb.org/t/p/w780/${image}`} size="small" className="movie-img"/>
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