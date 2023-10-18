import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getMovieList } from "../../apis/api";
import OneMovie from "./component/moviebox";

const SearchPage = () => {
  const [query] = useSearchParams();
  const keyword = query.get("keyword");

  const { data } = useQuery(["getMovie"], ({ pageParam = 1 }) => getMovieList(pageParam));
  const movieList = data && data.results;

  const searchMovieList = movieList && movieList.filter((movie) => movie.title.toLowerCase().includes(keyword));
  console.log(searchMovieList);
  console.log(movieList);

  return (
    <Container>
      {searchMovieList &&
        searchMovieList.map((movie) => <OneMovie poster={movie.poster_path} backdrop_poster={movie.backdrop_path} title={movie.title} overview={movie.overview} date={movie.release_date} />)}
    </Container>
  );
};

export default SearchPage;
