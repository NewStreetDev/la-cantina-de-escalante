import { Router } from "express";
import {
  createDetail,
  deleteDetail,
  getDetail,
  getDetails,
  updateDetail,
} from "../controllers/detail.controllers.js";
import { getLogin } from "../controllers/login.controllers.js";


import {
  getOrderTables,
  getOrderTable,
  createOrderTable,
  updateOrderTable,
  deleteOrderTable,
  getOrderTablePrepare,
  getOrderTableDeliver,
  getOrderTablePay,
  getOrderTableReports,
} from "../controllers/orderTable.controllers.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controllers.js";

const router = Router();


//Order
router.get("/OrderTable", getOrderTables);
router.get("/OrderTable/:id", getOrderTable);
router.get("/OrderTablePrepare", getOrderTablePrepare);
router.get("/OrderTableDeliver", getOrderTableDeliver);
router.get("/OrderTablePay", getOrderTablePay);
router.post("/OrderTable", createOrderTable);
router.put("/OrderTable/:id", updateOrderTable);
router.delete("/OrderTable/:id", deleteOrderTable);
router.get("/OrderTable/:initialDate/:finalDate", getOrderTableReports);


// login
router.get("/Login/:email/:password", getLogin);

//Product
router.get("/Product", getProducts);
router.get("/Product/:id", getProduct);
router.post("/Product", createProduct);
router.put("/Product/:id", updateProduct);
router.delete("/Product/:id", deleteProduct);

//Detail
router.get("/DetailOrder/:orderId", getDetails);
router.get("/Detail/:id", getDetail);
router.post("/Detail", createDetail);
router.put("/Detail/:id", updateDetail);
router.delete("/Detail/:id", deleteDetail);

export default router;
