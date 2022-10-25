import React, {useEffect, useState} from 'react';
import {fakeData} from "../fakeData";

const Movie = (movie_id) => {




  return (
      <div>
        <h1>{movie.title}</h1>
          <p>{movie.vote_average*10}%</p>
          <p>{movie.runtime}</p>
          <ul>
              {movie.genres.map((e, i) => {
                  return <li key={i}>{e.name}</li>
              })}
          </ul>
          <p>{movie.overview}</p>
      </div>

  )
}

export default Movie;