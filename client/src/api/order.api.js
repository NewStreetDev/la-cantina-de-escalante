import axios from "axios";


export const getOrderTablesRequest = async () =>
  await axios.get(`/OrderTablePlan`);

export const createOrderTableRequest = async (OrderTable) =>
  await axios.post(`/OrderTable`, OrderTable);

export const deleteOrderTableRequest = async (id) =>
  await axios.delete(`/OrderTable/${id}`);

export const getOrderTableRequest = async (id) =>
  await axios.get(`/OrderTable/${id}`);

export const getOrderTablePrepareRequest = async () =>
  await axios.get(`/OrderTablePrepare`);

export const getOrderTableDeliverRequest = async () =>
  await axios.get(`/OrderTableDeliver`);

export const getOrderTablePayRequest = async () =>
  await axios.get(`/OrderTablePay`);

export const updateOrderTableRequest = async (id, newFields) =>
  await axios.put(`/OrderTable/${id}`, newFields);

export const getOrderTableReports = async (initialDate, finalDate) => 
  await axios.get(`/OrderTable/${initialDate}/${finalDate}`)

