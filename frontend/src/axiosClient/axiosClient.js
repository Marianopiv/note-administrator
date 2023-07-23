import axios from "axios";

const baseURL = "http://localhost:3001/api";

export const getNotes = () => axios.get(`${baseURL}/notes`);

export const createNote = (note) => axios.post(`${baseURL}/note`, note);

export const deleteNote = (id) => axios.delete(`${baseURL}/note/${id}`);

export const updateNote = (note,id) => axios.put(`${baseURL}/note/${id}`, note);

export const getCategories = () => axios.get(`${baseURL}/categories`);

export const createCategory = (category) => axios.post(`${baseURL}/category`,category)

export const deleteCategory = (id) => axios.delete(`${baseURL}/category/${id}`);

