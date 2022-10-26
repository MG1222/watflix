import React from 'react';
import { useSelector } from "react-redux";
import { getAllMovies } from "../../store/movies/movieSlice";

const MovieList = () => {
    const movies = useSelector(getAllMovies);
    console.log(movies);
    return (
        <div>
            <h1>Movie List</h1>
        </div>
    );
};

export default MovieList;