import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function button2({ to, value }) {
  return (
    <LinkButton to={to}>
      <button>
        <span>{value}</span>
      </button>
    </LinkButton>
  );
}

const LinkButton = styled(Link)`
  button {
    color: #222;
    border-radius: 5px;
    font-family: Inter-Semibold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;

    background: #FFC457;
    width: 170px;
    height: 50px;
    line-height: 42px;
    padding: 0;
    border: none;

    span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      font-size: 17px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &:before,
    &:after {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      background: #FFC457;
      transition: all 0.3s ease;
    }
    &:before {
      height: 0%;
      width: 2px;
    }
    &:after {
      width: 0%;
      height: 2px;
    }
    &:hover {
      background: transparent;
      box-shadow: none;
    }
    &:hover:before {
      height: 100%;
    }
    &:hover:after {
      width: 100%;
    }
    span:hover {
      color: #FFC457;
    }
    span:before,
    span:after {
      position: absolute;
      content: "";
      left: 0;
      bottom: 0;
      background: #FFC457;
      transition: all 0.3s ease;
    }
    span:before {
      width: 2px;
      height: 0%;
    }
    span:after {
      width: 0%;
      height: 2px;
    }
    span:hover:before {
      height: 100%;
    }
    span:hover:after {
      width: 100%;
    }
  }
`;
