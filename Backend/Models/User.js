const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  Username: {
    type: String,
    unique: true,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
  },
  phone: {
    type: Number,
    require: true,
    unique: true,
  },
  email: {
    type: String,
  },
  dob: {
    type: Date,
    require: true,
  },
  joined: {
    type: Date,
  },
  password: {
    type: String,
    require: true,
  },
});
const User = mongoose.model("users", UserSchema);
User.createIndexes();
module.exports = User;
