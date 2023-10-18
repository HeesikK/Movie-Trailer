import { Container } from "@mui/material";
import { flexCenter } from "../../../styles/common.style";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const OneMovie = ({ poster, backdrop_poster, title, overview, date, id }) => {
  const backdrop_posterURL = `https://image.tmdb.org/t/p/w780/${backdrop_poster}`;
  const posterURL = `https://image.tmdb.org/t/p/original${poster}`;

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <S.Wrapper>
      <S.BackDrop_Poster src={backdrop_posterURL} />
      <S.Title>{title}</S.Title>
      <S.OverView>{overview}</S.OverView>
      <S.Date>released {date}</S.Date>
      <S.Poster src={posterURL} onClick={goToDetail} />
    </S.Wrapper>
  );
};

export default OneMovie;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  margin-bottom: 50px;
  position: relative;
  background-color: black;
  width: 1000px;
`;

const BackDrop_Poster = styled.img`
  width: 1000px;
  height: 450px;
  opacity: 0.4;
`;

const Poster = styled.img`
  width: 200px;
  position: absolute;
  top: 80px;
  left: 80px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s linear;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 80px;
  left: 325px;
  color: white;
  font-weight: bold;
  font-size: 28px;
  width: 400px;
`;

const OverView = styled.div`
  position: absolute;
  width: 600px;
  left: 325px;
  top: 175px;
  line-height: 1.5;
  color: white;
`;

const Date = styled.div`
  position: absolute;
  top: 365px;
  left: 325px;
  color: white;
  opacity: 0.7;
  font-size: 12px;
`;

const S = {
  Wrapper,
  BackDrop_Poster,
  Poster,
  Title,
  OverView,
  Date,
};
