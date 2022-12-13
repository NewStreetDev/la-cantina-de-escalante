import { useContext, useState } from "react";
import {
  getOrderTableRequest,
  getOrderTablesRequest,
  getOrderTableDeliverRequest,
  getOrderTablePrepareRequest,
  createOrderTableRequest,
  updateOrderTableRequest,
  deleteOrderTableRequest,
} from "../api/order.api";

import { OrderContext } from "./OrderContext";

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

  async function loadOrders() {
    const response = await getOrderTablesRequest();
    setOrders(response.data);
  }

  async function getOrdersDeliver() {
    const response = await getOrderTableDeliverRequest();
    setOrdersDeliver(response.data);
  }

  async function getOrdersPrepare() {
    const response = await getOrderTablePrepareRequest();
    setOrdersPrepare(response.data);
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
      await createOrderTableRequest(order);
      // setTasks([...tasks, response.data]);
      return true;
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        Orders,
        OrdersPrepare,
        OrdersDeliver,
        loadOrders,
        createOrder,
        deleteOrder,
        updateOrder,
        getOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
