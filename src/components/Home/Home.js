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
    let newMovieLists = _.cloneDeep(movieLists);
    let source = result.source ? result.source: {};
    let destination = result.destination ? result.destination: {};
    let sourceList = _.find(newMovieLists, list => list.listId === source.droppableId);
    let destinationList = _.find(newMovieLists, list => list.listId === destination.droppableId);

    if (destination.droppableId === 'votedMovies' && destinationList && destinationList.list.length >= 5) {
      alert("Cannot Add more than 5 movies to the voting panel");
      return ;

    } else if (destination && sourceList && destinationList) {
      let [draggedMovie] = sourceList.list.splice(source.index, 1);
      destinationList.list.splice(destination.index, 0, draggedMovie);
    }

    setMovieLists(newMovieLists);
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

      <p id="info" className="main-text">Rate your <strong>top 5</strong> favorite movies below. Drag movies to the voted panel and order them from your favorite to your least favorite. Once finished, press the "Submit" button to send your votes</p>

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

      <button id="submit" class="button">
        Sumbit
      </button>
    </div>
  );
}