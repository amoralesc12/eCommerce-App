//conexion a  MYSQL
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Root2497!",
    database: "ecomm",
  },
});
//revisar
async function getProduct_ecomm(limit, offset) {
  const products = JSON.parse(
    JSON.stringify(
      await knex.select().table("products").limit(limit).offset(offset)
    )
  );
  const productsReturn = products.slice();
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
  }
  return productsReturn;
}

async function getP_Search(name_CB) {
  const products = JSON.parse(
    JSON.stringify(
      await knex
        .select(
          "products.id as ID",
          "products.price as PRICE",
          "products.name as PRODUCT",
          "brands.name as BRAND",
          "categories.name as CATEGORY"
        )
        .table("products")
        .innerJoin("brands", "products.brand_id", "=", "brands.id")
        .innerJoin("categories", "categories.id", "=", "products.category_id")
        .where("products.name", "like", "%" + name_CB + "%")
    )
  );

  return products;
}

module.exports = {
  getProduct_ecomm,
  getP_Search,
};
//TODO: GET PRODUCT/SEARCH