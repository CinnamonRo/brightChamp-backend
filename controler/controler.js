const model = require("../model/model");
class StuControl {
  static showStu(req, res) {
    model.viewAll((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  }
}
module.exports = StuControl;
