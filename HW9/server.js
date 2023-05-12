const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const booksRouter = require("./routes/books");

const app = express();
const port = 3000;

app.use(compression());
app.use(bodyParser.json());

const errorHandler = (req, res, next) => {
  res.status(404).send("Not found");
};

app.use("/books", booksRouter.router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on port - ${port}`);
});
