const Books = function () {
  this.id = books.id;
  this.name = books.name;
};

Books.get_all = function (result) {
  var data = [
    { id: 1, name: "Harry Potter" },
    { id: 2, name: "Lord of the Rings" },
  ];
  result(data);
};

Books.getById = function (id) {
  var data = { id: 1, name: "Harry Potter" };
  return data;
};

module.exports = Books;
