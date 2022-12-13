import { pool, connection } from "../db.js";

// Task
export const getOrderTables = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM `ordertable` where StateId = 1"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOrderTable = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM `ordertable` WHERE OrderID = ?",
      [req.params.id]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Order not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getOrderTablePrepare = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT ordertable.OrderID, ordertable.TableNumber, ordertable.Date, product.Name, product.Description, product.Price, detail.Quantity FROM ordertable, detail, product WHERE ordertable.StateID = 3 and ordertable.OrderID = detail.OrderID and detail.ProductID = product.ProductID;"
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Order not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getOrderTableDeliver = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT ordertable.OrderID, ordertable.TableNumber, ordertable.Date, product.Name, product.Description, product.Price, detail.Quantity FROM ordertable, detail, product WHERE ordertable.StateID = 4 and ordertable.OrderID = detail.OrderID and detail.ProductID = product.ProductID;"
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Order not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getOrderTablePay = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT ordertable.OrderID, ordertable.TableNumber, ordertable.Date, product.Name, product.Description, product.Price, detail.Quantity FROM ordertable, detail, product WHERE ordertable.StateID = 5 and ordertable.OrderID = detail.OrderID and detail.ProductID = product.ProductID;"
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Order not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createOrderTable = async (req, res) => {
  try {
    await connection.beginTransaction();
    const { TableNumber, Date } = req.body;

    const [result] = await pool.query(
      "INSERT INTO `ordertable`(`OrderID`, `TableNumber`, `StateID`, `Date`) VALUES (?, ?, ?, ?);",
      [null, TableNumber, 1, Date]
    );

    await connection.commit();
    res.json({
      id: result.insertId,
      TableNumber,
      Date,
    });
  } catch (error) {
    await connection.rollback();
    return res.status(500).json({ message: error.message });
  }
};

export const updateOrderTable = async (req, res) => {
  try {
    await connection.beginTransaction();
    const result = await pool.query(
      "UPDATE ordertable SET ? WHERE OrderID = ?",
      [req.body, req.params.id]
    );
    await connection.commit();
    res.json(result);
  } catch (error) {
    await connection.rollback();
    return res.status(500).json({ message: error.message });
  }
};

export const deleteOrderTable = async (req, res) => {
  try {
    await connection.beginTransaction();
    const [result] = await pool.query(
      "UPDATE ordertable set StateId = 2 WHERE OrderID = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      await connection.rollback();
      return res.status(404).json({ message: "Order not found" });
    }
    await connection.commit();
    return res.sendStatus(204);
  } catch (error) {
    await connection.rollback();
    return res.status(500).json({ message: error.message });
  }
};
