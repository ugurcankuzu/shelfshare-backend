const { default: mongoose } = require("mongoose");
const Shelves = require("../models/Shelve");
const Users = require("../models/User");
const Error = require("../error");

async function createShelf(req, res) {
  try {
    const user = await Users.findById(req.user._id);
    if (user) {
      const { shelfName } = req.body;
      const newShelf = new Shelves({
        ownerId: req.user._id,
        shelfName: shelfName,
        books: [],
        comments: [],
      });
      await newShelf.save();
      user.shelves.push(newShelf._id);
      await user.save();
      return res.status(200).send({
        shelfId: newShelf._id,
      });
    }else{
      res.status(400).send(Error.GatheringUserInfoError)
    }
  } catch (e) {
    return res.status(400).send(Error.CreateShelfError);
  }
}

module.exports = createShelf;
