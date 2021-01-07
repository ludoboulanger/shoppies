import React from 'react'
import { Droppable } from "react-beautiful-dnd";
import './MovieList.css'
import _ from 'lodash'
import Card from '../Card/Card';

export default function MovieList({listId, voted, children}) {

  return (
    <Droppable droppableId={listId}>
      {
        (provided) => (
          <div className="list" {...provided.droppableProps} ref={provided.innerRef}>
            {
              _.map(children, (movie, index) => {
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
  )
}