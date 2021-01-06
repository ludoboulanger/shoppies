import React from 'react';
import './Home.css';
import MovieList from '../MovieList/MovieList';

export default function Home() {
  return(
    <div className="main-grid">
      <div className="header">
        <h1 className="title">Shoppies</h1>
        <p className="main-text">Please, vote for your 5 all time favorite movies down below!</p>
      </div>

      <div id="movies">
        <MovieList/>
      </div>

      <div id="added-movies">
        <MovieList/>
      </div>

    </div>
  )
}