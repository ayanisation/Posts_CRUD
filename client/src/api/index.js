import axios from "axios";

const API = axios.create({
  baseURL: "https://posts-crud.herokuapp.com/",
});

export const fetchPosts = () => API.get("/post");
export const addPost = (newPost) => API.post("/post", newPost);
export const update = (id, post) => API.patch(`/post/${id}/update`, post);
export const like = (id) => API.patch(`/post/${id}/like`);
export const dislike = (id) => API.patch(`/post/${id}/dislike`);
export const delPost = (id) => API.delete(`/post/${id}/delete`);
