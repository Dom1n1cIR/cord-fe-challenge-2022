import React from "react";
import styled, { css } from 'styled-components';
import { useMediaQuery } from "react-responsive";
import * as colors from "../../colors";
import AccordionFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";

import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";

const FiltersWrapper = styled.div`
  position: relative;
`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all .3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;

    @media screen and (max-width: 768px) {
      width: 85%;
      padding-bottom: 8px;
      margin-right: 20px;
      margin-bottom: 0;
    }
  }
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}

  @media screen and (max-width: 768px) {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    flex-direction: row;
  }
`

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`

function SearchFilters({ genres, ratings, languages, searchMovies }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input" 
          type="text"
          icon={{ src: SearchIcon, alt: 'Magnifying glass' }}
          searchMovies={searchMovies}
          placeholder="Search for movies"
        />
        { isMobile ? null : <SearchBar
          id="year_search_input" 
          type="number"
          icon={{ src: YearIcon, alt: 'Calendar icon' }} 
          searchMovies={searchMovies}
          placeholder="Year of release"
        />}
      </SearchFiltersCont>
      { isMobile ? null : <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
          <AccordionFilter options={genres} title="Genre(s)"/>
          <AccordionFilter options={ratings} title="Min. vote"/>
          <AccordionFilter options={languages} title="Languages"/>
      </SearchFiltersCont>}
    </FiltersWrapper>
  );
}

export default SearchFilters;