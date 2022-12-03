const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());

//instancias de routes
const productsRouter = require("./routes/productRoutes");


//Definicion de routes
app.use("/product", productsRouter);

app.listen(3000);
