import { useShoppingCart } from "../context/ShoppingCartContext";
// import storeItems from "../data/items.json"
import { useProduct } from "../context/ProductProvider";
import { formatCurrency } from "../utilities/formatCurrency";
import styled from "styled-components";

export function CartItem({ id, quantity }) {
  const { products } = useProduct();
  const { removeFromCart } = useShoppingCart();
  const item = products.find((i) => i.ProductID === id);

  if (item == null) return null;

  return (
    <Article>
      <div className="productDetails">
        <div className="nameProduct">
          {item.Name}{" "}
          {/* {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )} */}
        </div>
        <div className="priceQuantity" >
          <span>{formatCurrency(item.Price)}</span>
          <span className="text-muted" >
              x{quantity}
          </span>
        </div>
      </div>
      <div> {formatCurrency(item.Price * quantity)}</div>
      <ButtonCancel onClick={() => removeFromCart(item.ProductID)}>
        &times;
      </ButtonCancel>
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  align-items: top;
  margin-top: 20px;
  justify-content: space-between;
  color: #fff;
  .productDetails{
    width: 100%;
    
    .nameProduct{
      font-size: 17px;
    }
    .priceQuantity{
      font-size: .75rem;
      color: #FFAF37;
      .text-muted{
        font-size: .65rem;
        color: #fff;
        margin-left: 10px;
      }
    }
  }
`;

const ButtonCancel = styled.button`
  font-size: 15px;
  color: #ff4040;
  border: none;
  outline: none;
  background: none;
  border: 1px solid #ff4040;
  display: flex;
  height: 20px; 
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
`;
