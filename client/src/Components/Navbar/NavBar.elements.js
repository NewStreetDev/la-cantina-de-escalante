import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerNav = styled.div`
  width: 100%;
  height: 80px;
  background-color: #1A1517;
  position: fixed;
  z-index: 100;
  -webkit-box-shadow: 10px 0 10px #00000070;
  box-shadow: 10px 0 10px #00000070;
  font-family: InterRegular;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled(Link)`
  margin-left: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-decoration: none;
  img {
    height: 60px;
  }
  font-family: Freehand;
  color: #fff;
  font-size: 40px;
  @media screen and (max-width: 330px) {
    img {
      height: 50px;
    }
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 960px) {
    background-color: #000000b0;
    backdrop-filter: blur(5px);
    position: absolute;
    top: 80px;
    left: ${({ open }) => (open ? "0" : "-100%")}; 
    width: 100%;
    height: 92vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    box-shadow: inset 0px -15px 10px -10px #00000060;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  div {
    position: relative;
  }
  &.active div{
      color: #FFC457;
    
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    div:before {
      display: none;
    }
    div {
      padding: 0 10px;
      border-radius: 20px;
    }
    &.active div {
      color: #FFC457;
    }
  }
`;

export const MenuItemLink = styled(Link)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: 0.5s all ease;
  -o-transition: 0.5s all ease;
  transition: 0.5s all ease;
  &:hover {
    color: #FFC457;
    -webkit-transition: 0.5s all ease;
    -o-transition: 0.5s all ease;
    transition: 0.5s all ease;
  }
  div {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    svg{
      display: none;
      width: 25px;
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    color: #eee;
    font-weight: 500;
    div {
      width: 30%;
      -webkit-box-pack: left;
      -ms-flex-pack: left;
      justify-content: left;
      svg{
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #ffffff;
      margin-right: 0.5rem;
    }
  }
`;

export const Languages = styled.div`
  height: 100%;
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;  
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    width: 35px;
    margin-left: 10px;
  }
  @media screen and (max-width: 960px) {
    height: 40px;
    margin-top: 30px;
  }
`;