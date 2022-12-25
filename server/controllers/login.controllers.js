import { pool } from "../db.js";

export const getLogin = async (req, res) => {
  try {

    const [result] = await pool.query(
      "SELECT `LoginID`, `email`, `password`, `privilegesID` FROM `login` WHERE `email` = ? AND `password` = ? AND StateID = 1",
      [req.params.email, req.params.password,]
    );
    res.json(result[0]);
  } catch (error) {
    return res.status(404).json({ message: "user not found" });
  }
};