var express = require("express");
var router = express.Router();
const databaseSync = require("../controllers/database-sync");
const fetchUsers = require("../controllers/fetch-users");
const updateUser = require("../controllers/update-user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/users/sync-db", databaseSync);

router.get("/users/get-info", fetchUsers);

router.put("/users/update", updateUser);

module.exports = router;
