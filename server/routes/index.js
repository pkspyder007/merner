const router = require("express").Router();

const HomeController = require("../controllers/index");

router.get("/", HomeController.home);

module.exports = router;
