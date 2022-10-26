import { useSelector } from "react-redux";

function Filter(){
    const movieGenres=useSelector((state)=>state.movies.moviesGenres);
    // const serieGenres=useSelector((state)=>state.series.seriesGenres);
    const filter=useSelector((state)=>state.movies.filter);
    //console.log(movieGenres);
    
    if(filter){
        return(
            <div>
                <label htmlFor="filter-movies-by-genres">Filtrer par genres</label>
                <select name="moviesGenres" id="filter-movies-by-genres">
                    {movieGenres.map((genres,key)=>(
                        <option key={key} value={genres.id}>{genres.name}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Filter;