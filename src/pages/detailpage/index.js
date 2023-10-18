import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDetailMovie, getMovieVideo } from "../../apis/api";
import YouTube from "react-youtube";
import { flexAlignCenter, flexCenter } from "../../styles/common.style";
import styled from "styled-components";
import Review from "./components/review";
import SimilarMovie from "./components/similar";

const DetailPage = () => {
  const { id } = useParams();
  const { data: detailMovie } = useQuery(["getDetail"], () => getDetailMovie(id));
  const { data: movieVideo } = useQuery(["getVideo"], () => getMovieVideo(id));

  const video = movieVideo && movieVideo.results[0];

  return (
    <S.Wrapper>
      <YouTube videoId={video && video.key} opts={{ width: 1280, height: 720, playerVars: { autoplay: 0 } }} />
      <S.MovieInfoBox>
        <S.Header>
          <S.MovieTitle>{detailMovie && detailMovie.title}</S.MovieTitle>
          <S.MovieRate>{`⭐ ${detailMovie && detailMovie.vote_average.toFixed(1)}`}</S.MovieRate>
        </S.Header>
      </S.MovieInfoBox>
      <S.MovieDate>{`released ${detailMovie && detailMovie.release_date}`}</S.MovieDate>
      <S.OverView>
        <S.OverViewTitle>OverView</S.OverViewTitle>
        <S.OverViewContent>{detailMovie && detailMovie.overview}</S.OverViewContent>
      </S.OverView>
      <Review id={id} />
      <SimilarMovie id={id} />
    </S.Wrapper>
  );
};

export default DetailPage;

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
  color: white;
  width: 640px;
  line-height: 1.2;
`;

const MovieRate = styled.div`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

const MovieDate = styled.div`
  width: 1280px;
  display: flex;
  justify-content: flex-end;
  padding-top: 25px;
  font-size: 25px;
  color: white;
`;

const OverView = styled.div`
  padding-top: 50px;
  width: 1280px;
`;

const OverViewTitle = styled.div`
  padding-bottom: 25px;
  color: white;
  font-size: 28px;
  font-weight: bold;
`;

const OverViewContent = styled.div`
  font-size: 17px;
  color: white;
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
