import React from "react";
import { FaHome } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { MdDeliveryDining, MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavbarAdmin() {
  return (
    <ContentNavBar>
      <Link to="/managementProduct">
        <FaHome />
        Home
      </Link>
      <Link to="/to-prepare">
        <GiForkKnifeSpoon />
        Prepare
      </Link>
      <Link to="/to-deliver">
        <MdDeliveryDining />
        Deliver
      </Link>
      <Link to="/to-Pay">
        <MdOutlinePayment />
        Pay
      </Link>
      <Link to="/reports">
        <TbReportSearch />
        Reports
      </Link>
    </ContentNavBar>
  );
}

export default NavbarAdmin;

const ContentNavBar = styled.article`
  width: 70px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  z-index: 100;
  -webkit-box-shadow: 5px -5px 10px #00000010;
  box-shadow: 5px -5px 10px #00000010;
  font-family: InterRegular;
  font-family: InterRegular;
    padding-top: 15px;
  a{
    text-decoration: none;
    color: #003366;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    margin-bottom: 20px;
    transition: color 0.3s;
    svg{
        font-size: 25px;
    }
  }
  a:hover{
    color: #0066cc;
  }

  @media screen and (max-width: 780px){
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0px;
  }
  @media screen and (max-width: 360px){
    a{
        font-size: 12px;
    }
  }
`;
