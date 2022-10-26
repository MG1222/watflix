import {useNavigate, useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';


const fakeMovie = {
    "adult": false,
    "backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
    "belongs_to_collection": null,
    "budget": 63000000,
    "genres": [
        {
            "id": 18,
            "name": "Drama"
        }
    ],
    "homepage": "",
    "id": 550,
    "imdb_id": "tt0137523",
    "original_language": "en",
    "original_title": "Fight Club",
    "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    "popularity": 0.5,
    "poster_path": null,
    "production_companies": [
        {
            "id": 508,
            "logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
            "name": "Regency Enterprises",
            "origin_country": "US"
        },
        {
            "id": 711,
            "logo_path": null,
            "name": "Fox 2000 Pictures",
            "origin_country": ""
        },
        {
            "id": 20555,
            "logo_path": null,
            "name": "Taurus Film",
            "origin_country": ""
        },
        {
            "id": 54050,
            "logo_path": null,
            "name": "Linson Films",
            "origin_country": ""
        },
        {
            "id": 54051,
            "logo_path": null,
            "name": "Atman Entertainment",
            "origin_country": ""
        },
        {
            "id": 54052,
            "logo_path": null,
            "name": "Knickerbocker Films",
            "origin_country": ""
        },
        {
            "id": 25,
            "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
            "name": "20th Century Fox",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "1999-10-12",
    "revenue": 100853753,
    "runtime": 139,
    "spoken_languages": [
        {
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "How much can you know about yourself if you've never been in a fight?",
    "title": "Fight Club",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 3439
};

function Details(){
    const navigate=useNavigate();
    const {id} = useParams;
    const movie = fakeMovie; // getMovie(id);
    const baseURL = 'https://image.tmdb.org/t/p/w92';
    const [time, setTime] = useState({hours : undefined, minutes: undefined});
    const [year, setYear] = useState(undefined);
    const calcH = Math.round(movie.runtime/60);
    const calcM = movie.runtime - calcH*60;

    useEffect(() => {
        setTime(prevState =>  ({...prevState, hours: calcH, minutes: calcM}));
        setYear(movie.release_date.split('-').shift());
    }, [])


    return(
        <div>
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/search")}>Search</button>
            <button onClick={()=>navigate("/oeuvres")}>Oeuvres</button>
            <button onClick={()=>navigate("/favoris")}>Favoris</button>
            <div>
                <img src={`${baseURL}${movie.poster_path}`} alt='affiche du film'/>
                <h1>{movie.title}</h1>
                <p>{year}</p>
                <ul>{movie.production_countries.map((e, i) => {
                    return <li key={i}>{e.name}</li>
                })}</ul>
                <p>Note des spectateurs : {movie.vote_average*10}%</p>
                <p>Durée : {time.hours}h {time.minutes}min</p>
                <ul>
                    {movie.genres.map((e, i) => {
                        return <li key={i}>{e.name}</li>
                    })}
                </ul>
                <p>{movie.overview}</p>
            </div>
        </div>

    )
}

export default Details;