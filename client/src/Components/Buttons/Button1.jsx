import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function button1({ to, value, model }) {
  return (
    <LinkButton to={to} className={model=== "1" ? "model1" : "model2"}>
      {value}
    </LinkButton>
  );
}

const LinkButton = styled(Link)`
  margin-top: 15px;
  background: none;
  text-decoration: none;
  border: 2px solid #8BD5FF;
  box-shadow: 0 0 15px 2px #4DBEFF,
  inset 0 0 15px 2px #4DBEFF;
  color: #8BD5FF;
  font-size: 18px;
  font-weight: 800;
  padding: 12px 25px;
  transition: background 0.4s, box-shadow 0.4s, color 0.4s;
  &:hover{
    background: #4DBEFF;
    box-shadow: 0 0 25px 5px #4DBEFF;
    color: #fff;
  }
`;