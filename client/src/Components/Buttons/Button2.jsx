import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function button2({ to, value }) {
  return (
    <LinkButton to={to}>
      <span>{value}</span>
    </LinkButton>
  );
}

const LinkButton = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  border: 2px solid #65ACFF;
  box-shadow: 0 0 15px #65ACFF, inset 0 0 10px #65ACFF;
  margin: 40px;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 2px;
  color: #fff;
  -webkit-box-reflect: below 0px linear-gradient(transparent, #0002);
  transition: 0.5s;
  &:hover {
    color: #000;
    font-weight: 800;
  }
  &:before {
    content: "";
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background: #65ACFF;
    box-shadow: 5px -8px 0 #65ACFF, 5px 8px 0 #65ACFF;
    transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 1s, 0.5s, 0s, 0s;
  }
  &:hover:before {
    width: 60%;
    height: 100%;
    left: -2px;
    box-shadow: 5px 0 0 #65ACFF, 5px 0 0 #65ACFF;
    transition-delay: 0s, 0.5s, 1s, 1s;
  }
  &:after {
    content: "";
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background: #65ACFF;
    box-shadow: -5px -8px 0 #65ACFF, -5px 8px 0 #65ACFF;
    transition: width 0.5s, left 0.5s, height 0.5s, box-shadow 0.5s;
    transition-delay: 1s, 0.5s, 0s, 0s;
  }
  &:hover:after {
    width: 60%;
    height: 100%;
    right: -2px;
    box-shadow: -5px 0 0 #65ACFF, -5px 0 0 #65ACFF;
    transition-delay: 0s, 0.5s, 1s, 1s;
  }

  span {
    position: relative;
    z-index: 10;
  }
`;
