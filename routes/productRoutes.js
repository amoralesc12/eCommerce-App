const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/productControllers");

//enlace router

router.get("/", productControllers.getP);
router.get("/getP_Search", productControllers.getProductS);
//get product/search

module.exports = router;

