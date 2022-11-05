const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/productControllers");

//enlace router

router.get("/", productControllers.getP);

//get product/search

module.exports = router;
