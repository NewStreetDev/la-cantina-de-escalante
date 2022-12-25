import axios from "axios";
import {DOMINIO} from "../../../server/config.js"

export const getProductsRequest = async () =>
  await axios.get(`${DOMINIO}/Product`);

export const createProductRequest = async (Product) =>
  await axios.post("${DOMINIO}/Product", Product);

export const deleteProductRequest = async (id) =>
  await axios.delete(`${DOMINIO}/Product/${id}`);

export const getProductRequest = async (id) =>
  await axios.get(`${DOMINIO}/Product/${id}`);

export const updateProductRequest = async (id, newFields) =>
  await axios.put(`${DOMINIO}/Product/${id}`, newFields);


