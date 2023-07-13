const { default: mongoose } = require("mongoose");
const Users = require("../models/User");
const Comments = require("../models/Comment");
const Shelves = require("../models/Shelve");
const Error = require("../error");
async function getComments(req, res) {
  try {
    const { shelfId } = req.query;
    const shelf = await Shelves.findById(shelfId).populate({
        path: "comments",
        populate: {
            path: "ownerId",
            select: "email"
        }
    });
    if(shelf){
        res.status(200).send(shelf.comments)
    }else{
        res.status(400).send(Error.ShelfSearchError);
    }
  } catch (e) {
    res.status(400).send(Error.GatheringCommentsError)
  }
}

module.exports = getComments;
