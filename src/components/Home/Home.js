import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies} from "../../store/movies/movieSlice";
import ListRow from '../List/ListRow';
import { addMovie } from '../../store/favoris/favorisSlice';
import Header from "./Header";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { movies }= useSelector((state) => state);

    const { series } = useSelector((state) => state);

    const movie = movies.movies[0];
    //const serie = series[0];


    useEffect(() => {
        dispatch(fetchAsyncMovies());
    },[]);

    useEffect(() => {
        dispatch(addMovie(movie));
        console.log(movies.favoris);
    }, [movies]);



    return (
        <div className="home">

            <ListRow category="Les meilleurs films" movies={movies}/>
            <ListRow category="Les meilleurs films" movies={movies}/>
            <ListRow category="Les meilleurs films" movies={movies}/>
            <ListRow category="Les meilleurs films" movies={movies}/>
        </div>
    );
};
export default Home;