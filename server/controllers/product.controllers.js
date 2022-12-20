import { pool, connection } from "../db.js";

// Task
export const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT `ProductID`, `Name`, `Price`, `Description`, `DescriptionEnglish`, `CategoryID` FROM `product` WHERE StateID = 1");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT `ProductID`, `Name`, `Price`, `Description`, `DescriptionEnglish`, `CategoryID`, `StateID` FROM `product` WHERE StateID = 1 AND ProductID = ?;", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Product not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    await connection.beginTransaction();
    const { Name, Price, Description, DescriptionEnglish, CategoryID} = req.body;

    const [result] = await pool.query(
      "INSERT INTO `product`(`ProductID`, `Name`, `Price`, `Description`, `DescriptionEnglish`, `CategoryID`, `StateID`) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [null, Name, Price, Description, DescriptionEnglish, CategoryID, 1]
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

export const updateProduct = async (req, res) => {
  try {
    await connection.beginTransaction();
    const result = await pool.query("UPDATE product SET ? WHERE ProductID = ?", [
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

export const deleteProduct = async (req, res) => {
  try {
    await connection.beginTransaction();
    const [result] = await pool.query(
      "UPDATE product set StateId = 2 WHERE ProductID = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      await connection.rollback();
      return res.status(404).json({ message: "Product not found" });
    }
    await connection.commit();
    return res.sendStatus(204);
  } catch (error) {
    await connection.rollback();
    return res.status(500).json({ message: error.message });
  }
};
