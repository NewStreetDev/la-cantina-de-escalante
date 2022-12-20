import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProduct } from "../../context/ProductProvider";
import Button from "../../Components/Buttons/ButtonForm";
import { BsPencilSquare } from "react-icons/bs";
import ModalDelete from "../../Components/Modal/modalDelete";


function ManagementProduct() {
  const { products, loadProduct, deleteProduct } = useProduct();
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    loadProduct();
  }, []);


  const handleClickDelete = async (idProduct) => {
    const response = await deleteProduct(idProduct)
    if (response) {
      toast.success("Se ha Eliminado", {
        position: "bottom-center",
        autoClose: 3000,
      });
    } else {
      toast.error("Error al eliminar", {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
    loadTasks(idPlan)
  }
  
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
        <div>
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="🔍 Search"
        />
        <Button
          url="/CreateProduct"
          value="Nuevo"
          bgColor="blue"
          radius="radius-5"
          fontsize="fs-18"
          Padding="pd-normal"
        />
        </div>
        
      </ContainerFilters>
      <ContainerProducts>
        {results.length !== 0 ? (
          <table>
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>Descripcion Español</th>
                <th>Descripcion English</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Opciones</th>
              </tr>
            
            {results.map((product) => {
              return (
                <tr key={product.ProductID}>
                  <td className="titleProduct">{product.Name}</td>
                  <td className="descriptionProduct">{product.Description}</td>
                  <td className="descriptionProduct">{product.DescriptionEnglish}</td>
                  <td className="price">{product.Price}</td>
                  <td className="CategoryID">{product.CategoryID}</td>
                  <td className="options">
                    <ModalDelete handleClickDelete={handleClickDelete} item={product.ProductID}/>
                    <Button
                      url={`/updateProduct/${product.ProductID}`}
                      value={<BsPencilSquare/>}
                      bgColor="blue" radius="radius-5" />
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        ) : (
          <p className="NotProducts">No hay productos</p>
        )}
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
  h1 {
    color: #000;
    margin-bottom: 30px;
  }
`;

const ContainerProducts = styled.section`
  padding: 20px;
  background: #fff;
  width: 1000px;
  border-radius: 10px;
  overflow-y: hidden;
  overflow-x: auto;
  box-shadow: 0 0 10px #00000010;
  margin-top: 30px;
  .NotProducts {
    width: 100%;
    text-align: center;
    font-size: 17px;
  }
  table {
    background: #fff;
    border-radius: 5px;
    border-collapse: collapse;
    display: flex;
    justify-content: center;
    font-size: 16px;
    padding: 15px;
    width: 960px;
  }

  th {
    border-bottom: 1px solid #999;
    padding: 15px;
  }

  td {
    text-align: center;
    padding: 10px 20px;
  }
  tr:nth-child(even) {
    background-color: #eee;
  }
  tr:hover {
    background: #ecf2fd;
  }
  .options{
    display: flex;
    justify-content: space-between;
    width: 120px;
  }
  @media screen and (max-width: 1000px){
    width: 100%;
    justify-content: left;
  }
`;

const ContainerFilters = styled.section`
  background: #fff;
  width: 800px;
  border-radius: 10px;
  padding: 20px;
  div{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  input {
    width: 250px;
    height: 43px;
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
  @media screen and (max-width: 800px){
    width: 100%;
  }
  @media screen and (max-width: 400px){
    div{
      flex-direction: column;
    }
    a{
      margin-top: 10px;
    }
  }
`;
