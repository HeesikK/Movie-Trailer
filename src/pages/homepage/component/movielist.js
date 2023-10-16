import { Container, Grid } from "@mui/material";
import MovieBox from "../../../components/moviebox";
import { useQuery } from "@tanstack/react-query";
import { getMovieList } from "../../../apis/api";

const MovieList = () => {
  const { data } = useQuery(["getMovie"], () => getMovieList());
  console.log(data);

  const movieList = data && data.results;
  console.log(movieList);

  return (
    <Container>
      <Grid container spacing={2}>
        {movieList &&
          movieList.map((movie) => (
            <Grid item xs={3}>
              <MovieBox title={movie.title} overview={movie.overview} id={movie.id} poster={movie.poster_path} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
