import React from 'react';
import {Link} from 'react-router-dom';

function MovieCard({mov}) {
  console.log(mov)
  
  return (
    <article>
        <h2>{mov.title}</h2>
        <Link to={`/movie/${mov.id}`}>View movie</Link>
    </article>
  );
};

export default MovieCard;