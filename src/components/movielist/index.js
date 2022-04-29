import React from "react";
import styled from 'styled-components';

import MovieItem from '../movieitem';

const MoviesWrapper = styled.div`
  position: relative;
`

function MovieList ({ movies, genres }) {
  const objectToMapGenres = (genres) => {
    let genresMap = new Map();
    genres.forEach((element) => genresMap.set(element.id, element.name));
    return genresMap;
  };

  const parseGenreNames = (ids, genres) => {
    let genreNames = [];
    ids.forEach((element) => genreNames.push(genres.get(element)));
    return genreNames;
  };

  const genresMap = objectToMapGenres(genres);

  return (
    <MoviesWrapper>
      { movies.map(movie => 
      <MovieItem 
          key={movie.id} 
          title={movie.title} 
          genre={parseGenreNames(movie.genre_ids, genresMap)}  
          overview={movie.overview} 
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
          backdropPath={movie.backdrop_path}
          posterPath={movie.poster_path}
      />)}
    </MoviesWrapper>
  )
}

export default MovieList;