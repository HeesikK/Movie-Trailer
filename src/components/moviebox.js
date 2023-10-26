import styled from "@emotion/styled";
import { flexCenter } from "../styles/common.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieBox = ({ title, id, poster, rate, overview }) => {
  const img_url = `https://image.tmdb.org/t/p/original${poster}`;
  const [isShow, setIsShow] = useState(false);

  const navigate = useNavigate();
  const goToMovieDetail = () => {
    navigate(`/movie/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <S.OneMovie>
      <S.MovieContainer style={{ backgroundImage: `url(${img_url})`, backgroundSize: 200 }} onMouseOver={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)} onClick={goToMovieDetail}>
        {isShow && (
          <S.Movie>
            <S.MovieTitle>{title}</S.MovieTitle>
            <S.MovieOverview>{overview}</S.MovieOverview>
            <S.MovieRate>{`⭐ ${Math.round(rate)}`}</S.MovieRate>
          </S.Movie>
        )}
      </S.MovieContainer>
    </S.OneMovie>
  );
};

{
  /*  */
}

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
    transform: scale(1.05);
    transition: 1s;
  }
`;

const MovieTitle = styled.div`
  font-weight: bold;
  font-size: 19px;
  width: 185px;
  height: 65px;
  padding-top: 20px;
  line-height: 1.2;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
`;

const MovieOverview = styled.div`
  display: -webkit-box;
  color: white;
  padding-top: 60px;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
  line-height: 1.3;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
`;

const MovieRate = styled.div`
  padding-top: 50px;
  padding-right: 20px;
  color: white;
  text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
`;

const S = {
  OneMovie,
  Movie,
  MovieContainer,
  MovieTitle,
  MovieOverview,
  MovieRate,
};
