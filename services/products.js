//conexion a  MYSQL
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.HOST,
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
});
//revisar
async function getProduct(limit, offset) {
  const products = JSON.parse(
    JSON.stringify(
      await knex.select().table("products").limit(limit).offset(offset)
    )
  );

  return products;
}

async function getP_S(name_CB) {
  const product = JSON.parse(
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
        .whereLike("products.name", "%" + name_CB + "%")
    )
  );

  return product;
}

module.exports = {
  getProduct,
  getP_S,
};
//TODO: GET PRODUCT/SEARCH
