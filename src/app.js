const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
// const cors = require("./middlewares/cors");
const mongoose = require("mongoose");
const readerRouter = require("./routes/readers");
const bookRouter = require("./routes/books");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/library",
} = process.env;

try {
  mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("[MONGO_CONNECTION]", error);
}

const app = express();

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(readerRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
