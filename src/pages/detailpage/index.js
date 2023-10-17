import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDetailMovie, getMovieVideo } from "../../apis/api";

const DetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery(["getDetail"], () => getDetailMovie(id));
  const { video } = useQuery(["getVideo"], () => getMovieVideo(id));

  console.log(data);
  console.log(video);

  return <Container>{id}</Container>;
};

export default DetailPage;
