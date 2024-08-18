const express = require("express");
const {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} = require("../controllers/authController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

//Register - METHOD POST
router.post("/register", registerController);

//Login - METHOD POST
router.post("/login", loginController);

//forgot password - METHOD POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth of user
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route auth of admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put('/profile', requireSignIn, updateProfileController)

//orders
router.get('/orders', requireSignIn, getOrdersController)

//All orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController)

//order status update
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController)

module.exports = router;
