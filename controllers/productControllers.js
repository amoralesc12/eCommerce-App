const productService = require("../services/products");

async function getP(req, res) {
  const { limit, offset } = req.query;
  const products = await productService.getProduct(limit, offset);
  res.send(products);
}

async function getProductS(req, res) {
  const { name } = req.query;
  const name_search = await productService.getP_Search(name);
  res.send(name_search);
}

module.exports = {
  getP,
  getProductS,
};