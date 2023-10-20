import { Container, Grid } from "@mui/material";
import MovieBox from "../../../components/moviebox";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getFilterMovieList, getMovieList } from "../../../apis/api";
import { QUERY_KEY } from "../../../consts/queryKey";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const MovieList = () => {
  const param = useParams();
  console.log("param값은? ", param);

  let paramKeyword = param.movie === undefined ? "popular" : param.movie;

  // const { data } = useQuery([QUERY_KEY.paramKeyword, paramKeyword], ({ pageParam = 1 }) => getFilterMovieList(paramKeyword, pageParam));

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY.paramKeyword, paramKeyword],
    queryFn: ({ pageParam = 1 }) => getFilterMovieList(paramKeyword, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      console.log("lastPage값은?", lastPage);
      const page = lastPage.page;
      console.log("몇 번째 페이지?", page);
      return page + 1;
    },
  });

  // height가 445일때 scrollBottom으로 인식하고 무한스크롤?
  /*  스크롤 이벤트 참조 블로그  
      https://velog.io/@leejpsd/React-%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4
  */
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    console.log("무한스크롤 발생?", scrollTop + clientHeight >= scrollHeight);
    if (scrollTop + clientHeight >= scrollHeight) return fetchNextPage();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  console.log("데이터는?", data);

  return (
    <Container>
      {data &&
        data.pages.map((page) => {
          const movieList = page.results;
          return (
            <Grid container spacing={2} style={{ paddingBottom: 20 }}>
              {movieList &&
                movieList.map((movie) => (
                  <Grid item xs={3}>
                    <MovieBox title={movie.title} overview={movie.overview} id={movie.id} poster={movie.poster_path} />
                  </Grid>
                ))}
            </Grid>
          );
        })}
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
