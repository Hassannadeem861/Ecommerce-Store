const express = require("express");
const {
  authMiddleware,
  adminMiddleWare,
} = require("../middle_ware/auth-middle-ware");
const categoryController = require('../controllers/category-controller')
const router = express.Router();

// CREATE ROUTE
router.route("/create-category").post(authMiddleware, adminMiddleWare, categoryController.createCategory);
// GET ALL ROUTE
router.route("/get-all-category").get(authMiddleware, adminMiddleWare, categoryController.getAllCategory);
// GET SINGLE ROUTE
router.route("/single-get-category/:id").get(authMiddleware, adminMiddleWare, categoryController.getSingleCategory);
// UPDATE SINGLE ROUTE
router.route("/single-update-category/:id").put(authMiddleware, adminMiddleWare, categoryController.updateSingleCategory);
// DELETE SINGLE ROUTE 
router.route("/single-delete-category/:id").delete(authMiddleware, adminMiddleWare, categoryController.singleDeleteCategory);
// DELETE ALL ROUTE
router.route("/delete-all-category").delete(authMiddleware, adminMiddleWare, categoryController.deleteAllCategory);

module.exports = router;
