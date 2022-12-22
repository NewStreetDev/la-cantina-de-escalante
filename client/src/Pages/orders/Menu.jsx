import React, { useEffect } from "react";
import styled from "styled-components";
import { useProduct } from "../../context/ProductProvider";
import {StoreItem} from "../../Components/StoreItem"

function MenuOrder() {
  const { products, loadProduct } = useProduct();

  useEffect(() => {
    loadProduct()
  }, []);

  return <ContentPage>
    {products.map((product, index) => {
      return (
        <span key={index}>
          <StoreItem {...product}/>
        </span>
      )
    })}
  </ContentPage>;
}

export default MenuOrder;

const ContentPage = styled.article`
  padding: 80px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
