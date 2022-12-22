
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./Cartltem"
import styled from "styled-components";
import {useProduct} from "../context/ProductProvider"
// import storeItems from "../data/items.json"
// import jsPDF from "jspdf"
import React from "react"
import { MdOutlineClose } from "react-icons/md";

export default function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart()
  const {products} = useProduct()

  // function generatePDF(){
  //   let doc = new jsPDF('p', 'pt');

  //   doc.text(20, 20, 'This is the first title.');
  //   doc.text(20, 60, 'This is the second title.');
  //   doc.text(20, 100, 'This is the thrid title.');

  //   doc.save('demo.pdf')
  // }
  const handleSubmit = e => {
    e.preventDefault()
    console.log("handle Submit")
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
  }

  return (
    <ContentCartCanvas show={isOpen}>
      <div className="TitleCart">
        <h2>Pedido</h2>
        <button type="button" onClick={closeCart}><MdOutlineClose/></button>
      </div>
      <section className="details">
        <div >
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="pagoTotal">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find(i => i.ProductID === cartItem.id)
                return total + (item?.Price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </div>
        {/* <button
          type="button"
          className="btn btn-success mt-5"
          onClick={handleSubmit}
        >
          Download PDF
        </button> */}
      </section>
    </ContentCartCanvas>
  )
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

  .TitleCart{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    h2{
      font-size: 22px;
    }
    button{
      background: none;
      border: none;
      font-size: 20px;
      color: #eee;
    }
  }

  .details{
    color: #fff;
  }
  .pagoTotal{
    margin-top: 20px;
    font-weight: 500;
    font-size: 22px;
    text-align: right
  }
  @media screen and (max-width: 450px){
    width: 100%;
  }
`;