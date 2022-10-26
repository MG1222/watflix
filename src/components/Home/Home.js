import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies} from "../../store/movies/movieSlice";
import ListRow from '../List/ListRow';
import {fetchAsyncSeries} from "../../store/series/serieSlice";



const Home = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { movies }= useSelector((state) => state);

    const { series } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncSeries());

    },[]);

    useEffect(() => {
        console.log(movies);
    }, [movies]);



    return (
        <div className="home">

            <ListRow category="Les meilleurs films" movies={movies}/>
            <ListRow category="Les meilleurs films" movies={movies}/>
        </div>
    );
};
export default Home;