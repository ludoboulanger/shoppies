import _ from 'lodash';
export async function fetchMovies(movieTitle) {
    let movieResults = [];
    let response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=b166d5a7&s=${movieTitle}&type="movie"`,
    )

    if (response.ok) {
        let movieResults = await response.json();
        console.log(movieResults);
        return _.map(movieResults.Search, (movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
        }))
    }

    return movieResults;
}