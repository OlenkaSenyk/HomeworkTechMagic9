const booksDb = require("../dataBase/books.db");

module.exports = {
  getBooks: (req, res, next) => {
    try {
      res.json(booksDb.books);
    } catch (e) {
      next(e);
    }
  },

  getOneBook: (req, res, next) => {
    try {
      const book = req.book;
      res.json(book);
    } catch (e) {
      next(e);
    }
  },

  getBooksReviews: (req, res, next) => {
    try {
      const book = req.book;
      res.json(book.reviews);
    } catch (e) {
      next(e);
    }
  },

  postBook: (req, res, next) => {
    try {
      const book = req.body;
      booksDb.books.push(book);
      res.send("book created");
    } catch (e) {
      next(e);
    }
  },

  postReview: (req, res, next) => {
    try {
      const book = req.book;
      const review = req.body;
      book.reviews.push(review);
      res.json(book);
    } catch (e) {
      next(e);
    }
  },

  putBookTitle: (req, res, next) => {
    try {
      const book = req.book;
      book.title = req.body.title;
      res.json(book);
    } catch (e) {
      next(e);
    }
  },

  deleteReview: (req, res, next) => {
    try {
      const book = req.book;
      const review = req.review;
      book.reviews = book.reviews.filter((r) => r.id !== review.id);
      res.json(book);
    } catch (e) {
      next(e);
    }
  },
};
