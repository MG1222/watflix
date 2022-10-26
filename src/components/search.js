import {Link} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import Movie from "./List/Movie";
import movieApi from "../apiConf/movieApi";
import {API_KEY} from "../apiConf/movieApiKey";
import '../styles/search.scss';

function Search(){
    const [inputValue, setInputValue] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [resultats, setResultats] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/w500';


    useEffect(() => {
        const searchMovies = async () => {
            return await movieApi.get(`/search/multi?api_key=${API_KEY}&language=fr-FR&query=${inputValue}&page=1&include_adult=false`);
        };
        if (inputValue !== '') {
            searchMovies()
                .then((response)=>setResultats(response.data.results))
                .catch((err)=>console.log(err));

            setLoaded(true);
        }
        else {
            setLoaded(false);
        }
    }, [inputValue])

    return(
        <div className='page'>
            <div className='container'>
                <input
                    className='search__input'
                    type='text' placeholder='Rechercher un film'
                    onChange={e => setInputValue(encodeURIComponent(e.target.value))}
                />
            </div>
            <div className='resultats'>
                {loaded && resultats.map((e, i) => {
                    if (e.media_type==='movie') {
                        return <Link to={`/details/${e.id}`} relative='path' key={i}><Movie
                                      title={e.title}
                                      descriptionShort={e.overview}
                                      image={`${baseURL}${e.poster_path}`}
                        />
                        </Link>
                    }
                })}
            </div>
        </div>

    )
}

export default Search;