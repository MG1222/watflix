import { useState } from 'react';


export default function Movie(props) {

    const { title, overview, image} = props;
    const [showOverview, setShowOverview] = useState(false);

    return (
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
        )}






        </div>
    )
}