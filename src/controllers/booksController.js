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
