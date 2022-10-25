import React, {useEffect, useState} from 'react';
import Movie from "../components/Movie";
import {fakeData} from "../fakeData";

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [resultats, setResultats] = useState([]);


    useEffect(() => {
        if (inputValue !== '') {
            setResultats(fakeData.results);
            setLoaded(true);
        }
        else {
              setLoaded(false);
        }
    }, [inputValue])

    return (
        <>
            <input type='text' onChange={e => setInputValue(encodeURIComponent(e.target.value))}/>
            <div className='resultats'>
                {loaded && resultats.map((e, i) => {
                    if (e.media_type==='movie') {
                        return <Movie key={i} movie_id={e.id} />
                    }
                })}
            </div>
        </>
    )
}

export default Search;