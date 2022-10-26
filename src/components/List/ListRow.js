import Movie from './Movie.js';
import { useState } from 'react';

export default function ListRow(props) {
    const { movies, category } = props;
    const [translation, setTranslation] = useState(0);

    const scrollLeft = () => {
        if(translation + 310 <= 0) {
            setTranslation(translation + 310);
        }
        
    }

    const scrollRight = () => {
        if(translation -310 >= (movies.length-1) * -310) {
            setTranslation(translation - 310);
        }
        
    }
    return (
            
            <div className="list-row">
                <h2>{category}</h2>
                <div className="scroll-container">
                    <button className="button-scroll-left" onClick={(e) => scrollLeft()}>&#10094;</button>
                    <div className='movie-container' style={{transform: `translateX(${translation}px)`}}>
                            {movies.map( (movie, key) =>
                                <Movie 
                                    title={movie.title}
                                    descriptionShort={movie.descriptionShort}
                                    image={movie.img}
                                    key={`movie${key}`}
                                />
                            )}
                        
                    </div>
                    <button className="button-scroll-right" onClick={(e) => scrollRight()}>&#10095;</button>
                </div>
            </div>
    )
}