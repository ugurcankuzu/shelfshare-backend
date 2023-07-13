const { default: mongoose } = require("mongoose");
const Shelves = require("../models/Shelve");
const Error = require("../error");
const Books = require("../models/Book");
async function getBooksInShelf(req, res) {
  try {
    const { _id } = req.query;
    const result = await Shelves.findOne({
      _id: new mongoose.Types.ObjectId(_id),
    }).populate("books");
    console.log("Books Array Result:", result);
    if (result) {
      res.status(200).send({books: result.books});
    } else {
      res.status(400).send(Error.GatheringBooksError);
    }
  } catch (e) {
    res.status(400).send(Error.GatheringBooksError);
  }
}

module.exports = getBooksInShelf;
