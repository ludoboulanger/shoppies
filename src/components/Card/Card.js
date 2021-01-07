import React from 'react';
import './Card.css';

export default function Card({title, date}) {

    return (
        <div className='movie-card'>
            <p>{title} - {date}</p>
        </div>
    )
}