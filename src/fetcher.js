import axios from 'axios';
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

export const getPopularMovies = async (setPopularMovies, setTotalCount) => {
    await axios
          .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
          .then((response) => {
              setPopularMovies(response.data.results);
              setTotalCount(response.data.total_results);
          })
          .catch((error) => {
              console.log(error);
          })
}

export const getMovieGenres = async (setGenreOptions) => {
    await axios
          .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
          .then((response) => {
            setGenreOptions(response.data.genres);
          })
          .catch((error) => {
              console.log(error);
          })
}

export const getSearchMovie = async (keyword, setResults, setTotalCount) => {
    await axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`)
        .then((response) => {
        setResults(response.data.results);
        setTotalCount(response.data.total_results);
        })
        .catch((error) => {
            console.log(error);
        })
};