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

  return <>{isShowButton && <S.ScrollUpButton src="https://d1k5j68ob7clqb.cloudfront.net/processed/thumb/7puK9W5jGADhYQ.png" onClick={goToScrollTop} />}</>;
};

export default ScrollBTN;

const ScrollUpButton = styled.img`
  position: fixed;
  width: 70px;
  right: 30px;
  bottom: 45px;
  -webkit-filter: brightness(0) invert(1);
  filter: brightness(0) invert(1);
  &:hover {
    cursor: pointer;
  }
`;

const S = {
  ScrollUpButton,
};
