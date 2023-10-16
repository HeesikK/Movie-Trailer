import { useEffect } from "react";
import { getMovieList } from "../../apis/api";

const HomePage = () => {
  useEffect(() => {
    getMovieList();
  }, []);
  return <div>홈페이지</div>;
};

export default HomePage;
