const router = require("express").Router();
const passport = require("passport");
const authController = require("../controllers/authController");

router.get("/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/"
  }),
  authController.googleCallback
);

module.exports = router;