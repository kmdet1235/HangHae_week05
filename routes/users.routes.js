const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

const UsersContoller = require("../controllers/users.controller");
const usersController = new UsersContoller();

router.post("/signup", usersController.signupUser);
router.post("/login", usersController.loginUser);

module.exports = router;
