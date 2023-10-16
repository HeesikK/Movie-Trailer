import styled from "@emotion/styled";
import { flexCenter } from "../styles/common.style";
import { useQuery } from "@tanstack/react-query";
import { getMovieImage } from "../apis/api";

const MovieBox = ({ title, id, poster }) => {
  const img_url = `https://image.tmdb.org/t/p/original${poster}`;

  return (
    <S.OneMovie>
      <img src={img_url} width={200} />
    </S.OneMovie>
  );
};

export default MovieBox;

const OneMovie = styled.div`
  ${flexCenter}
`;

const S = {
  OneMovie,
};
