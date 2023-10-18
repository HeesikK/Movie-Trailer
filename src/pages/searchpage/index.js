import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getMovieList } from "../../apis/api";
import OneMovie from "./component/moviebox";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common.style";

const SearchPage = () => {
  const [query] = useSearchParams();
  const keyword = query.get("keyword");

  const { data } = useQuery(["getMovie"], ({ pageParam = 1 }) => getMovieList(pageParam));
  const movieList = data && data.results;

  const searchMovieList = movieList && movieList.filter((movie) => movie.title.toLowerCase().includes(keyword));

  return (
    <S.Wrapper>
      {searchMovieList && searchMovieList.length > 0 ? (
        <S.SearchResult>This is the search result of the "{keyword}"</S.SearchResult>
      ) : (
        <S.SearchResult>No results were found for "{keyword}"</S.SearchResult>
      )}
      {searchMovieList &&
        searchMovieList.map((movie) => (
          <OneMovie poster={movie.poster_path} backdrop_poster={movie.backdrop_path} title={movie.title} overview={movie.overview} date={movie.release_date} id={movie.id} />
        ))}
    </S.Wrapper>
  );
};

export default SearchPage;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction:column;
`;

const SearchResult = styled.div`
  ${flexCenter}
  padding: 30px 0 50px 0;
  color: white;
  font-size: 28px;
  font-weight: bold;
`;

const S = {
  Wrapper,
  SearchResult,
};
