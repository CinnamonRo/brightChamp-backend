const express = require("express");
const app = express();
const port = 3010;
const router = require("./routes/index");

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.get("/about", (req, res) => {
//   res.send("Halaman about");
// });

// buat hubungin ke html
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
