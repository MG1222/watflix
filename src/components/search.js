import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import Movie from "./List/Movie";
import movieApi from "../apiConf/movieApi";
import {API_KEY} from "../apiConf/movieApiKey";

function Search(){
    const navigate=useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [resultats, setResultats] = useState([]);
    const baseUrl = 'https://image.tmdb.org/t/p/w92';


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
        <div>
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/oeuvres")}>Oeuvres</button>
            <button onClick={()=>navigate("/details")}>Details</button>
            <button onClick={()=>navigate("/favoris")}>Favoris</button>
            <input type='text' onChange={e => setInputValue(encodeURIComponent(e.target.value))}/>
            <div className='resultats'>
                {loaded && resultats.map((e, i) => {
                    if (e.media_type==='movie') {
                        return <Movie key={i}
                                      title={e.title}
                                      descriptionShort={e.overview}
                                      image={`${baseUrl}${e.poster_path}`}
                        />
                    }
                })}
            </div>
        </div>

    )
}

export default Search;