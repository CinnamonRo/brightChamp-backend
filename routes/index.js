const router = require("express").Router();
const studentRoute = require("./studentDashBoard");

router.get("/", (req, res) => {
  res.send("ini router a");
});

router.use("/student", studentRoute);
// router.get("/student", (req, res) => {
//   res.send("ini student");
// });

// router.use("/student", studentRoute);

module.exports = router;
