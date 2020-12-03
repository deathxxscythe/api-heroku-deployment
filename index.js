const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
console.log("web 36 rocks");
console.log(__dirname);
console.log(process.env.USER);
console.log(process.env.PORT);

const app = express();
app.use(cors());
app.use("/api/*", (_, res) => {
  res.status(200).json({ message: "Its Working" });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
