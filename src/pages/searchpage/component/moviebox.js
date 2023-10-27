import { flexCenter } from "../../../styles/common.style";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const OneMovie = ({ poster, backdrop_poster, title, overview, date, id }) => {
  const backdrop_posterURL = `https://image.tmdb.org/t/p/w780/${backdrop_poster}`;
  const posterURL = `https://image.tmdb.org/t/p/original${poster}`;

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/movie/${id}`);
    window.scrollTo(0, 0);
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
  background-color: ${({ theme }) => theme.COLORS.black};
  width: 1000px;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    ${flexCenter}
    width: 100%;
  }
`;

const BackDrop_Poster = styled.img`
  width: 1000px;
  height: 450px;
  opacity: 0.4;
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 200px;
    height: 90px;
  }
`;

const Poster = styled.img`
  width: 200px;
  position: absolute;
  top: 80px;
  left: 80px;
  &:hover {
    cursor: pointer;
    filter: drop-shadow(10px 10px 10px black);
    transform: scale(1.05);
    transition: all 0.2s linear;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    position: absolute;
    width: 40px;
    left: 110px;
    top: 15px;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 80px;
  left: 325px;
  color: ${({ theme }) => theme.COLORS.white};
  font-weight: bold;
  font-size: 28px;
  width: 400px;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    position: absolute;
    font-size: 10px;
    top: 15px;
    left: 170px;
    width: 100px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-height: 1.3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
  }
`;

const OverView = styled.div`
  position: absolute;
  width: 600px;
  left: 325px;
  top: 175px;
  line-height: 1.5;
  color: ${({ theme }) => theme.COLORS.white};
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    position: absolute;
    font-size: 7px;
    left: 170px;
    top: 35px;
    z-index: 99999;
    display: -webkit-box;
    width: 100px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
  }
`;

const Date = styled.div`
  position: absolute;
  top: 365px;
  left: 325px;
  color: ${({ theme }) => theme.COLORS.white};
  opacity: 0.7;
  font-size: 12px;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: none;
  }
`;

const S = {
  Wrapper,
  BackDrop_Poster,
  Poster,
  Title,
  OverView,
  Date,
};
