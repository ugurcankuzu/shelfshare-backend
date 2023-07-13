const { default: mongoose } = require("mongoose");
const Shelves = require("../models/Shelve");
const Error = require("../error");
const Books = require("../models/Book");

async function getShelf(req, res) {
  try {
    const { _id } = req.query;
    const result = await Shelves.findOne({
      _id: new mongoose.Types.ObjectId(_id),
    }).populate("books");
    if (result) {
      return res.status(200).send({
        shelfName: result.shelfName,
        ownerId: result.ownerId,
        books: result.books,
        previewMode: req.previewMode
      });
    } else {
      return res.status(400).send(Error.GatheringBooksError);
    }
  } catch (e) {
    return res.status(400).send(Error.GatheringBooksError);
  }
}

module.exports = getShelf;
