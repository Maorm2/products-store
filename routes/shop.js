const express = require("express");

const shopController = require("../controllers/shop");

const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/products/:productId", isAuth, shopController.getProduct);

router.get("/products", isAuth, shopController.getProducts);

router.get("/", isAuth, shopController.getIndex);

router.get("/cart", isAuth, shopController.getCart);

router.post("/cart", isAuth, shopController.postCart);

router.post("/cart-delete-item", isAuth, shopController.postCartDeleteProduct);

router.get('/checkout', isAuth, shopController.getCheckout);

router.post("/create-order", isAuth, shopController.postOrder);

router.get("/orders", isAuth, shopController.getOrders);

router.get('/orders/:orderId', isAuth, shopController.getInvoice);

module.exports = router;
