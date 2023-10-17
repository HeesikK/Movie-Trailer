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
      <S.MovieContainer
        style={{ backgroundImage: `url(${img_url})`, backgroundSize: 200 }}
        className="hoverImg"
        onMouseOver={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
        onClick={goToMovieDetail}
      >
        {isShow && (
          <>
            <S.MovieTitle>{title}</S.MovieTitle>
            <S.MovieOverView>{overview}</S.MovieOverView>
          </>
        )}
      </S.MovieContainer>
    </S.OneMovie>
  );
};

export default MovieBox;

const OneMovie = styled.div`
  ${flexCenter}
`;

const MovieContainer = styled.div`
  width: 200px;
  height: 300px;
  overflow: hidden;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  z-index: 0;
  &:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 15px blue);
    transition: 1s;
  }
`;

const MovieTitle = styled.div`
  font-weight: bold;
  width: 185px;
  height: 65px;
  padding-top: 20px;
  line-height: 1.2;
  -webkit-text-stroke: 1px gainsboro;
`;

const MovieOverView = styled.div`
  line-height: 1.4;
  padding-top: 20px;
  -webkit-text-stroke: 1px gainsboro;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
`;

const S = {
  OneMovie,
  MovieContainer,
  MovieTitle,
  MovieOverView,
};
