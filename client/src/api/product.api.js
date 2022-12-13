import axios from "axios";

export const getProductsRequest = async () =>
  await axios.get(`http://localhost:4000/Product`);

export const createProductRequest = async (Product) =>
  await axios.post("http://localhost:4000/Product", Product);

export const deleteProductRequest = async (id) =>
  await axios.delete(`http://localhost:4000/Product/${id}`);

export const getProductRequest = async (id) =>
  await axios.get(`http://localhost:4000/Product/${id}`);

export const updateProductRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/Product/${id}`, newFields);


