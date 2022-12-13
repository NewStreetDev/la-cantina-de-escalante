import axios from "axios";

export const getDetailsRequest = async (orderId) =>
  await axios.get(`http://localhost:4000/DetailOrder/${orderId}`);

export const createDetailRequest = async (Detail) =>
  await axios.post("http://localhost:4000/Detail", Detail);

export const deleteDetailRequest = async (id) =>
  await axios.delete(`http://localhost:4000/Detail/${id}`);

export const getDetailRequest = async (id) =>
  await axios.get(`http://localhost:4000/Detail/${id}`);

export const updateDetailRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/Detail/${id}`, newFields);

