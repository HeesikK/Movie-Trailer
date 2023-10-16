import styled from "@emotion/styled";
import { flexCenter } from "../styles/common.style";
import { useState } from "react";

const MovieBox = ({ title, overview, id, poster }) => {
  const img_url = `https://image.tmdb.org/t/p/original${poster}`;
  const [isShow, setIsShow] = useState(false);

  return (
    <S.OneMovie>
      <S.MovieContainer style={{ backgroundImage: `url(${img_url})`, backgroundSize: 200 }} className="hoverImg" onMouseOver={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}>
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
    transition: 1s;
    filter: brightness(0.8);

    /* z-index: 1000; */
    /* filter: brightness(0.7); */
    /* background-color: rgba(0, 0, 0, 0.7);
    opacity: 1;
    transition: 1s; */
    /* opacity: 0.5; */
  }
`;

const MovieTitle = styled.div`
  font-weight: bold;
  width: 185px;
  height: 65px;
  padding-top: 20px;
  line-height: 1.2;
  color: #c4c4c4;
`;

const MovieOverView = styled.div`
  line-height: 1.4;
  padding-top: 15px;
  color: #c4c4c4;
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
