const { Schema, model, default: mongoose } = require("mongoose");

const shelfSchema = new Schema(
  {
    ownerId: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    shelfName: {
      type: String,
      required: true,
    },
    books: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Books",
      },
    ],
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comments",
      },
    ],
  },
  { collection: "Shelves", versionKey: false }
);

const Shelves = model("Shelves", shelfSchema);

module.exports = Shelves;
