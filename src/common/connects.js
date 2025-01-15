const mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "25082006",
  database: "demo-node-api",
});

connection.connect(function (err) {
  if (err) {
    console.log("Kết nối CSDL không thành công:", err);
    return;
  }
  console.log("Kết nối CSDL thành công");
});

module.exports = connection;
