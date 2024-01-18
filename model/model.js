const fs = require("fs");

class Model {
  constructor(id, first_name, last_name, email, gender, birth_date) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
    this.birth_date = birth_date;
  }
  //   static Model(req, res) {}
}
class Student {
  //callback = (err, data)
  static viewAll(callback) {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        // string to arr
        data = JSON.parse(data);
        const dataStudent = [];
        // console.log(data, "ini data");
        for (let i = 0; i < data.length; i++) {
          dataStudent.push(
            new Model(
              data[i].id,
              data[i].first_name,
              data[i].last_name,
              data[i].email,
              data[i].gender,
              data[i].birth_date
            )
          );
        }
        callback(null, dataStudent);
      }
    });
  }
  static saveData(data, cb) {
    fs.writeFile("./data,json", JSON.stringify(data, null, 2), (err) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, "data berhasil dimasukkan");
      }
    });
  }

  static addStu(objStudent, cb) {
    Student.viewAll((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        let id;
        if (id === 0) {
          id = 1;
        } else {
          id = data[data.length - 1].id + 1;
        }
        objStudent = new Student(
          id,
          objStudent.first_name,
          objStudent.last_name,
          objStudent.email,
          objStudent.gender,
          objStudent.birth_date
        );
        data.push(objStudent);
        Student.saveData(data, (err, data) => {
          if (err) {
            cb(err, null);
          } else {
            cb(null, data);
          }
        });
      }
    });
  }
}
module.exports = Student;
