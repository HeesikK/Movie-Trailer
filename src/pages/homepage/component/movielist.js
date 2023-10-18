import { Container, Grid } from "@mui/material";
import MovieBox from "../../../components/moviebox";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getMovieList } from "../../../apis/api";
import { QUERY_KEY } from "../../../consts/queryKey";

const MovieList = () => {
  const { data } = useQuery([QUERY_KEY.Home], ({ pageParam = 1 }) => getMovieList(pageParam));
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

// const fetchData = ({ pageParam = 1 }) => {
//   getMovieList(pageParam);
// };
// const { data, fetchNextPage, isFetching } = useInfiniteQuery({
//   queryKey: ["getMovie"],
//   queryFn: fetchData,
//   getNextPageParam:
// });

// const scrollBottom = () => {
//   const scrollHeight = document.documentElement.scrollHeight;
//   const scrollTop = document.documentElement.scrollTop;
//   const clientHeight = document.documentElement.clientHeight;

//   if (scrollTop + clientHeight >= scrollHeight) return;
// };
