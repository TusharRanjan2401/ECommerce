const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  brainTreePaymentsController,
} = require("../controllers/productController");
const formidable = require("express-formidable");
const router = express.Router();

//routes

//create products
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get products
router.get("/get-product", getProductController);

//get single products
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//Update products
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//searcxh product
router.get("/search/:keyword", searchProductController);

//category product
router.get('/product-category/:slug', productCategoryController);

//payments route
//token
router.get('/braintree/token', braintreeTokenController);

//paymenyts
router.post('/braintree/payment', requireSignIn, brainTreePaymentsController)

module.exports = router;
