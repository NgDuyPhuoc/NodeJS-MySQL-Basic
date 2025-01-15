var express = require("express");
var app = express();

/**
 * Cấu hình body-parser
 */

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
 *Các Routers
 */
require("./src/routers/homeRouter")(app);
require("./src/routers/booksRouter")(app);

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
