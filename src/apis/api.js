import { axiosInstance } from "./core";

export const getMovieList = async (pageParam) => {
  const res = await axiosInstance.get(`/discover/movie?page=${pageParam}`);
  return res.data;
};

export const getFilterMovieList = async (type, pageParam) => {
  const res = await axiosInstance.get(`/movie/${type}?language=en-US&page=${pageParam}`);
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

export const getSimilarMove = async (id) => {
  const res = await axiosInstance.get(`/movie/${id}/similar`);
  return res.data;
};

export const getSearchMovie = async (keyword) => {
  const res = await axiosInstance.get(`/search/movie?query=${keyword}`);
  return res.data;
};
