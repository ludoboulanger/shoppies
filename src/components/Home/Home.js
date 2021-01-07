import React, { useState } from 'react';
import './Home.css';
import MovieList from '../MovieList/MovieList';
import { fetchMovies } from '../../utils/MovieFetcher';
import Searchbar from '../Search/Search';
import { DragDropContext } from 'react-beautiful-dnd';
import _ from 'lodash';

export default function Home() {

  const [movieLists, setMovieLists] = useState(
   [
     {
       listId: "searchResults",
       list: [],
     },
     {
       listId: "votedMovies",
       list: [],
     },
   ]
  )

  const fetchData = async (title) => {
    let newMovieLists = _.cloneDeep(movieLists)
    let newSearchResults = await fetchMovies(title);
    console.log(newSearchResults);

    let prevSearchResults =  _.find(newMovieLists, list => list.listId === "searchResults")

    if (prevSearchResults) {
      prevSearchResults.list = newSearchResults;
    }

    setMovieLists(newMovieLists);
  };

  const getSearchResultsList = () => {
    let movieList = _.find(movieLists, list => list.listId === "searchResults");

    if (movieList) {
      return movieList.list;
    } else {
      return [];
    }
  };

  const getVotedMoviesList = () => {
    let movieList = _.find(movieLists, list => list.listId === "votedMovies");

    if (movieList) {
      return movieList.list;
    } else {
      return [];
    }
  }

  const handleDragEnd = (result) => {
    console.log(result);
    // if (result.destination) {
    //   let newMovies = _.cloneDeep(availableMovies);
    //   let [draggedMovie] = newMovies.splice(result.source.index, 1);

    //   if (result.source)

    //   if (result.destination.droppableId === "searchResults") {
    //     newMovies.splice(result.destination.index, 0, draggedMovie);
    //     setAvailableMovies(newMovies);
    //   } else {
    //     let newVotedMovies = _.cloneDeep(votedMovies);

    //     newVotedMovies.splice(result.destination.index, 0, draggedMovie);
    //     setAvailableMovies(newMovies);
    //     setVotedMovies(newVotedMovies);
    //   }
    // }
  };

  return (
    <div className="main-grid">
      <div className="header">
        <h1 className="title">Shoppies</h1>
        <p className="main-text">Please, vote for your 5 all time favorite movies down below!</p>
      </div>

      <div id="search">
        <Searchbar searchMovies={fetchData}/>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>

        <div id="movies" className="movie-container">
          <h3 className="heading-h3">
            {"Search Results"}
          </h3>
          <MovieList listId={"searchResults"}  voted={false}>
            {getSearchResultsList()}
          </MovieList>
        </div>

        <div id="added-movies" className="movie-container">
          <h3 className="heading-h3">
            {"Voted Movies"}
          </h3>
          <MovieList listId={"votedMovies"} voted={true}>
            {getVotedMoviesList()}
          </MovieList>
        </div>

      </DragDropContext>
    </div>
  );
}