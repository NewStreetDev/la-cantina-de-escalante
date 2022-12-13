import { pool, connection } from "../db.js";

// Task
export const getDetails = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT `DetailID`, `ProductID`, `Price`, `OrderID`, Quantity FROM `detail` WHERE StateID = 1 AND OrderID = ?",
    [req.body.orderId]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDetail = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT `DetailID`, `ProductID`, `Price`, `OrderID`, Quantity FROM `detail` WHERE StateID = 1 AND DetailID = ?;", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Detail not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDetail = async (req, res) => {
  try {
    await connection.beginTransaction();
    const { ProductID, Price, OrderID, Quantity} = req.body;

    const [result] = await pool.query(
      "INSERT INTO `detail`(`DetailID`, `ProductID`, `Price`, `StateID`, `OrderID`, Quantity) VALUES (?, ?, ?, ?, ?, ?)",
      [null, ProductID, Price, 1, OrderID, Quantity]
    );

    await connection.commit();
    res.json({
      id: result.insertId,
      Name, Price, Description, CategoryID
    });
  } catch (error) {
    await connection.rollback();
    return res.status(500).json({ message: error.message });
  }
};

export const updateDetail = async (req, res) => {
  try {
    await connection.beginTransaction();
    const result = await pool.query("UPDATE detail SET ? WHERE DetailID = ?", [
      req.body,
      req.params.id,
    ]);
    await connection.commit();
    res.json(result);
  } catch (error) {
    await connection.rollback();
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDetail = async (req, res) => {
  try {
    await connection.beginTransaction();
    const [result] = await pool.query(
      "UPDATE detail set StateId = 2 WHERE DetailID = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      await connection.rollback();
      return res.status(404).json({ message: "Detail not found" });
    }
    await connection.commit();
    return res.sendStatus(204);
  } catch (error) {
    await connection.rollback();
    return res.status(500).json({ message: error.message });
  }
};
