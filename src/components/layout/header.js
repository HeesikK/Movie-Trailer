import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onSearchMovie = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/movie/search/?keyword=${keyword}`);
    }
  };

  return (
    <S.Wrapper>
      <S.Navbar>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" width={150} />
        <S.FilterList>
          <li>Now Playing</li>
          <li>Popular</li>
          <li>Top Rated</li>
          <li>Upcoming</li>
        </S.FilterList>
      </S.Navbar>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ position: "relative", left: 18 }} />
        <S.MovieInput type="text" style={{ backgroundColor: "#4d5eb3" }} onKeyPress={onSearchMovie} />
      </div>
    </S.Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  justify-content: space-between;
  ${flexAlignCenter};
  padding: 10px;
  margin-left: 50px;
  margin-right: 50px;
`;

const Navbar = styled.div`
  ${flexCenter}
`;

const FilterList = styled.ul`
  ${flexCenter}
  > li {
    color: white;
    padding: 15px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

const MovieInput = styled.input`
  padding: 10px 10px 10px 25px;
  border: none;
  border-bottom: 2.5px solid black;
  background-color: black;
  &:focus {
    outline: none;
  }
`;

const S = {
  Wrapper,
  Navbar,
  FilterList,
  MovieInput,
};
