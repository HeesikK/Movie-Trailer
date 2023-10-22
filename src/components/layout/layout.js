import { Outlet } from "react-router-dom";
import Header from "./header";
import styled from "styled-components";
import ScrollBTN from "./scrollbtn";

const Layout = () => {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
        <ScrollBTN />
      </S.Main>
    </>
  );
};

export default Layout;

const Main = styled.div`
  padding: 100px 0 0 0;
  position: relative;
  height: 100%;
`;

const S = {
  Main,
};
