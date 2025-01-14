var path = require("path");

exports.home = function (req, res) {
  res.sendFile(path.join(__dirname, "../../index.html"));
};
exports.about = function (req, res) {
  res.send("Hello home about page");
};
