const router = require("express").Router();
const studentRoute = require("./studentDashBoard");

router.get("/", studentRoute);

router.use("/student", studentRoute);

router.get("/subjects", (req, res) => {
  res.send("ini router subject");
});
// router.get("/student", (req, res) => {
//   res.send("ini student");
// });

// router.use("/student", studentRoute);

module.exports = router;
