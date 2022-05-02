import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import * as colors from "../../colors";
import FilterIcon from "../../images/filter-icon.png";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid;
  color: ${colors.primaryColor};

  input {
    width: calc(100% - 35px);
    border: 0;
    outline: none;
    color: ${colors.primaryColor};
    font-size: 1.2em;
    margin-left: 10px;
    font-weight: 900;

    &::placeholder {
      opacity: .8;
      color: ${colors.primaryColor};
      font-weight: 300;
    }
  }
`

function SearchBar ({ icon, id, type, placeholder, searchMovies }) {
  const [keyword, setKeyword] = useState("");
  const [year, setYear] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    searchMovies(keyword, year);
  }, [keyword, year]);

  const handleWordSearch = (event) => {
    console.log(event);
    if (event.target === 'year_search_input') {
      setYear(event.target.value); 
    }
      setKeyword(event.target.value);
  };

  return (
    <InputWrapper className="search_bar_wrapper">
      <img src={icon.src} alt={icon.alt} htmlFor={id} width="25" />
      <input type={type} id={id} onChange={handleWordSearch} placeholder={placeholder} />
      {isMobile ? <img src={FilterIcon} alt="Filter" /> : null}
    </InputWrapper>
  );
}

export default SearchBar;