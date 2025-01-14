module.exports = function (router) {
  var booksController = require("../controllers/booksController");

  router.get("/books/list", booksController.get_list);
  router.get("/books/detail/:id", booksController.detail);
};
