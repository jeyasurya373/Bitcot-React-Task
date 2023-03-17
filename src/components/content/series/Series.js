import React, { useState, useEffect } from 'react';
import './series.css';
import placeholder from '../../../assets/placeholder.png';

function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/jeyasurya373/734bc324d780eb8c8d64e37d7ecd391a/raw/3e41d5b631b361ca7bd6d5747b531782902b9d93/sample')
      .then(response => response.json())
      .then(data => {
        const filteredSeries = data.entries
          .filter(entry => entry.programType === 'series' && entry.releaseYear >= 2010)
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 21);
        setSeries(filteredSeries);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div className='erroMsg'>Oops something went wrong...</div>;
  }
  return (
    <div className='seriesContainer'>
        {loading && (<div className='loading'>Loading ....</div>)}
      {series.map(serie => (
        <div key={serie.title} className='seriesItemWrapper'>
          <img src={placeholder} className='seriesImg' alt={serie.title} />
          {/* SOME API IMAGES ARE NOT LOADING STATE IT MAKE WEBSITE ODD 
           SO I USED PLACEHOLDER. IF U WANT SEE THE 
           IMAGE USE THIS INSIDE THIS IN Img src =>  src={serie.images['Poster Art'].url}
           */} 
          <h3 className='seriesTitle' title={serie.title}>{serie.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Series;