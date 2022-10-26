import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, getAllMovies } from "../../store/movies/movieSlice";
import { fetchAsyncSeries } from "../../store/series/serieSlice";
import ListRow from '../List/ListRow';
import Header from "./Header";
import MovieList from "../MovieList/MovieList";
import SerieList from "../Series/SerieList";

const Home = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncMovies());
    }, []);

    const movies = useSelector(getAllMovies);




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