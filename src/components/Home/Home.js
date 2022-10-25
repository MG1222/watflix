import React, { useEffect } from "react";
import movieApi from "../../apiConf/movieApi";
import {API_KEY} from "../../apiConf/movieApiKey";

const Home = () => {
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
            <p>Test</p>
        </div>
    );
};
export default Home;