import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../../apis/api";
import OneMovie from "./component/moviebox";
import styled from "styled-components";
import { flexCenter } from "../../styles/common.style";
import { QUERY_KEY } from "../../consts/queryKey";

const SearchPage = () => {
  const [query] = useSearchParams();
  const keyword = query.get("keyword");

  console.log(keyword);

  const { data } = useQuery([QUERY_KEY.SearchMovie, keyword], () => getSearchMovie(keyword));
  console.log(`${keyword}가 포함된 배열`, data);

  const movieList = data && data.results;

  return (
    <S.Wrapper>
      <S.SearchResult>{movieList && movieList.length > 0 ? `This is the search result of the "${keyword}"` : `No results were found for "${keyword}"`}</S.SearchResult>
      {movieList &&
        movieList.map((movie) => <OneMovie poster={movie.poster_path} backdrop_poster={movie.backdrop_path} title={movie.title} overview={movie.overview} date={movie.release_date} id={movie.id} />)}
    </S.Wrapper>
  );
};

export default SearchPage;

const Wrapper = styled.div`
  ${flexCenter}
  flex-direction:column;
  min-height: calc(100vh - 154.05px);
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
