import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {BsArrowRightCircle} from "react-icons/bs"

export default function button1({ to, value, model }) {
  return (
    <LinkButton to={to} className={model=== "1" ? "model1" : "model2"}>
      {value} <BsArrowRightCircle/>
    </LinkButton>
  );
}

const LinkButton = styled(Link)`
  margin-top: 15px;
  background: none;
  text-decoration: none;
  border: none;
  background: #FFC457;
  color: #fff;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 800;
  padding: 10px 20px;
  transition: background 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background: #ffb62e;
  }
  svg{
    font-size: 26px;
    margin-left: 10px;
  }
`;