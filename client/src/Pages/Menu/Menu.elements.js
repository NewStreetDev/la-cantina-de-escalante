import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ContainerMenu = styled(motion.div)`
  padding: 50px 0;
  position: relative;
`;

export const SelectSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .Select-Categorie {
    width: 300px;
  }
  @media screen and (max-width: 300px) {
    .Select-Categorie {
      width: 100%;
    }
  }
`;

export const TitleDiv = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  img {
    width: 80px;
    transform: rotate(45deg);
  }
  h1 {
    font-size: 80px;
    font-weight: 600;
    text-align: center;
    line-height: 1;
    color: #fff;
  }
  @media screen and (max-width: 300px) {
    img {
      display: none;
    }
  }
`;

export const BtnContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 10px 30px;
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  background: #222021;
  .filter-btn {
    text-decoration: none;
    margin: 5px;
    border: 2px solid #ffb366;
    font-size: 17px;
    background: none;
    font-weight: 600;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    transition: background 0.4s, color 0.4s;
    &:hover {
      background: #ffb366;
      color: #232323;
    }
  }
  .active {
    background: #ffb366;
      color: #232323;
  }
  @media screen and (max-width: 700px) {
    padding: 0 20px;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #ffb36660;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffb366b0;
  }
`;

export const MenuContentDiv = styled.section`
  margin-top: 20px;
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 40%);
  justify-content: center;
  gap: 20px;
  &.sauces {
    grid-template-columns: repeat(auto-fill, 30%);
    gap: 0px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, 60%);
    &.sauces {
      grid-template-columns: repeat(auto-fill, 45%);
    }
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, 90%);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 95%);
  }
  @media screen and (max-width: 300px) {
    &.sauces {
      grid-template-columns: repeat(auto-fill, 80%);
    }
  }
`;

export const ProductDiv = styled.div`
  width: 100%;
`;

export const HeaderProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffbb55;
  padding: 5px 0;
  border-bottom: 1px dashed #ffbb55;
  h2 {
    font-size: 20px;
    font-weight: 600;
    padding: 0px 10px 0px 0px;
    letter-spacing: 1px;
    // text-transform: uppercase;
  }
  &.sauce {
    border-bottom: none;
    h2 {
      font-size: 17px;
    }
  }
`;

export const PriceProduct = styled.p`
  color: #ffffff;
  font-size: 20px;
`;

export const InformationProduct = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-top: 5px;
  color: #eee;
  // text-transform: uppercase;
  p {
    letter-spacing: 1px;
    text-align: left;
  }
`;

export const TitleCategory = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  margin-top: 30px;
  color: #eee;
  padding: 20px;
  text-transform: uppercase;
  @media screen and (max-width: 400px) {
    font-size: 40px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const SubtitleCategory = styled.h3`
  text-align: center;
  font-size: 25px;
  color: #eee;
  padding: 10px;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: -20px;
  margin-bottom: 10px;
`;

export const NoteCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  div {
    width: 500px;
    padding: 10px;
    p {
      font-size: 17px;
      font-weight: 400;
      margin-top: 5px;
      color: #ddd;
      letter-spacing: 1px;
      text-align: left;
    }
    h4 {
      color: #ffbb55;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
  @media screen and (max-width: 700px) {
    div {
      width: 90%;
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 95%;
    }
  }
`;

export const ContentProduct = styled.div`
  width: 100%;
  padding: 10px;
`;

export const Comments = styled.section`
  margin: 10px 10%;
  width: 80%;
  text-align: center;
  font-size: 17px;
  color: #ccc;
`;

export const Accompaniment = styled.div`
  color: #bbb;
  margin: 15px 0 10px 0+;
  h4 {
    font-size: 18px;
    color: currentColor;
    font-weight: 600;
    // text-transform: uppercase;
  }
  p {
    font-size: 16px;
    line-height: 23px;
    // text-transform: uppercase;
  }
`;

export const SeeProduct = styled.span`
  color: #ffb366;
  font-size: 17px;
  cursor: pointer;
  border-bottom: 1px solid #ffb366;
  transition: color 0.4s, border-bottom 0.4s;
  &:hover {
    color: #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(27, 27, 27, 0.541);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  z-index: 1000;
`;

export const ImageOverlay = styled.img`
  display: block;
  max-width: 90%;
  max-height: 90%;
  margin: 60px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
`;

export const Dismiss = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: #fff;
  z-index: 999;
  cursor: pointer;
`;

export const ContainerImageCategory = styled.div`
  border: 2px solid #FFBB55b0;
  box-shadow: inset 0 0 15px #FFBB55;
  &.noneBorder,
  &.noneBorder div{
    border: none;
    box-shadow: none;
  }
  padding 8px;
  width: 600px;
  margin: 20px auto;
  div{
    padding: 15px;
    border: 2px solid #FFBB55b0;
    img{
      width: 100%;
    }
  }
  @media screen and (max-width: 620px){
    width: 95%;
    padding 5px;
  }

`;

export const ContainerCardCategory = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Card = styled(Link)`
  text-decoration: none;
  color: #fff;
  height: 220px;
  width: 170px;
  border: 2px solid #999;
  border-radius: 20px;
  margin: 7px;
  background: #151515;
  transition: background 0.4s;
  h4 {
    text-align: center;
    margin-top: 8px;
    padding: 0 10px;
  }
  img {
    height: 150px;
    width: 166px;
    object-fit: cover;
    border-radius: 18px 18px 0 0;
  }
  &:hover {
    background: #333;
  }
`;
