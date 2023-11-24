const router = require("express").Router();
// const studentRoute = require("./studentDashBoard");

router.get("/", (_req, res) => {
  res.send("ini router a");
});

// router.get("/student", (req, res) => {
//   res.send("ini student");
// });

// router.use("/student", studentRoute);

module.export = router;
