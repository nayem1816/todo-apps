const express = require("express");
const cors = require("cors");
// const ProductRoute = require("./routes/Product.route");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working");
});

// app.use("/api/v1/product", ProductRoute);

module.exports = app;
