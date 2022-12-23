import { useContext, useState } from "react";
import {
  getOrderTableRequest,
  getOrderTablesRequest,
  getOrderTableDeliverRequest,
  getOrderTablePrepareRequest,
  getOrderTablePayRequest,
  createOrderTableRequest,
  updateOrderTableRequest,
  deleteOrderTableRequest,
  getOrderTableReports,
} from "../api/order.api";

// import { OrderContext } from "./OrderContext";
import { createContext } from "react";

export const OrderContext = createContext();

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within a OrderContextProvider");
  }
  return context;
};

export const OrderContextProvider = ({ children }) => {
  const [Orders, setOrders] = useState([]);
  const [OrdersPrepare, setOrdersPrepare] = useState([]);
  const [OrdersDeliver, setOrdersDeliver] = useState([]);
  const [OrdersPay, setOrdersPay] = useState([]);
  const [Reports, setReports] = useState([]);

  async function loadOrders() {
    const response = await getOrderTablesRequest();
    setOrders(response.data);
  }

  async function getOrdersDeliver() {
    const response = await getOrderTableDeliverRequest();
    const Respuesta = []
    for (let i = 0; i < response.data.length; i++){
      
      if (i !== 0) {
        if (response.data[i].OrderID === Respuesta[Respuesta.length - 1][0].OrderID){
          Respuesta[Respuesta.length - 1].push(response.data[i])
        }else{
          Respuesta.push([response.data[i]])
        }
      }else{
        Respuesta.push([response.data[i]])
      }
    }
    setOrdersDeliver(Respuesta);
  }

  async function getOrdersPrepare() {
    const response = await getOrderTablePrepareRequest();
    const Respuesta = []
    for (let i = 0; i < response.data.length; i++){
      
      if (i !== 0) {
        if (response.data[i].OrderID === Respuesta[Respuesta.length - 1][0].OrderID){
          Respuesta[Respuesta.length - 1].push(response.data[i])
        }else{
          Respuesta.push([response.data[i]])
        }
      }else{
        Respuesta.push([response.data[i]])
      }
    }
    setOrdersPrepare(Respuesta);
  }

  async function getOrdersPay() {
    const response = await getOrderTablePayRequest();
    const Respuesta = []
    for (let i = 0; i < response.data.length; i++){
      
      if (i !== 0) {
        if (response.data[i].OrderID === Respuesta[Respuesta.length - 1][0].OrderID){
          Respuesta[Respuesta.length - 1].push(response.data[i])
        }else{
          Respuesta.push([response.data[i]])
        }
      }else{
        Respuesta.push([response.data[i]])
      }
    }
    setOrdersPay(Respuesta);
  }

  async function getOrdersReports(initialDate, finalDate) {
    const response = await getOrderTableReports(initialDate, finalDate);
    setReports(response.data);
  }

  const deleteOrder = async (id) => {
    try {
      const response = await deleteOrderTableRequest(id);
      setOrders(Orders.filter((order) => order.OrderID !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createOrder = async (order) => {
    try {
      const response = await createOrderTableRequest(order);
      // setTasks([...tasks, response.data]);
      return response.data
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const getOrder = async (id) => {
    try {
      const response = await getOrderTableRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateOrder = async (id, newFields) => {
    try {
      const response = await updateOrderTableRequest(id, newFields);
      console.log(response);
      return true;
    } catch (error) {
      console.error(error);
      return false
    }
  };

  return (
    <OrderContext.Provider
      value={{
        Orders,
        Reports,
        OrdersPrepare,
        OrdersDeliver,
        OrdersPay,
        loadOrders,
        createOrder,
        deleteOrder,
        updateOrder,
        getOrder,
        getOrdersDeliver,
        getOrdersPrepare,
        getOrdersPay,
        getOrdersReports,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
