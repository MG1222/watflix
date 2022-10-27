import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies} from "../../store/movies/movieSlice";
import ListRow from '../List/ListRow';
import Header from "./Header";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { movies, series }= useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchAsyncMovies());
    },[]);

    return (
        <div className="home">
            <div> Header</div>
            <ListRow category="Les meilleurs films" movies={movies}/>
        </div>
    );
};
export default Home;