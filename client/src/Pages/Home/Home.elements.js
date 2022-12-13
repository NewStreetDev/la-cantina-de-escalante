import styled from "styled-components";
import canteen from "../../Images/Canteen.jpg";

export const ContainerHome = styled.div`
  position: relative;
`;

export const FrontPage = styled.section`
  background: url(${canteen});
  background-position: right;
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
    font-family: Freehand;
    color: #fff;
    font-size: 80px;
    font-weight: 400;
    line-height: 80px;
  }
  h2 {
    color: #fff;
    font-size: 35px;
    font-family: Inter-Medium;
    font-weight: 400;
    margin-bottom: 30px;
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
  padding: 80px 0;
  .content{
    background: #111;
    padding: 40px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    max-width: 600px;
    border-radius: 20px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    h2{
      margin-bottom: 20px;
    }
    p{
      font-size: 20px;
      line-height: 25px;
    }
  }
  @media screen and (max-width: 900px) {
    .content{
      width: 85%;
      left: 0%;
      transform: translateX(0%);
      border-radius: 0 20px 20px 0;
    }
  }
`;

export const OurMenu = styled.section`
  padding: 20px 0px 80px 0;
  h2 {
    margin-bottom: 50px;
  }
  .btn-menu-home {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
`;

export const ThirdSection = styled.section`
  padding: 80px 0;
  .contentThirdSection {
    background: #111;
    position: relative;
    left: 20%;
    width: 80%;
    padding: 40px 30px;
    border-radius: 20px 0 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    div,
    picture {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    picture img {
      width: 300px;
      height: 300px;
      border-radius: 10px;
      object-fit: cover;
      object-position: center;
    }
    div {
      padding-right: 20px;
    }
    p {
      font-size: 20px;
      line-height: 25px;
    }
  }
  @media screen and (max-width: 880px) {
    .contentThirdSection {
      width: 90%;
      left: 10%;
    }
  }
  @media screen and (max-width: 650px) {
    .contentThirdSection {
      width: 95%;
      left: 5%;
      flex-direction: column;
      div,
      picture {
        width: 100%;
      }
      div {
        margin-bottom: 30px;
        padding-right: 0;
        padding: 10px;
      }

    }
  }
`;
