import React from "react";
import styled from 'styled-components';
import placeHolder from '../../images/no-poster-holder.jpeg';
import { useMediaQuery } from "react-responsive";

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  margin-bottom: 15px;
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
`

const LeftCont = styled.div`
  flex: 1;
  display: inline-block;
  padding-right: 20px;
`

const RightCont = styled.div`
  position: relative;
  flex: ${(props) => (props.isMobile ? 2 : 3)};
  display: flex;
  flex-direction: column;
`

const MoviteItemGenre = styled.span`
  color: #d9e021;
  font-weight: 800;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: ${(props) => (props.isMobile ? "1em" : "1.5em")};
  color: #001e2d;
`;

const PosterImage = styled.img`
  width: 100%;
  height: auto;
`;

const MovieRating = styled.span`
  background-color: #d9e021;
  color: white;
  padding: 3px 5px;
  border-radius: 4px;
  max-width: 25px;
  max-height: 20px;
  font-size: ${(props) => (props.isMobile ? "1em" : "1em")};
`;

const MovieGenres = styled.div`
  font-size: ${(props) => (props.isMobile ? "0.5em" : "0.9em")};
`;

const MovieReleaseDate = styled.div`
  color: #d9e021;
  font-weight: 300;
  position: absolute;
  bottom: 0;
`;

const MovieHeader = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

function MovieItem ({ title, genre, overview, releaseDate, voteAverage, backdropPath, posterPath }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const truncateText = (text) => {
    return text.substring(1, 150);
  };
  return (
    <MovieItemWrapper>
      <LeftCont>
        <PosterImage src={posterPath ? `http://image.tmdb.org/t/p/w500${posterPath}` : placeHolder} alt="Poster Image"/>
      </LeftCont>
      <RightCont>
      <MovieHeader>
        <Title>{title}</Title>
        <MovieRating>{voteAverage}</MovieRating>
      </MovieHeader>
        <MovieGenres>
          {genre?.map((element, i) => {
            return (
              <MoviteItemGenre isMobile={isMobile} key={i}>
                {element} {genre[i + 1] ? "| " : ""}
              </MoviteItemGenre>
            );
          })}
        </MovieGenres>
        <p>{isMobile ? `${truncateText(overview)}...` : overview}</p>
        <MovieReleaseDate>{releaseDate}</MovieReleaseDate>
      </RightCont>
    </MovieItemWrapper>
  )
}

export default MovieItem;