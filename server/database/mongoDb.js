const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/startercode")
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log("there was some error", err);
    });
}

module.exports = connect;
