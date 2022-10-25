import React, { useEffect } from "react";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MovieList from "../MovieList/MovieList";
import {addMovies} from "../../store/movies/movieSlice";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
               const response = await movieApi.get(`/movie/upcoming?api_key=${ API_KEY }`);
               dispatch(addMovies(response.data.results));
        }
        fetchMovies();
    } , [dispatch]);
    return (
        <div>
            <button onClick={()=>navigate("/search")}>Search</button>
            <button onClick={()=>navigate("/oeuvres")}>Oeuvres</button>
            <button onClick={()=>navigate("/details")}>Details</button>
            <button onClick={()=>navigate("/favoris")}>Favoris</button>
            <MovieList />
        </div>
    );
};
export default Home;