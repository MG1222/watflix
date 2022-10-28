import Movie from './Movie.js';
import Filter from "../filter.js";
import {useEffect} from "react";
import Series from './Series.js';
import { useState } from 'react';
import '../../styles/list.scss';

export default function ListRow(props) {
    const { movies } = props;
    const { type } = props;

    const [translation, setTranslation] = useState(0);

    const scrollLeft = () => {
        if(translation + 310 <= 0) {
            setTranslation(translation + 310);
        }

    }

    const scrollRight = () => {
            setTranslation(translation - 310);
    }

    {if(type === "movies") {
    return (
        <div className="list-row">
            <h2>{props.category}</h2>
            <div className="scroll-container">
                <button className="button-scroll-left" onClick={(e) => scrollLeft()}>&#10094;</button>
                <div className='movie-container' style={{transform: `translateX(${translation}px)`}}>
                    {movies.movies.map( (movie, key) =>
                        <Movie
                            movie={movie}
                            key={`movie${key}`}
                        />
                    )}
                </div>
                <button className="button-scroll-right" onClick={(e) => scrollRight()}>&#10095;</button>
            </div>
        </div>
    )
    } else {
        return (
            <div className="list-row">
                <h2>{props.category}</h2>
                <div className="scroll-container">
                    <button className="button-scroll-left" onClick={() => scrollLeft()}>&#10094;</button>
                    <div className='movie-container' style={{transform: `translateX(${translation}px)`}}>
                        {movies.series.map((serie, key) =>
                            <Series
                                serie={serie}
                                key={`serie${key}`}
                            />
                        )}

                    </div>
                    <button className="button-scroll-right" onClick={() => scrollRight()}>&#10095;</button>
                </div>
                <Filter/>
            </div>
        )
    }
    }
}