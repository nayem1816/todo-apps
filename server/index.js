const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./app");

const URI = process.env.DATABASE;
mongoose.set("strictQuery", false);
mongoose.connect(URI, (err) => {
  if (err) {
    console.log("Error in connecting to database......");
    console.log(err);
  } else {
    console.log("Database connected successful");
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
