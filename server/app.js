const express = require("express");
const cors = require("cors");
require("./db/connect");

const post = require("./routers/post");
const home = require("./routers/home");

const app = express();

app.use(express.json({ limit: 10000000, extended: true }));
app.use(express.urlencoded({ limit: 10000000, extended: true }));
app.use(cors());

app.use("/", home);
app.use("/post", post);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`connected to ${port}`);
});
