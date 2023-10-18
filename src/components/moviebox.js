import styled from "@emotion/styled";
import { flexCenter } from "../styles/common.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieBox = ({ title, overview, id, poster }) => {
  const img_url = `https://image.tmdb.org/t/p/original${poster}`;
  const [isShow, setIsShow] = useState(false);

  const navigate = useNavigate();
  const goToMovieDetail = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <S.OneMovie>
      <S.MovieContainer style={{ backgroundImage: `url(${img_url})`, backgroundSize: 200 }} onMouseOver={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)} onClick={goToMovieDetail}>
        {isShow && (
          <S.Movie>
            <S.MovieTitle>{title}</S.MovieTitle>
            <S.MovieOverView>{overview}</S.MovieOverView>
          </S.Movie>
        )}
      </S.MovieContainer>
    </S.OneMovie>
  );
};

export default MovieBox;

const OneMovie = styled.div`
  ${flexCenter}
`;

const Movie = styled.div`
  padding-left: 5px;
`;

const MovieContainer = styled.div`
  width: 200px;
  height: 300px;
  overflow: hidden;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  &:hover {
    cursor: pointer;
    filter: drop-shadow(10px 10px 10px black);
    transform: scale(1.05);
    transition: 1s;
  }
`;

const MovieTitle = styled.div`
  font-weight: bold;
  font-size: 19.5px;
  width: 185px;
  height: 65px;
  padding-top: 20px;
  line-height: 1.2;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
`;

const MovieOverView = styled.div`
  line-height: 1.4;
  padding-top: 50px;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
`;

const S = {
  OneMovie,
  Movie,
  MovieContainer,
  MovieTitle,
  MovieOverView,
};
