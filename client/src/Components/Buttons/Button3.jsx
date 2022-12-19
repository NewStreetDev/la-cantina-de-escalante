import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function button3({ to, value }) {
  return (
    <LinkButton to={to}>
      <button>{value}</button>
    </LinkButton>
  );
}

const LinkButton = styled(Link)`
  button {
    color: #fff;
    font-family: Inter-Semibold;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
    position: relative;
    display: inline-block;
    outline: none;
    width: 170px;
    height: 50px;
    line-height: 42px;
    padding: 0;
    background: transparent;
    border: 2px solid #eee;

    font-size: 17px;

    &:hover {
      background: #eee;
      color: #222;
    }
  }
`;
