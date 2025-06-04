const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");
const orderController = require("../controllers/orderController");

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);

router.get("/cart/:userId", cartController.getCart);
router.post("/cart/:userId", cartController.addToCart);
router.put("/cart/:userId", cartController.updateCartItem);
router.delete("/cart/:userId/:itemId", cartController.removeCartItem);

router.post("/orders", orderController.placeOrder);

module.exports = router;
