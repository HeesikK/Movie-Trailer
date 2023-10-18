import { useQuery } from "@tanstack/react-query";
import { getMovieReview } from "../../../apis/api";
import styled from "styled-components";
import { useState } from "react";
import { flexAlignCenter, flexCenter } from "../../../styles/common.style";

const Review = ({ id }) => {
  const { data: movieReview } = useQuery(["getReview"], () => getMovieReview(id));
  const [isShowReview, setIsShowReview] = useState(false);

  const reviews = movieReview && movieReview.results;

  console.log("리뷰: ", reviews);

  const renderReview = () => {
    setIsShowReview((prev) => !prev);
  };

  return (
    <>
      <S.ReviewTitle>
        Review
        <DropDownImage src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png" onClick={renderReview} />
      </S.ReviewTitle>
      {isShowReview &&
        reviews &&
        reviews.map((review) => {
          return (
            <S.ReviewContainer>
              <S.AuthorBox>
                <S.ReviewAuthor>{review.author_details.username}</S.ReviewAuthor>
                <S.ReviewDate>{review.updated_at}</S.ReviewDate>
              </S.AuthorBox>
              <S.ReviewContent>{review.content}</S.ReviewContent>
            </S.ReviewContainer>
          );
        })}
    </>
  );
};

export default Review;

const ReviewTitle = styled.div`
  font-size: 28px;
  color: white;
  padding: 50px 0 50px 0;
`;

const ReviewContainer = styled.div`
  width: 1280px;
  padding: 20px;
  margin-bottom: 25px;
  border: 1px solid white;
  border-radius: 8px;
`;

const AuthorBox = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  padding-bottom: 35px;
`;

const ReviewAuthor = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const ReviewDate = styled.div`
  color: #383838;
`;

const ReviewContent = styled.div`
  line-height: 1.3;
  color: white;
  font-size: 16px;
`;

const DropDownImage = styled.img`
  width: 25px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const S = {
  ReviewTitle,
  ReviewContainer,
  AuthorBox,
  ReviewAuthor,
  ReviewDate,
  ReviewContent,
  DropDownImage,
};
