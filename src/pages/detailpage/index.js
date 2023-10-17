import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDetailMovie, getMovieVideo } from "../../apis/api";
import YouTube from "react-youtube";
import { flexCenter } from "../../styles/common.style";
import styled from "styled-components";

const DetailPage = () => {
  const { id } = useParams();
  const { data: detailMovie } = useQuery(["getDetail"], () => getDetailMovie(id));
  const { data: movieVideo } = useQuery(["getVideo"], () => getMovieVideo(id));

  const video = movieVideo && movieVideo.results[0];

  console.log(detailMovie);

  return (
    <S.Wrapper>
      <YouTube videoId={video && video.key} opts={{ width: 1280, height: 720, playerVars: { autoplay: 0 } }} />
      <S.MovieInfoBox>
        <div>
          <div>{detailMovie.title}</div>
          <div>{`⭐${detailMovie.vote_average}`}</div>
        </div>
        <div>{`released at ${detailMovie.release_date}`}</div>
        {/* <div>{detailMovie.overview}</div> */}
      </S.MovieInfoBox>
    </S.Wrapper>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
`;

const MovieInfoBox = styled.div`
  ${flexCenter}
  flex-direction:column
`;

const S = {
  Wrapper,
  MovieInfoBox,
};
