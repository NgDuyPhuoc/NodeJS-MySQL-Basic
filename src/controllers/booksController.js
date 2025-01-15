var Books = require("../models/booksModel");
var path = require("path");

exports.get_list = function (req, res) {
  Books.get_all(function (data) {
    res.send({ result: data });
  });
};

exports.detail = function (req, res) {
  var data = Books.getById(req.params.id);
  res.send({ result: data });
};

exports.add_book = function (req, res) {
  var data = req.body;
  Books.create(data, function (response) {
    res.send({ result: response });
  });
};

exports.remove_books = function (req, res) {
  var id = req.params.id;
  Books.remove(id, function (response) {
    res.send({ result: response });
  });
};
exports.update_books = function (req, res) {
  var data = req.body;
  Books.update(data, function (response) {
    res.send({ result: response });
  });
};
