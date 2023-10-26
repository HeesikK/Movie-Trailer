import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../../consts/queryKey";
import { getMovieList } from "../../../apis/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Container } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data: bannerList } = useQuery([QUERY_KEY.Home], () => getMovieList(1));
  const banner = bannerList && bannerList.results;

  const navigate = useNavigate();

  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ marginTop: 35, marginBottom: 35, position: "relative" }}
      >
        {banner?.map((movie) => (
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }} onClick={() => navigate(`/movie/${movie.id}`)}>
            <Title>{movie.title}</Title>
            <OverView>{movie.overview}</OverView>
            <Backdrop_Poster src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Banner;

const Title = styled.div`
  text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;
  font-size: 40px;
  color: none;
  font-weight: bold;
  position: absolute;
  left: 80px;
  top: 150px;
  width: 800px;
  z-index: 99999;
`;

const OverView = styled.div`
  position: absolute;
  left: 80px;
  top: 250px;
  line-height: 1.2;
  color: white;
  line-height: 1.6;
  font-size: 18px;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  width: 900px;
  z-index: 99999;
`;

const Backdrop_Poster = styled.img`
  width: 100%;
  height: 520px;
  opacity: 0.5;
`;
