exports.profile = (req, res) => {
  res.json(req.user);
};