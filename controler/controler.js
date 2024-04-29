const Model = require("../model/model");
const { param } = require("../routes");
class StuControl {
  static showStu(req, res) {
    Model.viewAll((err, data) => {
      if (err) {
        res.send(err);
      } else {
        // res.send(dataStudent);
        // console.log(dataStudent, "ini data di controler");
        res.render("student", { data });
      }
    });
  }
  static showForm(req, res) {
    res.render("addStudent");
  }
  static addStu(req, res) {
    const { first_name, last_name, email, gender, birth_date } = req.body;
    const objStudent = { first_name, last_name, email, gender, birth_date };

    // const objStudent = {
    //   first_name: req.body.first_name,
    //   last_name: req.body.last_name,
    //   email: req.body.email,
    //   gender: req.body.gender,
    //   birth_date: req.body.birth_date,
    // };
    // console.log(objStudent);
    Model.addStu(objStudent, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect("/student");
        // console.log(data, "ini data di c");
      }
    });
  }

  static stuDelete(req, res) {
    let id = parseInt(req.params.id);
    // console.log(id, "id ");
    Model.delete(id, (err, data) => {
      if (err) {
        res.send(err, null);
      } else {
        res.redirect("/student");
      }
    });
  }

  //Number(string)

  static stuEdit(req, res) {
    let id = +req.params.id;
    console.log(id, "dari edit");
    Model.editForm(id, (err, student) => {
      if (err) {
        res.send(err);
      } else {
        res.render("updateStudent", { student });
      }
    });
  }

  // params ambil dari alamat , body  = fornm, file = file
  static stuEditSave(req, res) {
    const studentEditSave = {
      // id: +req.params.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
    };
    console.log(studentEditSave, "dari controller");
  }
}
module.exports = StuControl;
