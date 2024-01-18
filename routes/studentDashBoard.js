const router = require("express").Router();
const StuControler = require("../controler/controler");

router.get("/", StuControler.showStu);
router.get("/add", StuControler.showForm);

router.post("/add", StuControler.addStu);
module.exports = router;
