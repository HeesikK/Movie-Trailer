import { useQuery } from "@tanstack/react-query";
import { getSimilarMove } from "../../../apis/api";
import { Container, Grid } from "@mui/material";
import MovieBox from "../../../components/moviebox";
import styled from "styled-components";
import { QUERY_KEY } from "../../../consts/queryKey";

const SimilarMovie = ({ id }) => {
  const { data: similarMovie } = useQuery([QUERY_KEY.SimilarMovie, id], () => getSimilarMove(id));

  const similarMovieList = similarMovie && similarMovie.results;

  return (
    <Container style={{ paddingBottom: 30 }}>
      <S.SimilarList>Similar Movie</S.SimilarList>
      <Grid container spacing={2}>
        {similarMovieList?.map((movie, index) => (
          <Grid key={index} item xs={3}>
            <MovieBox key={index} title={movie.title} rate={movie.vote_average} count={movie.vote_count} id={movie.id} poster={movie.poster_path} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SimilarMovie;

const SimilarList = styled.div`
  padding: 30px 0 60px 0;
  color: white;
  font-size: 28px;
  font-weight: bold;
`;

const S = {
  SimilarList,
};
