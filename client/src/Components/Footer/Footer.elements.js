import styled from "styled-components";

export const Footer = styled.footer`
  background: #000000;
  color: #eee;
  font-family: InterRegular;
`;

export const Information = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  padding-top: 50px;
  padding-bottom: 20px;

  h2 {
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
  }
  p {
    font-size: 17px;
    text-align: left;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
  }

  div {
    width: 250px;
    margin: 20px;
  }

  @media screen and (max-width: 750px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 530px) {
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    div {
      width: 90%;
    }
  }
`;

export const CompanyLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 250px;
    -o-object-fit: cover;
    object-fit: cover;
  }
  @media screen and (max-width: 530px) {
    width: 90%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ScheduleSection = styled.div`
  padding: 0 10px;
  p:nth-child(3),
  p:nth-child(5) {
    margin-bottom: 15px;
  }
`;

export const LocationSection = styled.div`
  padding: 0 10px;
  p:nth-child(2) {
    margin-bottom: 20px;
  }
`;

export const CopyRight = styled.div`
  background: #222021;
  color: #aaa;
  font-weight: 300;
  padding: 25px 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  letter-spacing: 0.5px;
  p {
    text-align: center;
    color: #aaa;
    font-weight: 400;
    a {
      text-decoration: none;
      color: #aaa;
      -webkit-transition: color 0.3s;
      -o-transition: color 0.3s;
      transition: color 0.3s;
    }
    a:hover {
      color: #fff;
    }
  }
`;
