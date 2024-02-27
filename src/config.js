const mongoose = require("mongoose");

const mondbUrl = "mongodb+srv://admin:1234@cluster0.laxyjhy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mondbUrl)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const collection = mongoose.model("users", LoginSchema);

module.exports = collection;
