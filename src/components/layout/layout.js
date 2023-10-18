import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.div`
  padding-top: 100px;
`;

const S = {
  Main,
};
