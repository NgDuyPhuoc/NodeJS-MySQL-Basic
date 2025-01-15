const db = require("../common/connects");

const Books = function () {
  this.id = books.id;
  this.name = books.name;
  this.email = books.email;
  this.user = books.user;
};

Books.get_all = function (result) {
  db.query("SELECT * FROM books", function (err, data) {
    if (err) {
      console.log("Lỗi khi truy vấn dữ liệu:", err);
      result(err, null);
      return;
    }
    result(null, data); // Trả về danh sách sách từ cơ sở dữ liệu
  });
};

Books.getById = function (id) {
  var data = { id: 1, name: "Harry Potter" };
  return data;
};

Books.create = function (data, result) {
  return data;
};

Books.remove = function (id, result) {
  result("Xoa books co id" + id + " thanh cong");
};

Books.update = function (data, result) {
  result("Update books thanh cong");
};

module.exports = Books;
