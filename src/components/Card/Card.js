import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import './Card.css';

export default function Card({movie, index}) {

	const getItemStyle = (isDragging) => {
    let style = 'movie-card';

    if (isDragging) {
      style = style + ' movie-card-drag';
    }

    return style;
  }

    return (
			<Draggable key={movie.id} draggableId={movie.id} index={index}>
				{
					(provided, snapshot) => (
						<div className={getItemStyle(snapshot.isDragging)}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							ref={provided.innerRef} >
							<p>{movie.title} - {movie.year}</p>
						</div>
					)
				}
			</Draggable>
    )
}