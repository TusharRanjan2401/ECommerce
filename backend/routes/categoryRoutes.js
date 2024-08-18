const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  createCategoryController,
  updateCategoryController,
  getcategoryController,
  singleCategoryController,
  deletecategoryController,
} = require("../controllers/categoryController");

const router = express.Router();

//route

//create-cateegory
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getAll category
router.get("/get-category", getcategoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete categpry
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deletecategoryController
);

module.exports = router;
