const { default: mongoose } = require("mongoose");
const Books = require("../models/Book");
const Shelves = require("../models/Shelve");
const Error = require("../error")
async function createBook(req, res) {
  try {
    console.log(req.body)
    const shelf = await Shelves.findById(req.body.shelfId);
    if (shelf) {
      const book = new Books({
        imgUrl: req.file.path,
        name: req.body.name,
        author: req.body.author,
      });
      await book.save();
      shelf.books.push(book._id);
      await shelf.save();
      return res
        .status(200)
        .send({ message: "Book created and successfully saved" ,book: book});
    }else{
        return res.status(400).send(Error.ShelfSearchError)
    }
  } catch (e) {
    return res.status(400).send(Error.CreateBookError)
  }
}

module.exports = createBook