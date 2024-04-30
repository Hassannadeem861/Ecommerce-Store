const express = require("express");
const adminControllers = require("../controllers/product-controller");
const {
  authMiddleware,
  adminMiddleWare,
} = require("../middle_ware/auth-middle-ware");
const router = express.Router();

// Create a new product
// router.get("/getallproducts", adminControllers.getAllProducts);
router.post("/create-product", adminControllers.createProduct);
router.get("/getallproducts", adminControllers.findAll);
router.get("/getsingleproduct/:id", adminControllers.getSingleProduct);
router.put("/updatesingleproduct/:id", adminControllers.updateSingleProduct);
router.delete("/deletesingleproduct/:id", adminControllers.deleteProductById);
router.delete("/deleteallproducts", adminControllers.deleteAllProducts);

module.exports = router;
