import React, {useEffect, useState} from "react";
import Movie from "../List/Movie";
import movieApi from "../../apiConf/movieApi";
import {API_KEY} from "../../apiConf/movieApiKey";
import Series from '../List/Series';
import '../../styles/search.scss';

function Search(){
    const [inputValue, setInputValue] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [resultats, setResultats] = useState([]);


    useEffect(() => {
        const searchMovies = async () => {
            return await movieApi.get(`/search/multi?api_key=${API_KEY}&language=fr-FR&query=${inputValue}&page=1&include_adult=false`);
        };
        if (inputValue !== '') {
            searchMovies()
                .then((response)=>setResultats(response.data.results));

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
                    type='text' placeholder='Rechercher un titre de film ou série'
                    onChange={e => setInputValue(encodeURIComponent(e.target.value))}
                />
            </div>
            <div className='resultats'>
                {loaded && resultats.map((e, i) => {
                    if (e.media_type==='movie') {
                        return  <Movie
                                key={i}
                                movie={e}
                            />
                    }
                    if (e.media_type==='tv') {
                        return  <Series
                                key={i}
                                serie={e}
                            />
                    }
                })}
            </div>
        </div>

    )
}

export default Search;