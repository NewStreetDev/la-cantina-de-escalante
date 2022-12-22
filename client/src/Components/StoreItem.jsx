import styled from "styled-components";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

export function StoreItem({
  Name,
  Price,
  ProductID,
  Description,
  DescriptionEnglish,
}) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(ProductID);

  return (
    <Card>
      <h4>
        <span className="nameproduct">{Name}</span>
      </h4>
      <div className="contentProduct">
        <div className="description">{Description}</div>
        <div className="price">
          <span className="price">{formatCurrency(Price)}</span>
        </div>
      </div>
      <div className="buttons ">
        {quantity === 0 ? (
          <button
            className="w-100"
            onClick={() => increaseCartQuantity(ProductID)}
          >
            + Add To Cart
          </button>
        ) : (
          <div className="contentButtons" >
            <div
              className="buttonsPlusmenor"
            >
              <button onClick={() => decreaseCartQuantity(ProductID)}>-</button>
              <div>
                <span className="fs-3">{quantity} </span> En la Orden
              </div>
              <button onClick={() => increaseCartQuantity(ProductID)}>+</button>
            </div>
            <button
              onClick={() => removeFromCart(ProductID)}
              className="danger"
            >
              Quitar
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}

const Card = styled.article`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  width: 280px;
  padding: 20px;
  margin: 10px;
  background: #303030;
  border-radius: 10px;
  box-shadow: 0 0 10px #ffffff50;
  min-height: 180px;
  h4 {
    display: flex;
    justify-content: between;
    align-items: baseline;
    margin-bottom: 4px;
    border-bottom: 1px solid #f8f8f8;
    .nameproduct {
      color: #fff;
      font-weight: 300;
      margin-bottom: 4px;
      font-size: 18px;
    }
  }
  .contentProduct {
    font-size: 16px;
    color: #eee;
    .price {
      margin-top: 10px;
    }
  }
  div.price{
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: right;
    .price{
      color: #FFAF37;
    }
  }
  .buttons {
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .contentButtons {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    .buttonsPlusmenor {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      div {
        font-size: 14px;
        color: #eee;
      }
    }
  }
  button{
    background: #1FDC00;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 8px 15px;
    border-radius: 6px;
    box-shadow: 2px 2px 10px #00000080;
    font-weight: 600;
  }
  button.danger{
    background: #FF3636;
  }
`;
