import styled from "styled-components";
import ImageCar from "../../Images/car-front-page.jpeg";

export const ContainerHome = styled.div`
  position: relative;
`;

export const FrontPage = styled.section`
  background: url(${ImageCar});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: right;
  padding-top: 200px;
  @media screen and (max-width: 760px) {
    padding-top: 150px;
  }
  @media screen and (max-width: 370px) {
    padding-top: 100px;
  }
`;

export const FrontPageInfo = styled.div`
  width: 50%;
  padding: 0 30px;
  h1 {
    font-family: "Cookie";
    color: #e8f5ff;
    text-shadow: 0px 0px 15px #6bbdff;
    font-size: 80px;
    font-weight: 400;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
    h1 {
      text-align: center;
      padding: 0 50px;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 60px;
      padding: 0 30px;
    }
  }
  @media screen and (max-width: 370px) {
    h1 {
      font-size: 50px;
      padding: 0 10px;
    }
  }
`;

export const AboutUsSection = styled.section`
  padding: 70px 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 40px;
    font-weight: 700;
    color: #ffebfe;
    text-shadow: 0 0 20px #ff0cf5;
    margin-bottom: 30px;
    text-align: center;
  }
  p {
    color: #fff;
    font-size: 17px;
    width: 50%;
    text-align: center;
    line-height: 25px;
  }
  .icono {
    width: 130px;
    fill: #ffbdfc;
    filter: drop-shadow(0px 0px 10px #ffbdfc);
    position: absolute;
    top: auto;
  }
  .radio {
    left: 60px;
    transform: rotate(-25deg);
  }
  .bike {
    right: 60px;
    transform: rotate(25deg);
  }
  @media screen and (max-width: 870px){
    p {
      background: #0009;
      padding: 10px;
      border-radius: 10px;
      z-index: 10;
      width: 80%;
      backdrop-filter: blur(10px);
    }
    .radio, .bike {
      display: none;
    }
  }
  @media screen and (max-width: 600px){
    p{
      width: 90%;
    }
    .radio {
      left: 20px;
      top: 35%;
    }
    .bike {
      top: 60%;
      right: 20px;
    }
  }
  @media screen and (max-width: 600px){
    p{
      width: 95%;
    }
    .bike {
      top: 70%;
      right: 20px;
    }
  }
`;

export const ContactUsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 70px 30px;
  background: #151515;
  h2 {
    font-size: 40px;
    font-weight: 700;
    color: #e8f5ff;
    text-shadow: 0 0 20px #6bbdff;
    margin-bottom: 30px;
    text-align: center;
  }
  @media screen and (max-width: 400px){
    h2{
      font-size: 30px;
    }
  }
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardSocialMedia = styled.a`
text-decoration: none;
  cursor: pointer;
  background: #282828;
  border-radius: 12px;
  border-top: 1px solid #ffffff60;
  border-left: 1px solid #ffffff60;
  box-shadow: 4px 4px 10px #000, -2px -2px 10px -4px #fff9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 110px;
  height: 135px;
  margin: 20px;
  transition: transform 0.4s;
  &:hover {
    transform: translateY(-10px);
  }
  span {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: #fff;
      font-size: 30px;
    }
  }
  h4 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 10px;
  }
  &.Youtube {
    span {
      background: #FF3131;
      box-shadow: 0 0 10px #FF3131;
    }
    h4 {
      color: #FF6262;
    }
  }
  &.WhatsAppp {
    span {
      background: #61ff47;
      box-shadow: 0 0 10px #61ff47;
    }
    h4 {
      color: #61ff47;
    }
  }
  &.Instagram {
    span {
      background: #fc58ff;
      box-shadow: 0 0 10px #fc58ff;
    }
    h4 {
      color: #fc58ff;
    }
  }
  &.Facebook {
    span {
      background: #40baff;
      box-shadow: 0 0 10px #40baff;
    }
    h4 {
      color: #40baff;
    }
  }
  &.Phone {
    span {
      background: #ff833e;
      box-shadow: 0 0 10px #ff833e;
      svg {
        font-size: 25px;
      }
    }
    h4 {
      color: #ff833e;
    }
  }
  @media screen and (max-width: 400px){
    margin: 15px;
  }
`;

export const PromotionsSection = styled.section`
  padding: 60px 0;
  .btn-menu-home {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section{
    position: relative;
  }
`;

export const PromotionsTitle = styled.div`
  h2 {
    font-size: 40px;
    font-weight: 700;
    color: #fff3ec;
    text-shadow: 0 0 30px #ff8f28;
    margin-bottom: 50px;
    text-align: center;
  }
  @media screen and (max-width: 300px){
    h2{
      font-size: 30px;
    }
  }
`;

export const SectionCards = styled.section`
  position: relative;
  z-index: 10;
  padding: 80px 0;
`;

export const TitleCards = styled.div`
  h2 {
    font-size: 40px;
    font-weight: 700;
    color: #e8f5ff;
    text-shadow: 0 0 20px #6bbdff;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;