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

