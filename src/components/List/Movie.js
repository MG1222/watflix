import { useState } from 'react';

export default function Movie(props) {
    const { title, descriptionShort, image } = props;
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div 
            className="movie"
            onMouseEnter={(event) => setShowDescription(true)}
            onMouseLeave={(event) => setShowDescription(false)}
        >
            <img src={image} className="movie-img"></img>
            {
                showDescription ? 
                    <div className='movie-description-short'>
                            <h3>{title}</h3>
                            <p>{descriptionShort}</p>
                    </div>
                :
                    null
            }
            
            
        </div>
    )
}
