import { AxiosInstance } from './axios';

export const API = {
  getPost: async (page?: number, limit = 10) => {
    const res = await AxiosInstance().get(
      `/posts/recommended?limit=${limit}&page=${page}`
    );
    return res.data;
  },
  getMostLike: async (page = 1, limit = 10) => {
    const res = await AxiosInstance().get(
      `/posts/most-liked?limit=${limit}&page=${page}`
    );
    return res.data;
  },
  getPostByQuery: async (query: string) => {
    const res = await AxiosInstance().get(`/posts/search?query=${query}`);
    return res.data;
  },
  getPostById: async (id: string) => {
    const res = await AxiosInstance().get(`/posts/${id}`);
    return res.data;
  },
  getCommentById: async (id: string) => {
    const res = await AxiosInstance().get(`/posts/${id}/comments`);

    return res.data;
  },
  getUser: async (id: number) => {
    const res = await AxiosInstance().get(`/users/${id}/comments`);

    return res.data;
  },
};
