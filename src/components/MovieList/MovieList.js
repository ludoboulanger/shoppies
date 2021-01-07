import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import './MovieList.css'
import _ from 'lodash'
import Card from '../Card/Card';

export default function MovieList({voted, moviesToDisplay}) {
  const [movies, setMovies] = useState(moviesToDisplay);
  const [listTitle] = useState(() => {
    if (voted) {
      return "Voted Movies";
    } else {
      return "Search Results";
    }
  })

  useEffect(() => {
    setMovies(moviesToDisplay);
  }, [moviesToDisplay]);

  const handleDragEnd = (result) => {
    if (result.destination) {
      let newMovies = _.cloneDeep(movies);
      let [draggedMovie] = newMovies.splice(result.source.index, 1);
      newMovies.splice(result.destination.index, 0, draggedMovie);
      setMovies(newMovies);
    }
  };

  return (
    <div className="container">
      <h3 className="heading-h3">
        {listTitle}
      </h3>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="searchResults">
          {
            (provided) => (
              <div className="list" {...provided.droppableProps} ref={provided.innerRef}>
                {
                  _.map(movies, (movie, index) => {
                    return (
                      <React.Fragment key={movie.id}>
                        <Card movie={movie} index={index} />
                      </React.Fragment>
                    );
                  })
                }
                {
                  provided.placeholder
                }
              </div>
            )
          }
        </Droppable>
      </DragDropContext>
    </div>
  )
}