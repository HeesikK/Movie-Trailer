import { Container, Grid } from "@mui/material";
import MovieBox from "../../../components/moviebox";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getFilterMovieList } from "../../../apis/api";
import { QUERY_KEY } from "../../../consts/queryKey";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const MovieList = () => {
  const param = useParams();
  const { ref, inView } = useInView();

  let paramKeyword = !param.movie ? "popular" : param.movie;

  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: [QUERY_KEY.paramKeyword, paramKeyword],
    queryFn: ({ pageParam = 1 }) => getFilterMovieList(paramKeyword, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const page = lastPage.page;
      return page + 1;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      <Type>{!param.movie ? "Recommended content" : param.movie.toUpperCase()}</Type>
      {data?.pages.map((page, index) => {
        const movieList = page.results;
        return (
          <Grid key={index} container spacing={{ xs: 1, md: 2 }} style={{ paddingBottom: 20 }}>
            {movieList.map((movie, index) => (
              <Grid key={index} item xs={6} md={3}>
                <MovieBox key={index} title={movie.title} id={movie.id} poster={movie.poster_path} rate={movie.vote_average} overview={movie.overview} isFetching={isFetching} />
              </Grid>
            ))}
            <div ref={ref}></div>
            {isFetching &&
              [...Array(parseInt(4))].map(() => (
                <Grid item xs={6} md={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Skeleton></Skeleton>
                </Grid>
              ))}
          </Grid>
        );
      })}
    </Container>
  );
};

export default MovieList;

const Type = styled.div`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Skeleton = styled.div`
  background-color: gray;
  border-radius: 5px;
  width: 200px;
  height: 300px;
`;
