import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getserieByID} from "../store/series/serieIDSlice";
import Image from "./Image/Image";
import {addSerie, removeSerie} from "../store/favoris/favorisSlice";


function Details_serie(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const {serie} = useSelector((state) => state.serieID)

    const baseURL = 'https://image.tmdb.org/t/p/w500';
    const [year, setYear] = useState(undefined);

    const favoris = useSelector((state) => state.favoris.series);
    const [isFav, setFav] = useState(favoris.includes(serie));

    const toggleFavoris = () => {
        if(isFav) {
            dispatch(removeSerie(serie));
            setFav(false);
        } else {
            dispatch(addSerie(serie))
            setFav(true);
        }
    }


    useEffect( () => {
        dispatch(getserieByID(parseInt(id)));
    }, [])

    useEffect(() => {
        if (serie.release_date) {
            setYear(serie.first_air_date.split('-').shift());
        }
    }, [serie])


    return(
        <div className='details'>
            <div className='affiche'>
                <Image src={`${baseURL}${serie.backdrop_path}`} size='small'/>
                <button
                    onClick={(event) => toggleFavoris()}
                >
                    { isFav ? "Supprimer des favoris" : "Ajouter aux favoris"}
                </button>
            </div>
            <div className='info'>
                <h1>{serie.name}</h1>
                <h3>Créateurs :</h3>
                {serie.created_by ? serie.created_by.map((e, i) => {
                        return <p key={i}>{e.name}</p>
                    })
                    : null}
                <h4>Date de sortie : {year}</h4>
                {serie.in_production ?
                <h4>En cours</h4>
                : <h4>Finie</h4>}
                <ul>
                    <h4>Pays de production : </h4>
                    {serie.production_countries ? serie.production_countries.map((e, i) => {
                            return <li key={i}>{e.iso_3166_1}</li>
                        })
                        : null}
                </ul>
                <h4>Note des spectateurs : {serie.vote_average*10}%</h4>
                <h4>Nombre d'épisodes : {serie.number_of_episodes}</h4>
                <h4>Nombre de saisons : {serie.number_of_seasons}</h4>
                <ul>
                    <h4>Genres :</h4>
                    {serie.genres ? serie.genres.map((e, i) => {
                            return <li key={i}>{e.name}</li>
                        })
                        :null}
                </ul>
                <h4>Synopsis : </h4>
                <p>{serie.overview}</p>
            </div>
        </div>

    )
}

export default Details_serie;