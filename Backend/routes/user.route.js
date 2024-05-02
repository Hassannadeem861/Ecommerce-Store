const authController = require("../controllers/user-controller");
const {
  authMiddleware,
  adminMiddleWare,
} = require("../middle_ware/auth-middle-ware");
// const authValidation = require("../validation/auth-validation");
const router = require("express").Router();

// Create a new registers
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forget-password", authController.forgetPassword);

router.get(
  "/test",
  authMiddleware,
  adminMiddleWare,
  authController.protectController
);

// router.get("/user", authMiddleware, authController.userLogic);

// router.get("/user", authMiddleware, authController.user);

module.exports = router;
