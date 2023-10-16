import { axiosInstance } from "./core";

export const getMovieList = async () => {
  const res = await axiosInstance.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`);
  console.log(res.data);
  return res.data;
};
