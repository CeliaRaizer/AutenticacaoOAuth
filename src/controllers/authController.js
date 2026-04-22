const { generateToken } = require("../services/jwtService");

exports.googleCallback = (req, res) => {
  const token = generateToken(req.user);

  res.redirect(`/dashboard.html?token=${token}`);
};