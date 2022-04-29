import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

const DiscoverWrapper = styled.main`
  padding: 35px;
`
const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);
`
const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;
`
const MobilePageTitle = styled.h1`
  display: none;
`
const TotalCount = styled.strong`
  display: block;
  padding-bottom: 15px;
  font-weight: normal;
`

function Discover() {
  // Our state
  const [keyword, setKeyword] = useState("");
  const [year, setYear] = useState(0);
  const [results, setResults] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [genreOptions, setGenreOptions] = useState([]);
  const [ratingOptions, setRatingOptions] = useState([
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ]);
  const [languageOptions, setLanguageOptions] = useState([
    { id: "GR", name: "Greek" },
    { id: "EN", name: "English" },
    { id: "RU", name: "Russian" },
    { id: "PO", name: "Polish" },
  ]);

  // TODO: Preload and set the popular movies and movie genres when page loads
  useEffect(() => {
    fetcher.getPopularMovies(setResults, setTotalCount)
    fetcher.getMovieGenres(setGenreOptions);
  }, [])
  console.log(results);
  console.log(genreOptions)
  // TODO: Update search results based on the keyword and year inputs
  const searchMovies = async (keyword, year) => {
    if (keyword === "") {
      fetcher.getPopularMovies(setResults, setTotalCount);
    } else {
      fetcher.getSearchMovie(keyword, setResults, setTotalCount);
    }
  };

  return (
    <>
      <DiscoverWrapper>
        <MobilePageTitle>Discovexr</MobilePageTitle> {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
        <TotalCount>{totalCount} results</TotalCount>
        <MovieFilters>
          <SearchFilters 
            genres={genreOptions} 
            ratings={ratingOptions}  
            languages={languageOptions}
            searchMovies={(keyword, year) => searchMovies(keyword, year)}
          />
        </MovieFilters>
        <MovieResults>
          <MovieList 
            movies={results || []}
            genres={genreOptions || []}
          />
        </MovieResults>
      </DiscoverWrapper>
    </>
  )

}

export default Discover