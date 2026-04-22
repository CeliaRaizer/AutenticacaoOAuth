const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const userController = require("../controllers/userController");

router.get("/profile", auth, userController.profile);

module.exports = router;