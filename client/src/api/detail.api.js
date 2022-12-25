import axios from "axios";


export const getDetailsRequest = async (orderId) =>
  await axios.get(`/DetailOrder/${orderId}`);

export const createDetailRequest = async (Detail) =>
  await axios.post(`/Detail`, Detail);

export const deleteDetailRequest = async (id) =>
  await axios.delete(`/Detail/${id}`);

export const getDetailRequest = async (id) =>
  await axios.get(`/Detail/${id}`);

export const updateDetailRequest = async (id, newFields) =>
  await axios.put(`/Detail/${id}`, newFields);

