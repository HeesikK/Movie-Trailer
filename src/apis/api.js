import { axiosInstance } from "./core";

export const getMovieList = async (pageParam) => {
  const res = await axiosInstance.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageParam}&sort_by=popularity.desc`);
  return res.data;
};

export const getDetailMovie = async (id) => {
  const res = await axiosInstance.get(`/movie/${id}`);
  return res.data;
};

export const getMovieVideo = async (id) => {
  const res = await axiosInstance.get(`/movie/${id}/videos`);
  return res.data;
};

export const getMovieReview = async (id) => {
  const res = await axiosInstance.get(`/movie/${id}/reviews`);
  return res.data;
};
