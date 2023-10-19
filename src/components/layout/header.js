import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common.style";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../../consts/queryKey";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [filterMovie, setFilterMovie] = useState();

  const onSearchMovie = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/movie/search?keyword=${keyword}`);
    }
  };

  const goToDifferentMovie = (movieKey) => {
    navigate(movieKey);
  };

  return (
    <S.Wrapper>
      <S.Navbar>
        <S.Logo src="https://www.shareicon.net/data/2016/09/13/828455_logo_512x512.png" onClick={() => navigate("/")} />
        <S.FilterList>
          <li onClick={() => goToDifferentMovie(QUERY_KEY.now_playing)}>Now Playing</li>
          <li onClick={() => goToDifferentMovie(QUERY_KEY.popular)}>Popular</li>
          <li onClick={() => goToDifferentMovie(QUERY_KEY.top_rated)}>Top Rated</li>
          <li onClick={() => goToDifferentMovie(QUERY_KEY.upcoming)}>Upcoming</li>
        </S.FilterList>
      </S.Navbar>
      <S.InputBox>
        <S.SearchIcon src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" />
        <S.MovieInput type="text" style={{ backgroundColor: "#c25a4a" }} onKeyPress={onSearchMovie} />
      </S.InputBox>
    </S.Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  justify-content: space-between;
  ${flexAlignCenter};
  padding: 20px 60px 20px 60px;
  background-color: #c25a4a;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const Navbar = styled.div`
  ${flexCenter}
`;

const Logo = styled.img`
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
  margin-right: 20px;
  width: 60px;
  &:hover {
    cursor: pointer;
  }
`;

const FilterList = styled.ul`
  ${flexCenter}
  > li {
    color: white;
    font-weight: bold;
    padding: 15px;
    cursor: pointer;
    &:hover {
      color: #1c2645;
    }
  }
`;

const InputBox = styled.div`
  position: relative;
`;

const SearchIcon = styled.img`
  width: 22px;
  position: absolute;
  top: 5px;
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
`;

const MovieInput = styled.input`
  padding: 10px 10px 10px 30px;
  border: none;
  border-bottom: 2px solid white;
  background-color: black;
  &:focus {
    outline: none;
  }
`;

const S = {
  Wrapper,
  Navbar,
  Logo,
  FilterList,
  InputBox,
  SearchIcon,
  MovieInput,
};
