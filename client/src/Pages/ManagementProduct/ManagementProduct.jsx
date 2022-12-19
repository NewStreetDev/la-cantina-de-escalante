import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useProduct } from "../../context/ProductProvider";

function ManagementProduct() {
  const { products, loadProduct } = useProduct();
  const [search, setSearch] = useState("");
  useEffect(() => {
    loadProduct();
  }, []);

  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  const results = !search
    ? products
    : products.filter((dato) =>
        dato.Name.toLowerCase().includes(search.toLocaleLowerCase())
      );
  // SELECT `ProductID`, `Name`, `Price`, `Description`, `CategoryID`, `StateID`
  return (
    <ContainerPage>
      <ContainerFilters>
      <h1 className="titleSection">Productos del Menú</h1>
          <input value={search} onChange={searcher} type="text" placeholder='🔍 Search' />
      </ContainerFilters>
      <ContainerProducts>
        {results.map((product) => {
          return (
            <Product key={product.ProductID}>
              <div className="titleProduct">{product.Name}</div>
              <div className="descriptionProduct">{product.Description}</div>
              <div className="price">{product.Price}</div>
              <div className="CategoryID">Here Category Product</div>
              <div className="options">
                <button onClick={() => deleteTask(product.ProductID)}>
                  Delete
                </button>
                <button onClick={() => navigate(`/edit/${product.ProductID}`)}>
                  Edit
                </button>
              </div>
            </Product>
          );
        })}
      </ContainerProducts>
    </ContainerPage>
  );
}

export default ManagementProduct;

const ContainerPage = styled.article`
  min-height: 100vh;
  padding: 80px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1{
    color: #000;
    margin-bottom: 30px;
  }
`;

const ContainerProducts = styled.section`
  padding: 20px;
  background: #fff;
  width: 800px;
  border-radius: 10px;
  box-shadow: 0 0 10px #00000010;
  margin-top: 30px;
`;

const Product = styled.section``;

const ContainerFilters = styled.section`
  background: #fff;
  width: 800px;
  border-radius: 10px;
  padding: 20px;
  input{
    width: 250px;
    padding: 0.65rem 0.5rem;
    font-size: 1rem;
    color: rgb(0, 0, 0);
    border: 2px solid #acacac;
    border-radius: 10px;
    outline: none;
    &:focus {
      border-color: #4299e1;
    }
    &.input-error {
      border-color: #fc8181;
    }
  }
`;
