import React, { useEffect } from "react";
import axios from 'axios';


export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
});



/*const MovieApi = () => {
    const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => console.log(data));
    },[]);
      return (
        <div>
            <h1>fetch ok </h1>
        </div>
    );

};
export default MovieApi; */