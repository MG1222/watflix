import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Filter(){
    const movieGenres=useSelector((state)=>state.movies.movieGenres);
    // const serieGenres=useSelector((state)=>state.series.seriesGenres);
    const filter=useSelector((state)=>state.movies.filter);
    console.log(movieGenres);
    
    if(filter){
        return(
            <div>
                <label for="filter-movies-by-genres">Filtrer par genres</label>
                <select name="moviesGenres" id="filter-movies-by-genres">
                    {movieGenres.map((genres,key)=>
                        <option key={key} value={genres.id}>{genres.name}</option>
                    )}
                </select>
            </div>
        )
    }
}

export default Filter;