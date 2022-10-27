import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncMovies, getAllMovies} from "../../store/movies/movieSlice";
import {useEffect} from "react";

 const MovieList = () => {
     const dispatch = useDispatch();



     const movies = useSelector(getAllMovies);
     useEffect(() => {
         dispatch(fetchAsyncMovies());
     }, [dispatch]);

     return (
         <div>
             <h1>Movie List</h1>
             {movies.map((movie) => (
                 <div key={movie.id}>
                     <h2>{movie.title}</h2>
                     <p>{movie.overview}</p>
                 </div>
             ))}
         </div>
     );



 }

export default MovieList;
