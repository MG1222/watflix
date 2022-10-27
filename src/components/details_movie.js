import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getMovieByID} from "../store/movies/movieIDSlice";
import '../styles/details.scss';
import Image from "./Image/Image";


function Details_movie(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movie} = useSelector((state) => state.movieID)


    const baseURL = 'https://image.tmdb.org/t/p/w500';
    const [time, setTime] = useState({hours : undefined, minutes: undefined});
    const [year, setYear] = useState(undefined);




    useEffect( () => {
        dispatch(getMovieByID(parseInt(id)));
    }, [])

    useEffect(() => {
        if (movie.runtime) {
            let calcH = Math.floor(movie.runtime/60);
            let calcM = movie.runtime - calcH*60;
            setTime(prevState =>  ({...prevState, hours: calcH, minutes: calcM}));
        }
        if (movie.release_date) {
            setYear(movie.release_date.split('-').shift());
        }
    }, [movie])
console.log(movie);

    return(
            <div className='details'>
                <div className='affiche'>
                    <Image src={`${baseURL}${movie.backdrop_path}`} size='small'/>
                </div>
                <div className='info'>
                    <h1>{movie.title}</h1>
                    <p>{year}</p>
                    <ul>
                        {movie.production_countries ? movie.production_countries.map((e, i) => {
                        return <li key={i}>{e.iso_3166_1}</li>
                        })
                        : null}
                    </ul>
                    <p>Note des spectateurs : {movie.vote_average*10}%</p>
                    <p>Durée : {time.hours}h {time.minutes}min</p>
                    <ul>
                        {movie.genres ? movie.genres.map((e, i) => {
                            return <li key={i}>{e.name}</li>
                        })
                        :null}
                    </ul>
                    <p>{movie.overview}</p>
                </div>
            </div>

    )
}

export default Details_movie;