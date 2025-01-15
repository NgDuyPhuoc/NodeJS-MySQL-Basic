module.exports = function (router) {
  var booksController = require("../controllers/booksController");

  router.get("/books/list", booksController.get_list);
  router.get("/books/detail/:id", booksController.detail);
  router.post("/books/add", booksController.add_book);
  router.delete("/books/delete/:id", booksController.remove_books);
  router.put("/books/update/:id", booksController.update_books);
};
