import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilterValue, fetchAsyncMoviesByGenres, fetchAsyncMoviesGenres } from "../store/movies/movieSlice";
import { fetchAsyncSeriesGenres } from "../store/series/serieSlice";

function Filter(){
    const dispatch =useDispatch();

    const movieGenres=useSelector((state)=>state.movies.moviesGenres);
    const serieGenres=useSelector((state)=>state.series.seriesGenres);
    const moviesFilter=useSelector((state)=>state.movies.filter);
    const seriesFilter=useSelector((state)=>state.series.filter);
    
    useEffect(()=>{
        dispatch(fetchAsyncMoviesGenres());
        dispatch(fetchAsyncSeriesGenres());
        dispatch(fetchAsyncMoviesByGenres());
    },[]);

    const handleChange=(e)=>{
        dispatch(changeFilterValue(parseInt(e.target.value)));
    }
    
    if(moviesFilter && seriesFilter===false){
        return(
            <div className="filter">
                <label htmlFor="filter-movies-by-genres">Filtrer par genres</label>
                <select name="moviesGenres" id="filter-movies-by-genres" onChange={handleChange}>
                    {movieGenres.map((genres,key)=>(
                        <option key={key} value={genres.id}>{genres.name}</option>
                    ))}
                </select>
            </div>
        )
    }else if(moviesFilter===false && seriesFilter){
        return(
            <div className="filter">
                <label htmlFor="filter-series-by-genres">Filtrer par genres</label>
                <select name="seriesGenres" id="filter-series-by-genres">
                    {serieGenres.map((genres,key)=>(
                        <option key={key} value={genres.id}>{genres.name}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Filter;