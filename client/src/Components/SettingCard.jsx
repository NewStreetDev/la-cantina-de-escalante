import { useState } from "react";
import styled from "styled-components";

export default function SettingCard({ title, paragraph, image, imageAux }) {
  const [displayed, setDisplayed] = useState(false);
  return (
    <ContainerCard
      onMouseEnter={() => setDisplayed(true)}
      onMouseLeave={() => setDisplayed(false)}
    >
      <Image>{displayed ? <img src={imageAux} /> : <img src={image} />}</Image>
      <DetailsCard>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </DetailsCard>
    </ContainerCard>
  );
}

const ContainerCard = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  background: #eeeeeeb0;
  margin: 30px;
  border-radius: 4px;
  box-shadow: 0 0 20px #6bbdff;
  &:before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: #bbbbbba0;
    transition: 0.5s;
    z-index: -1;
  }
  &:after {
    background: #dddddda0;
  }
  &:hover::before {
    transform: rotate(20deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
  &:hover::after {
    transform: rotate(10deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
  &:hover picture {
    bottom: 80px;
  }
  @media screen and (max-width: 350px) {
    margin: 30px 10px;
  }
`;

const Image = styled.picture`
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  background: #222;
  transition: 0.5s;
  z-index: 3;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DetailsCard = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 60px;
  text-align: center;
  z-index: 2;
  h2 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 20px;
    color: #777;
    text-transform: uppercase;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    display: block;
    margin-top: 5px;
  }
`;
