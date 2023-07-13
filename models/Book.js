const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    imgUrl:{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { collection: "Books" ,versionKey: false }
);

const Books = model("Books", bookSchema);

module.exports = Books
