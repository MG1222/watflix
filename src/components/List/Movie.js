import { useState } from 'react';
import Image from '../Image/Image';


export default function Movie(props) {

    const { title, overview, image} = props;
    const [showOverview, setShowOverview] = useState(false);

    return (
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
    )
}