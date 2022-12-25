import axios from "axios";
import {DOMINIO} from "../../../server/config.js"


export const getDetailsRequest = async (orderId) =>
  await axios.get(`${DOMINIO}/DetailOrder/${orderId}`);

export const createDetailRequest = async (Detail) =>
  await axios.post("${DOMINIO}/Detail", Detail);

export const deleteDetailRequest = async (id) =>
  await axios.delete(`${DOMINIO}/Detail/${id}`);

export const getDetailRequest = async (id) =>
  await axios.get(`${DOMINIO}/Detail/${id}`);

export const updateDetailRequest = async (id, newFields) =>
  await axios.put(`${DOMINIO}/Detail/${id}`, newFields);

