const booksDb = require("../dataBase/books.db");

const checkBookBody = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).send("Id required");
  }
  const book = booksDb.books.find((b) => b.id === parseInt(req.body.id));
  if (book) {
    return res.status(400).send("Id has already exists");
  }
  if (!req.body.title) {
    return res.status(400).send("Title required");
  }
  next();
};

const checkReviewBody = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).send("Id required");
  }
  if (!req.body.comment) {
    return res.status(400).send("Comment required");
  }
  next();
};

const checkBookExists = (req, res, next) => {
  const book = booksDb.books.find((b) => b.id === parseInt(req.params.idB));
  if (!book) return res.status(404).send("Book not found");
  req.book = book;
  next();
};

const checkReviewExists = (req, res, next) => {
  const book = req.book;
  const review = book.reviews.find((b) => b.id === parseInt(req.params.idR));
  if (!review) return res.status(404).send("Review not found");
  req.review = review;
  next();
};

const checkReviewNull = (req, res, next) => {
  const book = req.body;
  if (!book.reviews) {
    book.reviews = [];
  }
  next();
};

module.exports = {
  checkBookBody,
  checkReviewBody,
  checkBookExists,
  checkReviewExists,
  checkReviewNull,
};
