import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMoviesFilterValue, fetchAsyncMoviesByGenres, fetchAsyncMoviesGenres } from "../store/movies/movieSlice";
import { changeSeriesFilterValue, fetchAsyncSeriesByGenres, fetchAsyncSeriesGenres } from "../store/series/serieSlice";

function Filter(){
    const dispatch =useDispatch();

    const movieGenres=useSelector((state)=>state.movies.moviesGenres);
    const serieGenres=useSelector((state)=>state.series.seriesGenres);
    const moviesFilter=useSelector((state)=>state.movies.filter);
    const seriesFilter=useSelector((state)=>state.series.filter);
    
    useEffect(()=>{
        dispatch(fetchAsyncMoviesGenres());
        dispatch(fetchAsyncSeriesGenres());
    },[]);

    const handleMoviesChange=(e)=>{
        const select=document.getElementById("filter-movies-by-genres");
        select.value=e.target.value;
        dispatch(changeMoviesFilterValue(parseInt(e.target.value)));
        dispatch(fetchAsyncMoviesByGenres());
    }

    const handleSeriesChange=(e)=>{
        const select=document.getElementById("filter-series-by-genres");
        select.value=e.target.value;
        dispatch(changeSeriesFilterValue(parseInt(e.target.value)));
        dispatch(fetchAsyncSeriesByGenres());
    }
    
    if(moviesFilter && seriesFilter===false){
        return(
            <div className="filter">
                <label htmlFor="filter-movies-by-genres">Filtrer par genres</label>
                <select name="moviesGenres" id="filter-movies-by-genres" onChange={handleMoviesChange} value="">
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
                <select name="seriesGenres" id="filter-series-by-genres" onChange={handleSeriesChange} value="">
                    {serieGenres.map((genres,key)=>(
                        <option key={key} value={genres.id}>{genres.name}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Filter;