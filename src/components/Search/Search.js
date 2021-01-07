import React, { useState } from 'react';
import './Search.css';

export default function Searchbar({searchMovies}) {
    const [movieToSearch, setMovieToSearch] = useState("");

    const handleChangeSearch = (e) => {
        setMovieToSearch(e.target.value);
    };

    const handleSearchClick = () => {
        searchMovies(movieToSearch);
    }

    return (
        <div className="search-container">
            <input onChange={handleChangeSearch} className="search" value={movieToSearch}>
            </input>

            <button onClick={handleSearchClick} className="button">
                Search
            </button>
        </div>
    );
}
