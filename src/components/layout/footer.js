import styled from "styled-components";
import { flexCenter } from "../../styles/common.style";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.ProfileImg src="https://media.discordapp.net/attachments/719528163188932632/1165112561327423508/image0.jpg?ex=6545aaa1&is=653335a1&hm=41034e0e0ec37b1e438e941c4bf2f6ac17a58492c7796360a4ea4f9ae5b9bc3c&=&width=263&height=257" />
      HeeSikK
    </S.Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: #c25a4a;
  width: 100%;
  padding: 10px 0 10px 0;
  color: white;
  ${flexCenter}
`;

const ProfileImg = styled.img`
  width: 40px;
  margin-right: 8px;
`;

const S = {
  Wrapper,
  ProfileImg,
};
