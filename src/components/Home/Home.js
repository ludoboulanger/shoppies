import React, { useEffect, useState } from 'react';
import './Home.css';
import MovieList from '../MovieList/MovieList';
import { fetchMovies } from '../../utils/MovieFetcher';

export default function Home() {
  const [availableMovies, setAvailableMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let movies = await fetchMovies("ram");
      console.log(movies);
      setAvailableMovies(movies);
    }

    fetchData();
  }, []);
  
  return(
    <div className="main-grid">
      <div className="header">
        <h1 className="title">Shoppies</h1>
        <p className="main-text">Please, vote for your 5 all time favorite movies down below!</p>
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