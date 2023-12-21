const router = require("express").Router();
const StuControler = require("../controler/controler");

router.get("/", StuControler);

module.exports = router;
