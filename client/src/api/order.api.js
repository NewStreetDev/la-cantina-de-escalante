import axios from "axios";

export const getOrderTablesRequest = async () =>
  await axios.get(`http://localhost:4000/OrderTablePlan`);

export const createOrderTableRequest = async (OrderTable) =>
  await axios.post("http://localhost:4000/OrderTable", OrderTable);

export const deleteOrderTableRequest = async (id) =>
  await axios.delete(`http://localhost:4000/OrderTable/${id}`);

export const getOrderTableRequest = async (id) =>
  await axios.get(`http://localhost:4000/OrderTable/${id}`);

export const getOrderTablePrepareRequest = async () =>
  await axios.get(`http://localhost:4000/OrderTablePrepare`);

export const getOrderTableDeliverRequest = async () =>
  await axios.get(`http://localhost:4000/OrderTableDeliver`);

export const updateOrderTableRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/OrderTable/${id}`, newFields);

