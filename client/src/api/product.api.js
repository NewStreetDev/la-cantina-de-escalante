import axios from "axios";

export const getProductsRequest = async () =>
  await axios.get(`/Product`);

export const createProductRequest = async (Product) =>
  await axios.post(`/Product`, Product);

export const deleteProductRequest = async (id) =>
  await axios.delete(`/Product/${id}`);

export const getProductRequest = async (id) =>
  await axios.get(`/Product/${id}`);

export const updateProductRequest = async (id, newFields) =>
  await axios.put(`/Product/${id}`, newFields);


