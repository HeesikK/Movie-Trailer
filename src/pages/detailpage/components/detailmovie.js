import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDetailMovie, getMovieVideo } from "../../../apis/api";
import YouTube from "react-youtube";
import { flexCenter, flexAlignCenter } from "../../../styles/common.style";
import styled from "styled-components";
import Review from "./review";
import SimilarMovie from "./similar";
import { QUERY_KEY } from "../../../consts/queryKey";

const DetailMovie = () => {
  const { id } = useParams();
  const { data: detailMovie } = useQuery([QUERY_KEY.Detail, id], () => getDetailMovie(id));
  const { data: movieVideo } = useQuery([QUERY_KEY.Video, id], () => getMovieVideo(id));

  const video = movieVideo && movieVideo.results[0];

  return (
    <S.Wrapper>
      <YouTube videoId={video?.key} opts={{ width: 1280, height: 720, playerVars: { autoplay: 1 } }} />
      <S.MovieInfoBox>
        <S.Header>
          <S.MovieTitle>{detailMovie?.title}</S.MovieTitle>
          <S.MovieRate>{`⭐ ${Math.round(detailMovie?.vote_average)}`}</S.MovieRate>
        </S.Header>
      </S.MovieInfoBox>
      <S.MovieDate>{`released ${detailMovie?.release_date}`}</S.MovieDate>
      <S.OverView>
        <S.OverViewTitle>OverView</S.OverViewTitle>
        <S.OverViewContent>{detailMovie?.overview}</S.OverViewContent>
      </S.OverView>
      <Review id={id} />
      <SimilarMovie id={id} />
    </S.Wrapper>
  );
};

export default DetailMovie;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  margin-top: 35px;
`;

const MovieInfoBox = styled.div`
  ${flexCenter}
  flex-direction:column;
`;

const Header = styled.div`
  width: 1280px;
  ${flexAlignCenter}
  justify-content:space-between;
  padding: 25px 0 25px 0;
`;

const MovieTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.white};
  width: 640px;
  line-height: 1.2;
`;

const MovieRate = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.white};
  font-weight: bold;
`;

const MovieDate = styled.div`
  width: 1280px;
  display: flex;
  justify-content: flex-end;
  padding-top: 25px;
  font-size: 25px;
  color: ${({ theme }) => theme.COLORS.white};
  opacity: 0.5;
`;

const OverView = styled.div`
  padding-top: 50px;
  width: 1280px;
`;

const OverViewTitle = styled.div`
  padding-bottom: 25px;
  color: ${({ theme }) => theme.COLORS.white};
  font-size: 28px;
  font-weight: bold;
`;

const OverViewContent = styled.div`
  font-size: 17px;
  color: ${({ theme }) => theme.COLORS.white};
  line-height: 1.5;
`;

const S = {
  Wrapper,
  MovieInfoBox,
  Header,
  MovieTitle,
  MovieRate,
  MovieDate,
  OverView,
  OverViewTitle,
  OverViewContent,
};
