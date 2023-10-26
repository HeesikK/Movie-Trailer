import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common.style";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../../consts/queryKey";

const Header = () => {
  const navigate = useNavigate();

  const onSearchMovie = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/movie/search?keyword=${keyword}`);
      window.scrollTo(0, 0);
    }
  };

  const goToDifferentMovie = (movieKey) => {
    navigate(movieKey);
    window.scrollTo(0, 0);
  };

  const goToHomePage = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <S.Wrapper>
      <S.Navbar>
        <S.Logo
          src="https://media.discordapp.net/attachments/719528163188932632/1165109066545233990/Pngtreeletter_t_logo_png_vector_6336739.png?ex=6545a760&is=65333260&hm=42590ae66b9fce8fc37173b1ab6e2441a69e7a7d5b78b639645784fe8d0c4ae6&=&width=596&height=596"
          onClick={goToHomePage}
        />
        <S.FilterList>
          <li onClick={() => goToDifferentMovie(QUERY_KEY.now_playing)}>Now Playing</li>
          <li onClick={() => goToDifferentMovie(QUERY_KEY.popular)}>Popular</li>
          <li onClick={() => goToDifferentMovie(QUERY_KEY.top_rated)}>Top Rated</li>
          <li onClick={() => goToDifferentMovie(QUERY_KEY.upcoming)}>Upcoming</li>
        </S.FilterList>
      </S.Navbar>
      <S.InputBox>
        <S.SearchIcon src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" />
        <S.MovieInput type="text" style={{ backgroundColor: "black" }} onKeyPress={onSearchMovie} />
      </S.InputBox>
    </S.Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  justify-content: space-between;
  ${flexAlignCenter};
  padding: 20px 60px 20px 60px;
  background-color: ${({ theme }) => theme.COLORS.black};
  z-index: 99999;
  position: fixed;
  width: 100%;
`;

const Navbar = styled.div`
  ${flexCenter}
`;

const Logo = styled.img`
  margin-right: 20px;
  width: 55px;
  &:hover {
    cursor: pointer;
  }
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
`;

const FilterList = styled.ul`
  ${flexCenter}
  > li {
    color: ${({ theme }) => theme.COLORS.white};
    font-weight: bold;
    padding: 30px 75px 30px 75px;
    cursor: pointer;
    &:hover {
      color: red;
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
  color: ${({ theme }) => theme.COLORS.white};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.white};
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
