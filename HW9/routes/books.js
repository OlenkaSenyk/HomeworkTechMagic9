const express = require("express");
const booksMdware = require("../middlewares/books.mdware");
const booksController = require("../controllers/books.controller");

const router = express.Router();

router.get("/", booksController.getBooks);

router.get("/:idB", booksMdware.checkBookExists, booksController.getOneBook);

router.get(
  "/:idB/reviews",
  booksMdware.checkBookExists,
  booksController.getBooksReviews
);

router.post(
  "/",
  booksMdware.checkBookBody,
  booksMdware.checkReviewNull,
  booksController.postBook
);

router.post(
  "/:idB/reviews",
  booksMdware.checkBookExists,
  booksMdware.checkReviewBody,
  booksController.postReview
);

router.put("/:idB", booksMdware.checkBookExists, booksController.putBookTitle);

router.delete(
  "/:idB/reviews/:idR",
  booksMdware.checkBookExists,
  booksMdware.checkReviewExists,
  booksController.deleteReview
);

module.exports.router = router;
