import React, { useEffect } from "react";
import styled from "styled-components";
import { useOrder } from "../../context/OrderProvider";
import ModalVerification from "../../Components/Modal/ModalVerificacion";
import { Toaster, toast } from "react-hot-toast";
import CabinetCooking from "../../Components/SVG/cabinet-cooking"
import { formatCurrency } from "../../Utilities/formatCurrency";

function ToPrepare() {
  const { OrdersPrepare, getOrdersPrepare, updateOrder } = useOrder([]);

  useEffect(() => {
    getOrdersPrepare();
  }, []);

  const handleClick = async (item) => {
    const response = await updateOrder(item, { StateID: "4" });
    if (response) {
      toast.success("Quitado exitosamente", {
        position: "bottom-center",
        autoClose: 3000,
      });
    } else {
      toast.error("Error al Quitar", {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
    getOrdersPrepare();
  };

  // console.log(OrdersPrepare)

  return (
    <ContentPage>
      <div className="titlePage">
        <CabinetCooking/>
      <h1 className="titleSection">Para Preparar</h1>
      </div>
      
      <ContentOrders>
        {OrdersPrepare.length === 0 ? (
          <p>No hay Ordenes pendientes</p>
        ) : (
          <table>
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Opcion</th>
              </tr>
              {OrdersPrepare.slice(0)
                .reverse()
                .map((order) => {
                  return (
                    <tr key={order.OrderID}>
                      <td className="name">{order.Name}</td>
                      <td className="descripcion">{order.Description}</td>
                      <td className="price">{formatCurrency(order.Price)}</td>
                      <td className="category">{order.CategoryID}</td>
                      <td className="options">
                        <ModalVerification
                          handleClickFunction={handleClick}
                          item={order.OrderID}
                          TitleModal={"Se quitará la orden de la lista"}
                          SecondaryTitle={"¿Estás Seguro?"}
                          TextButton={"Quitar"}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </ContentOrders>
      <Toaster />
    </ContentPage>
  );
}

export default ToPrepare;

const ContentPage = styled.article`
  padding: 60px 0;
  min-height: 100vh;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  .titlePage{
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    svg{
      height: 150px;
      width: auto;
    }
    h1{
      color: #222;
      font-size: 16px;
      margin-top: -20px;
    }
  }
  
`;

const ContentOrders = styled.section`
  border-radius: 10px;
  padding: 20px 10px;
  background: #fff;
  box-shadow: 0 0 10px #00000020;
  overflow-y: hidden;
  overflow-x: auto;
  width: 700px;
  min-height: 167px;

  p {
    width: 100%;
    text-align: center;
  }

  table {
    background: #fff;
    border-radius: 5px;
    border-collapse: collapse;
    display: flex;
    justify-content: center;
    font-size: 16px;
    padding: 15px;
    // width: 960px;
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
  .name {
    width: 140px;
  }
  .descripcion {
    width: 200px;
  }
  .price {
    width: 100px;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    justify-content: left;
    table {
      width: 660px;
    }
    p {
      text-align: left;
    }
  }
`;
