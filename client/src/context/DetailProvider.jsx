import { useContext, useState } from "react";
import {
  getDetailsRequest,
  getDetailRequest,
  createDetailRequest,
  deleteDetailRequest,
  updateDetailRequest
} from "../api/detail.api";

import { DetailContext } from "./DetailContext";

export const useDetail = () => {
  const context = useContext(DetailContext);
  if (context === undefined) {
    throw new Error("useDetail must be used within a DetailContextProvider");
  }
  return context;
};

export const DetailContextProvider = ({ children }) => {
  const [Details, setDetails] = useState([]);

  async function loadDetails(orderId) {
    const response = await getDetailsRequest(orderId);
    setDetails(response.data);
  }

  const deleteDetail = async (id) => {
    try {
      const response = await deleteDetailRequest(id);
      setDetails(Details.filter((detail) => detail.DetailID !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createDetail = async (Detail) => {
    try {
      await createDetailRequest(Detail);
      // setTasks([...tasks, response.data]);
      return true
    } catch (error) {
      console.error(error);
      return false
    }
  };

  const getDetail = async (id) => {
    try {
      const response = await getDetailRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateDetail = async (id, newFields) => {
    try {
      const response = await updateDetailRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <DetailContext.Provider
      value={{
        Details,
        loadDetails,
        deleteDetail,
        updateDetail,
        getDetail,
        createDetail,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};
ll