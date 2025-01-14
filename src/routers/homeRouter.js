module.exports = function (router) {
  var homeController = require("../controllers/homeController");

  router.get("/", homeController.home);
  router.get("/about", homeController.about);
};
