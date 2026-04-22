const jwt = require("jsonwebtoken");
const db = require("../config/database");

module.exports = async (req, res, next) => {

  const token = req.headers.authorization;

  if (!token)
    return res.status(401).json({ erro: "Token ausente" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const [rows] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [decoded.id]
    );

    req.user = rows[0];

    next();

  } catch {
    res.status(401).json({ erro: "Token inválido" });
  }
};