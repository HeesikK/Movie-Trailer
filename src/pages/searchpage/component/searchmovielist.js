import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../../../apis/api";
import OneMovie from "./moviebox";
import styled from "styled-components";
import { flexCenter } from "../../../styles/common.style";
import { QUERY_KEY } from "../../../consts/queryKey";

const SearchMovieList = () => {
  const [query] = useSearchParams();
  const keyword = query.get("keyword");

  const { data } = useQuery([QUERY_KEY.SearchMovie, keyword], () => getSearchMovie(keyword));

  const movieList = data && data.results;

  return (
    <S.Wrapper>
      <S.SearchResult>{movieList?.length > 0 ? `This is the search result of the "${keyword}"` : `No results were found for "${keyword}"`}</S.SearchResult>
      {movieList?.map((movie, index) => (
        <OneMovie key={index} poster={movie.poster_path} backdrop_poster={movie.backdrop_path} title={movie.title} overview={movie.overview} date={movie.release_date} id={movie.id} />
      ))}
    </S.Wrapper>
  );
};

export default SearchMovieList;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction:column;
  min-height: calc(100vh - 154.05px);
`;

const SearchResult = styled.div`
  ${flexCenter}
  padding: 30px 0 50px 0;
  color: ${({ theme }) => theme.COLORS.white};
  font-size: 28px;
  font-weight: bold;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: 20px;
  }
`;

const S = {
  Wrapper,
  SearchResult,
};
