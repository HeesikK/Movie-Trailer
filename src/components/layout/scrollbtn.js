import { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollBTN = () => {
  const [isShowButton, setIsShowButton] = useState(false);

  const onHandleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setIsShowButton(true) : setIsShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll);

    return () => {
      window.removeEventListener("scroll", onHandleScroll);
    };
  }, []);

  const goToScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <>{isShowButton && <S.ScrollUpButton src="https://static.thenounproject.com/png/607570-200.png" onClick={goToScrollTop} />}</>;
};

export default ScrollBTN;

const ScrollUpButton = styled.img`
  position: fixed;
  width: 40px;
  right: 40px;
  bottom: 100px;
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const S = {
  ScrollUpButton,
};
