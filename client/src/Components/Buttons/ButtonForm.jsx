import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


function ButtonForm({ url, value, bgColor, radius, fontsize, Padding }) {
  return (
    <ContainerButton to={url} >
      <button className={`${bgColor} ${radius} ${fontsize} ${Padding}`}>{value}</button>
    </ContainerButton>
  );
}

export default ButtonForm;

const ContainerButton = styled(Link)`
    text-decoration: none;
    button{
        border: none;
        border-radius: 50px;
        padding: 5px 10px;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        transition: opacity 0.2s;
    }
    button:hover{
      opacity: 0.8;
    }
    .green{
        background: #198754;
    }
    .red{
        background: #dc3545;
    }
    .blue{
        background: #0d6efd;
    }
    .yellow{
        background: #ffc107;
        color: #000;
    }
    .gray{
        background: #6c757d;
    }
    button.radius-5{
      border-radius: 5px;
    }
    .fs-18{
        font-size: 18px;
    }
    .fs-16{
        font-size: 16px;
    }
    .fs-20{
        font-size: 20px;
    }
    .pd-normal{
        padding: 10px 20px;
    }
`;