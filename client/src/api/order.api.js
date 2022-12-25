import axios from "axios";
import {DOMINIO} from "../../../server/config.js"


export const getOrderTablesRequest = async () =>
  await axios.get(`${DOMINIO}/OrderTablePlan`);

export const createOrderTableRequest = async (OrderTable) =>
  await axios.post("${DOMINIO}/OrderTable", OrderTable);

export const deleteOrderTableRequest = async (id) =>
  await axios.delete(`${DOMINIO}/OrderTable/${id}`);

export const getOrderTableRequest = async (id) =>
  await axios.get(`${DOMINIO}/OrderTable/${id}`);

export const getOrderTablePrepareRequest = async () =>
  await axios.get(`${DOMINIO}/OrderTablePrepare`);

export const getOrderTableDeliverRequest = async () =>
  await axios.get(`${DOMINIO}/OrderTableDeliver`);

export const getOrderTablePayRequest = async () =>
  await axios.get(`${DOMINIO}/OrderTablePay`);

export const updateOrderTableRequest = async (id, newFields) =>
  await axios.put(`${DOMINIO}/OrderTable/${id}`, newFields);

export const getOrderTableReports = async (initialDate, finalDate) => 
  await axios.get(`${DOMINIO}/OrderTable/${initialDate}/${finalDate}`)

