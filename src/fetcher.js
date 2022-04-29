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