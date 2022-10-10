const { Router } = require("express");
const router = Router();
var users = require("../users.json");

router.get("/", (req, res) => {
  res.json(users);
});

module.exports = router;