const productService = require("../services/products");

async function getP(req, res) {
  const { limit, offset } = req.query;
  const products = await productService.getProduct(limit, offset);
  res.send(products);
}

async function getSearch(req, res) {
  const { name } = req.query.name;
  const product_s = await productService.getPS(name);
  res.send(product_s);
}

module.exports = {
  getP,
  getSearch,
};
