import React, { useState } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";
import CustomInput from "../../components/CustomInput";
import { ReportsScheme } from "../../schemas";
import {useOrder} from "../../context/OrderProvider"
import { formatCurrency} from "../../Utilities/formatCurrency"

function Reportes() {
  const [Dates, setDates] = useState({ initialDate: "", finalDate: "" });
  const {Reports, getOrdersReports} = useOrder()
  return (
    <ContentPage>
      <ContentFilter>
        <Formik
          initialValues={Dates}
          validationSchema={ReportsScheme}
          onSubmit={async (values) => {
            await getOrdersReports(values.initialDate, values.finalDate)
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <CustomInput
                label="Fecha Inicial"
                name="initialDate"
                type="date"
                placeholder=""
              />
              <CustomInput
                label="Fecha Final"
                name="finalDate"
                type="date"
                placeholder=""
              />
              <button className="button" type="submit" disabled={isSubmitting}>
                Generar Reporte
              </button>
            </Form>
          )}
        </Formik>
      </ContentFilter>
      <ContentReport>
        {Reports.length === 0 ? <p>No hay datos</p> :
        <>
          <table>
            <tbody>
              <tr>
                <th>Cantidad</th>
                <th>Categoría</th>
                <th>Dinero Total</th>
                <th>Fecha</th>
              </tr>
              {Reports[0].map((order, index) => {
                return <tr key={index}>
                  <td>{order.Cant}</td>
                  <td className="category">{order.CategoryProduct}</td>
                  <td className="fullMoney">{formatCurrency(order.FullMoney)}</td>
                  <td>{order.Date.substring(0, 10)}</td>
                </tr>
              })}
            </tbody>
          </table>
          <table className="secondTable">
            <tbody>
              <tr>
                <th>Dinero Total</th>
                <th>Cantidad de productos</th>
              </tr>
              {Reports[1].map((order, index) => {
                return <tr key={index}>
                  <td>{formatCurrency(order.FullMoney)}</td>
                  <td>{order.Cant}</td>
                </tr>
              })}
            </tbody>
          </table>
        </>
        }
      </ContentReport>
    </ContentPage>
  );
}

export default Reportes;

const ContentPage = styled.article`
  min-height: 100vh;
  padding: 40px 0 60px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentFilter = styled.section`
  .form {
    justify-content: left;
    align-items: flex-start;
  }
  .form .contentInput {
    max-width: 240px;
    min-width: 240px;
  }
  .form .button {
    margin-left: 10px;
    margin-right: 10px;
    width: 170px;
    height: 45px;
  }
`;

const ContentReport = styled.section`
  width: 700px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #00000010;
  background: #fff;
  margin-top: 30px;
  overflow-y: hidden;
  overflow-x: auto;
  table {
    background: #fff;
    border-radius: 5px;
    border-collapse: collapse;
    display: flex;
    justify-content: center;
    font-size: 16px;
    padding: 15px;
    width: 570px;
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
  .secondTable{
    margin-top: 30px;
    width: 360px;
  }
  .category{
    width: 150px;
  }
  .fullMoney{
    width: 150px;
  }
  @media screen and (max-width: 700px){
    width: 100%;
    justify-content: left;
    padding: 10px 5px;
  }
`;
