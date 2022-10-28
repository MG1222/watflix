import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getMovieByID} from "../store/movies/movieIDSlice";
import Image from "./Image/Image";
import {addMovie, removeMovie} from "../store/favoris/favorisSlice";


function Details_movie(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const {movie} = useSelector((state) => state.movieID)

    const favoris = useSelector((state) => state.favoris.movies);
    const [isFav, setFav] = useState(favoris.includes(movie));

    const baseURL = 'https://image.tmdb.org/t/p/w500';
    const [time, setTime] = useState({hours : undefined, minutes: undefined});
    const [year, setYear] = useState(undefined);

    const toggleFavoris = () => {
        if(isFav) {
            dispatch(removeMovie(movie));
            setFav(false);
        } else {
            dispatch(addMovie(movie))
            setFav(true);
        }
    }


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
                    <button
                        onClick={(event) => toggleFavoris()}
                    >
                        { isFav ? "Supprimer des favoris" : "Ajouter aux favoris"}
                    </button>
                </div>
                <div className='info'>
                    <h1>{movie.title}</h1>
                    <h4>Date de sortie : {year}</h4>
                    <ul>
                        <h4>Pays de production : </h4>
                        {movie.production_countries ? movie.production_countries.map((e, i) => {
                        return <li key={i}>{e.iso_3166_1}</li>
                        })
                        : null}
                    </ul>
                    <h4>Note des spectateurs : {movie.vote_average*10}%</h4>
                    <h4>Durée : {time.hours}h {time.minutes}min</h4>

                    <ul>
                        <h4>Genres :</h4>
                        {movie.genres ? movie.genres.map((e, i) => {
                            return <li key={i}>{e.name}</li>
                        })
                        :null}
                    </ul>
                    <h4>Synopsis : </h4>
                        <p>{movie.overview} </p>
                </div>
            </div>

    )
}

export default Details_movie;