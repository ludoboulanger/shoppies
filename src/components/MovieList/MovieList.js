import React, { useState } from 'react'
import './MovieList.css'
import _ from 'lodash'

export default function MovieList() {
  const [movies] = useState([1,2,3,4,5]);

  return (
    <div>
      <ul>
        {
          _.map(movies, (movie, index) => {
            return (
              <React.Fragment key={index}>
                <div>
                  Hello
                </div>
              </React.Fragment>

            )
          })
        }
      </ul>
    </div>
  )
}