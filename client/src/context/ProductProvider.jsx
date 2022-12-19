import { useContext, useState } from "react";
import {
  getProductsRequest,
  getProductRequest,
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
} from "../api/product.api";

// import { ProductContext } from "./ProductContext";
import { createContext } from "react";

export const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductContextProvider");
  }
  return context;
};

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  async function loadProduct() {
    const response = await getProductsRequest();
    setProducts(response.data);
  }

  const deleteProduct = async (id) => {
    try {
      const response = await deleteProductRequest(id);
      setProducts(products.filter((product) => product.ProductID !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createProduct = async (product) => {
    try {
      await createProductRequest(product);
      // setTasks([...tasks, response.data]);
      return true
    } catch (error) {
      console.error(error);
      return false
    }
  };

  const getProduct = async (id) => {
    try {
      const response = await getProductRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async (id, newFields) => {
    try {
      const response = await updateProductRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <ProductContext.Provider
      value={{
        products,
        loadProduct,
        deleteProduct,
        createProduct,
        getProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
