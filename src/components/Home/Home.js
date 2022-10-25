import React, { useEffect } from "react";
import movieApi from "../../apiConf/movieApi";
import {API_KEY} from "../../apiConf/movieApiKey";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const fetchMovies = async () => {
            return await movieApi.get(`/movie/upcoming?api_key=${API_KEY}`);
        };
        fetchMovies()
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <button onClick={()=>navigate("/search")}>Search</button>
            <button onClick={()=>navigate("/oeuvres")}>Oeuvres</button>
            <button onClick={()=>navigate("/details")}>Details</button>
            <button onClick={()=>navigate("/favoris")}>Favoris</button>
        </div>
    );
};
export default Home;