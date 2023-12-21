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
        cb(err, null);
      } else {
        // string to arr
        data = JSON.parse;
        dataStudent = [];
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
        cb(null, data);
      }
    });
  }
}
module.exports = Student;
