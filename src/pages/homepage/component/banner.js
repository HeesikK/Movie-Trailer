import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../../consts/queryKey";
import { getFilterMovieList, getMovieList } from "../../../apis/api";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useQuery([QUERY_KEY.Home], ({ pageParam = 1 }) => getMovieList(pageParam));
  const MovieList = data && data.results;

  const navigate = useNavigate();

  const [imgIndex, setImgIndex] = useState(0);

  const title = MovieList && MovieList.map((movie) => movie.title);
  const overview = MovieList && MovieList.map((movie) => movie.overview);
  const id = MovieList && MovieList.map((movie) => movie.id);
  const posterUrlList = MovieList && MovieList.map((movie) => movie.poster_path);
  const backdropPosterUrlList = MovieList && MovieList.map((movie) => movie.backdrop_path);

  if (imgIndex < 0) {
    return setImgIndex(posterUrlList.length - 1);
  }

  if (imgIndex > 19) {
    return setImgIndex(0);
  }

  const showLeftImg = () => {
    setImgIndex(() => imgIndex - 1);
  };

  const showRightImg = () => {
    setImgIndex(() => imgIndex + 1);
  };

  const goToDetail = () => {
    navigate(`/movie/${id && id[imgIndex]}`);
  };

  return (
    <Container style={{ position: "relative" }}>
      <S.TopRated>TOP 20 series in Korea today</S.TopRated>
      <S.LeftArrow src="https://static.thenounproject.com/png/1123247-200.png" onClick={showLeftImg} />
      <Title>{title && title[imgIndex]}</Title>
      <OverView>{overview && overview[imgIndex]}</OverView>
      <S.PosterBox>
        <S.PosterImg src={`https://image.tmdb.org/t/p/original${posterUrlList && posterUrlList[imgIndex]}`} onClick={goToDetail} />
        <S.BackDropImg src={`https://image.tmdb.org/t/p/w780/${backdropPosterUrlList && backdropPosterUrlList[imgIndex]}`} />
      </S.PosterBox>
      <S.RightArrow src="https://static.thenounproject.com/png/1123247-200.png" onClick={showRightImg} />
    </Container>
  );
};

export default Banner;

const TopRated = styled.div`
  margin-top: 35px;
  color: white;
  font-size: 35px;
  font-weight: bold;
`;

const Title = styled.div`
  color: none;
  text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;
  font-size: 40px;
  position: absolute;
  left: 350px;
  top: 120px;
  width: 600px;
  line-height: 1.2;
  z-index: 999;
`;

const OverView = styled.div`
  position: absolute;
  top: 260px;
  color: white;
  z-index: 999;
  width: 700px;
  left: 350px;
  opacity: 0.8;
  font-size: 18px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
`;

const PosterBox = styled.div`
  background-color: black;
  margin: 35px 0 50px 0;
`;

const BackDropImg = styled.img`
  width: 100%;
  height: 400px;
  opacity: 0.3;
`;

const PosterImg = styled.img`
  position: absolute;
  top: 125px;
  left: 100px;
  width: 200px;
  z-index: 999;
  &:hover {
    cursor: pointer;
    filter: drop-shadow(10px 10px 10px black);
    transform: scale(1.05);
    transition: all 0.2s linear;
  }
`;

const LeftArrow = styled.img`
  position: absolute;
  transform: rotate(90deg);
  z-index: 999;
  width: 40px;
  top: 250px;
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
  &:hover {
    cursor: pointer;
  }
`;

const RightArrow = styled.img`
  position: absolute;
  transform: rotate(270deg);
  z-index: 999;
  width: 40px;
  top: 250px;
  right: 35px;
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
  &:hover {
    cursor: pointer;
  }
`;

const S = {
  TopRated,
  PosterBox,
  BackDropImg,
  PosterImg,
  LeftArrow,
  RightArrow,
};
