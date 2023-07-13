require("dotenv").config();
const express = require("express");
const routes = require("./router")
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDatabase = require("./db");

const app = express();
app.use(bodyParser.json());
app.use(cors())

connectDatabase();

app.use("/api",routes);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
