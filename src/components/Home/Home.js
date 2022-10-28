import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies} from "../../store/movies/movieSlice";
import ListRow from '../List/ListRow';
import Header from "./Header";
import {fetchAsyncSeries} from "../../store/series/serieSlice";


const Home = () => {
    const dispatch = useDispatch();

    const { movies, series }= useSelector((state) => state);


    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncSeries());

    },[]);



    return (
        <div className="home">
            <Header movies={movies}/>
            <ListRow category="Les meilleurs films" movies={movies} type="movies"/>
            <ListRow category="Les meilleurs series" movies={series} type="series"/>
        </div>
    );
};
export default Home;