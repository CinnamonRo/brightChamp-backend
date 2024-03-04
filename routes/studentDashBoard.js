const router = require("express").Router();
const StuControler = require("../controler/controler");

router.get("/", StuControler.showStu);
router.get("/add", StuControler.showForm);

router.post("/add", StuControler.addStu);

//delete
router.get("/:id/delete", StuControler.stuDelete);

//buat edit
router.get("/:id/edit", StuControler.stuEdit);

//save  post buat save
router.post("/:id/edit", StuControler.stuEditSave);
module.exports = router;
