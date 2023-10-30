const express = require("express");
var cors = require("cors");
const { prisma } = require("./prisma/index");

require("dotenv").config();

const app = express();
const port = process.env.PORT;
app.use(cors());
//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todoRouter = require("./Routes/todoRoutes");

app.use("/api", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Todo Back-End listening on port http://localhost:${port}`);
});
