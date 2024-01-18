const Model = require("../model/model");
class StuControl {
  static showStu(req, res) {
    Model.viewAll((err, dataStudent) => {
      if (err) {
        res.send(err);
      } else {
        // res.send(dataStudent);
        // console.log(dataStudent, "ini data di controler");
        res.render("student", { dataStudent });
      }
    });
  }
  static showForm(req, res) {
    res.render("form");
  }
  static addStu(req, res) {
    // const { first_name, last_name, email, gender, birth_date } = req.body;
    // const objStudent = { first_name, last_name, email, gender, birth_date };
    const objStudent = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
    };
    // console.log(objStudent);
    Model.addStu(objStudent, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect("/student");
      }
    });
  }
}
module.exports = StuControl;
