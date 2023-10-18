import styled from "styled-components";
import { flexCenter } from "../../styles/common.style";

const Footer = () => {
  return <S.Wrapper>Designed by HeeSikK</S.Wrapper>;
};

export default Footer;

const Wrapper = styled.div`
  background-color: #c25a4a;
  width: 100%;
  padding: 15px 0 15px 0;
  color: white;
  ${flexCenter}
`;

const S = {
  Wrapper,
};
