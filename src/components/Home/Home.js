import React, { useState } from 'react';
import './Home.css';
import MovieList from '../MovieList/MovieList';
import { fetchMovies } from '../../utils/MovieFetcher';
import Searchbar from '../Search/Search';

export default function Home() {
  const [availableMovies, setAvailableMovies] = useState([]);

  const fetchData = async (title) => {
    let movies = await fetchMovies(title);
    console.log(movies);
    setAvailableMovies(movies);
  };

  return(
    <div className="main-grid">
      <div className="header">
        <h1 className="title">Shoppies</h1>
        <p className="main-text">Please, vote for your 5 all time favorite movies down below!</p>
      </div>

      <div id="search">
        <Searchbar searchMovies={fetchData}/>
      </div>

      <div id="movies">
        <MovieList moviesToDisplay={availableMovies} type="Available Movies"/>
      </div>

      <div id="added-movies">
        <MovieList moviesToDisplay={[]} type="Voted Movies"/>
      </div>

    </div>
  )
}