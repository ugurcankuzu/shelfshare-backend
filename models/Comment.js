const { Schema, model, default: mongoose } = require("mongoose");

const commentSchema = new Schema(
  {
    ownerId: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    shelfId: {
      type: mongoose.Types.ObjectId,
      ref:"Shelves",
      required: true,
    },
    commentContent:{
        type: String,
        required: true
    }
  },
  { collection: "Comments", versionKey: false }
);

const Comments = model("Comments", commentSchema);

module.exports = Comments;
