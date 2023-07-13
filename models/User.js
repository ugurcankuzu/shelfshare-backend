const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  shelves: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Shelves"
    }
  ],
},{collection: "Users",versionKey: false});

const Users = model("Users", userSchema);

module.exports = Users
