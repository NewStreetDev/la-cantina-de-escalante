import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./Cartltem";
import styled from "styled-components";
import { useProduct } from "../context/ProductProvider";
import { useOrder } from "../context/OrderProvider";
import { useDetail } from "../context/DetailProvider";
import { Toaster, toast } from "react-hot-toast";
// import storeItems from "../data/items.json"
// import jsPDF from "jspdf"
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

export default function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems, removeAll } = useShoppingCart();
  const { products } = useProduct();
  const { createDetail } = useDetail();
  const { createOrder, deleteOrder } = useOrder();
  const [table, setTableNumber] = useState(0);

  // function generatePDF(){
  //   let doc = new jsPDF('p', 'pt');

  //   doc.text(20, 20, 'This is the first title.');
  //   doc.text(20, 60, 'This is the second title.');
  //   doc.text(20, 100, 'This is the thrid title.');

  //   doc.save('demo.pdf')
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle Submit");
    // let doc = new jsPDF("p", "pt")
    // doc.text("Factura", 20, 20)
    // let indiceY = 60
    // let total = 0
    // cartItems.forEach(item => {
    //   const itemProduct = storeItems.find(i => i.id === item.id)
    //   const nameproduct = itemProduct?.name
    //   const priceProduct = itemProduct?.price
    //   doc.text(`${nameproduct}`, 20, indiceY)
    //   doc.text(`x${item.quantity}`, 200, indiceY)
    //   doc.text(`${formatCurrency(priceProduct || 0)}`, 400, indiceY)
    //   indiceY = indiceY + 40
    //   total = total + (priceProduct || 0) * item.quantity
    // })

    // doc.text(`Total: ${formatCurrency(total || 0)}`, 350, indiceY)

    // doc.save("Factura.pdf")
  };

  const GetCurrentDate = async () => {
    const current = new Date();
    const date = `${current.getFullYear()}-${
      current.getMonth() + 1
    }-${current.getDate()}`;
    return date;
  };

  const MakeOrder = async () => {
    const date = await GetCurrentDate();
    const response = await createOrder({ TableNumber: table, Date: date });

    if (response) {
      let state = true;
      for (let i = 0; i < cartItems.length && state; i++) {
        let idItem = cartItems[i].id
        let item = products.find((i) => i.ProductID === idItem);
        let result = await createDetail({
          ProductID: item.ProductID,
          Price: item.Price,
          OrderID: response.id,
          Quantity: cartItems[i].quantity,
        });
        if (!result){
          state = false;
        }
      }
      if (!state){
        await deleteOrder(response.id)
        toast.error("Pedido no realizado", {
          position: "bottom-center",
          autoClose: 3000,
        });
      }else{
        toast.success("Pedido realizado", {
          position: "bottom-center",
          autoClose: 3000,
        });
        removeAll()
      }
    } else {
      toast.error("Pedido no realizado", {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
  };

  const handleChange = (event) => {
    setTableNumber(parseInt(event.target.value));
  };

  return (
    <ContentCartCanvas show={isOpen}>
      <div className="TitleCart">
        <h2>Pedido</h2>
        <button type="button" onClick={closeCart}>
          <MdOutlineClose />
        </button>
      </div>
      <section className="details">
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="pagoTotal">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find((i) => i.ProductID === cartItem.id);
                return total + (item?.Price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>

        <div className="selectTable">
          <label>Elija el número de mesa</label>
          <select name="tableNumber" onChange={handleChange}>
            <option value="0">Elija una opción</option>
            <option value="1">Mesa 1</option>
            <option value="2">Mesa 2</option>
            <option value="3">Mesa 3</option>
            <option value="4">Mesa 4</option>
            <option value="5">Mesa 5</option>
            <option value="6">Mesa 6</option>
          </select>
        </div>

        <button type="button" className="MakeOrder" onClick={MakeOrder} disabled={cartItems.length === 0 || table === 0}>
          Realizar Orden
        </button>
      </section>
      <Toaster />
    </ContentCartCanvas>
  );
}

const ContentCartCanvas = styled.div`
  position: fixed;
  top: 0px;
  right: ${({ show }) => (show ? "0px" : "100%")};
  width: 300px;
  height: 100vh;
  background-color: #1a1517;
  z-index: 90;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  font-family: InterRegular;

  .TitleCart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    h2 {
      font-size: 22px;
    }
    button {
      background: none;
      border: none;
      font-size: 20px;
      color: #eee;
      cursor: pointer;
    }
  }

  .details {
    color: #fff;
  }
  .pagoTotal {
    margin-top: 20px;
    font-weight: 500;
    font-size: 22px;
    text-align: right;
  }

  .selectTable {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    label {
      font-size: 16px;
      color: #eee;
    }
    select {
      margin-top: 10px;
      width: 100%;
      padding: 0.65rem 0.5rem;
      font-size: 1rem;
      color: #fff;
      border: 2px solid #acacac;
      border-radius: 10px;
      outline: none;
      background: #333;
      option {
        border: none;
        padding: 10px 0;
      }
    }
    select:focus {
      border-color: #4299e1;
    }
    select::placeholder {
      color: #a0aec0;
    }
  }

  .MakeOrder {
    padding: 10px 20px;
    font-size: 15px;
    color: #fff;
    background: #1fdc00;
    border: none;
    border-radius: 5px;
    margin-top: 50px;
  }
  .MakeOrder:hover {
    opacity: 0.9;
  }
  .MakeOrder:disabled {
    opacity: 0.6;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
