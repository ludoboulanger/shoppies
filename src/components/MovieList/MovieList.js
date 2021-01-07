import React, { useEffect, useState } from 'react'
import './MovieList.css'
import Card from '../Card/Card';
import _ from 'lodash'

export default function MovieList({type, moviesToDisplay}) {
  const [movies, setMovies] = useState(moviesToDisplay);

  useEffect(() => {
    setMovies(moviesToDisplay);
  }, [moviesToDisplay]);

  return (
    <div className="container">
      <h3 className="heading-h3">
        {type}
      </h3>
      <ul className="list">
        {
          _.map(movies, (movie, index) => {
            return (
              <React.Fragment key={index}>
                <Card title={movie.title} date={movie.year}></Card>
              </React.Fragment>

            )
          })
        }
      </ul>
    </div>
  )
}