import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getserieByID} from "../store/series/serieIDSlice";
import '../styles/details.scss';
import Image from "./Image/Image";


function Details_serie(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const {serie} = useSelector((state) => state.serieID)

    const baseURL = 'https://image.tmdb.org/t/p/w500';
    const [year, setYear] = useState(undefined);




    useEffect( () => {
        dispatch(getserieByID(parseInt(id)));
    }, [])

    useEffect(() => {
        if (serie.first_air_date) {
            setYear(serie.first_air_date.split('-').shift());
        }
    }, [serie])


    return(
        <div className='details'>
            <div className='affiche'>
                <Image src={`${baseURL}${serie.backdrop_path}`} size='small'/>
            </div>
            <div className='info'>
                <h1>{serie.name}</h1>
                <p>{year}</p>
                {serie.in_production ?
                <p>En cours</p>
                : <p>Finie</p>}
                <ul>
                    {serie.production_countries ? serie.production_countries.map((e, i) => {
                            return <li key={i}>{e.iso_3166_1}</li>
                        })
                        : null}
                </ul>
                <p>Note des spectateurs : {serie.vote_average*10}%</p>
                <p>Nombre d'épisodes : {serie.number_of_episodes}</p>
                <p>Nombre de saisons : {serie.number_of_seasons}</p>
                <ul>
                    {serie.genres ? serie.genres.map((e, i) => {
                            return <li key={i}>{e.name}</li>
                        })
                        :null}
                </ul>
                <p>{serie.overview}</p>
                <h2>Créateurs :</h2>
                {serie.created_by ? serie.created_by.map((e, i) => {
                    return <p key={i}>{e.name}</p>
                })
                : null}
            </div>
        </div>

    )
}

export default Details_serie;