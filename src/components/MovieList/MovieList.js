import React from 'react';
import { useSelector } from "react-redux";
import {getAllMovies, getAllShows} from "../../store/movies/movieSlice";

const MovieList = () => {
    const movies = useSelector(getAllMovies);
    const s = useSelector(getAllShows);
    return (
        <div>
            <h1>Movie List</h1>
        </div>
    );
};

export default MovieList;