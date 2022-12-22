
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./Cartltem"
// import storeItems from "../data/items.json"
// import jsPDF from "jspdf"
import React from "react"

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart()

  // function generatePDF(){
  //   let doc = new jsPDF('p', 'pt');

  //   doc.text(20, 20, 'This is the first title.');
  //   doc.text(20, 60, 'This is the second title.');
  //   doc.text(20, 100, 'This is the thrid title.');

  //   doc.save('demo.pdf')
  // }

  const handleSubmit = e => {
    e.preventDefault()
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
    <div></div>
    // <canvas show={isOpen} onHide={closeCart} placement="end">
    //   <div closeButton>
    //     <h2>Cart</h2>
    //   </div>
    //   <section>
    //     <div >
    //       {/* {cartItems.map(item => (
    //         <CartItem key={item.id} {...item} />
    //       ))}
    //       <div className="ms-auto fw-bold fs-5">
    //         Total{" "}
    //         {formatCurrency(
    //           cartItems.reduce((total, cartItem) => {
    //             const item = storeItems.find(i => i.id === cartItem.id)
    //             return total + (item?.price || 0) * cartItem.quantity
    //           }, 0)
    //         )}
    //       </div> */}
    //     </div>
    //     <button
    //       type="button"
    //       className="btn btn-success mt-5"
    //       onClick={handleSubmit}
    //     >
    //       Download PDF
    //     </button>
    //   </section>
    // </canvas>
  )
}
