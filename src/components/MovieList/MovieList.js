import React, { useEffect, useState } from 'react'
import './MovieList.css'
import Card from '../Card/Card';
import _ from 'lodash'

export default function MovieList({type, moviesToDisplay}) {
  const [movies] = useState([1,2,3,4,5]);

  return (
    <div>
      <h3 className="heading-h3">
        {type}
      </h3>
      <ul className="list">
        {
          _.map(movies, (movie, index) => {
            return (
              <React.Fragment key={index}>
                <Card title={"Bob"}></Card>
              </React.Fragment>

            )
          })
        }
      </ul>
    </div>
  )
}