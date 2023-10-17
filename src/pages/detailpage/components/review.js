import { useQuery } from "@tanstack/react-query";
import { getMovieReview } from "../../../apis/api";
import styled from "styled-components";

const Review = ({ id }) => {
  const { data: movieReview } = useQuery(["getReview"], () => getMovieReview(id));

  const reviews = movieReview && movieReview.results;

  console.log(reviews);

  return (
    <>
      <S.ReviewTitle>Review</S.ReviewTitle>
      {reviews &&
        reviews.map((review) => {
          return (
            <S.ReviewContainer>
              <S.ReviewAuthor>{review.author}</S.ReviewAuthor>
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
  padding: 50px 0 30px 0;
`;

const ReviewContainer = styled.div`
  width: 1280px;
  padding: 20px;
  margin-bottom: 25px;
  border: 1px solid white;
  border-radius: 8px;
`;

const ReviewAuthor = styled.div`
  padding-bottom: 20px;
  color: white;
  font-size: 20px;
`;

const ReviewContent = styled.div`
  line-height: 1.3;
  color: white;
  font-size: 16px;
`;

const S = {
  ReviewTitle,
  ReviewContainer,
  ReviewAuthor,
  ReviewContent,
};
