import React, { useState, useEffect } from 'react';
import './movie.css';
import placeholder from '../../../assets/placeholder.png';


function Movie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/jeyasurya373/734bc324d780eb8c8d64e37d7ecd391a/raw/3e41d5b631b361ca7bd6d5747b531782902b9d93/sample')
      .then(response => response.json())
      .then(data => {
        const filteredMovies = data.entries
          .filter(entry => entry.programType === 'movie' && entry.releaseYear >= 2010)
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 21);
        setMovies(filteredMovies);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);


  if (error) {
    return <div className='erroMsg'>Oops something went wrong...</div>
  }

  return (
    <div className='movieContainer'>
      {loading && (<div className='loading'>Loading ....</div>)}
      {movies.map(movie => (
        <div key={movie.title} className='movieItemWrapper'>
          <img  src={movie.images['Poster Art'].url} className='movieImg' alt={movie.title} onError={(e)=> e.target.src = placeholder}/>
          <h3 className='movieTitle' title={movie.title}>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Movie;