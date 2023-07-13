const { default: mongoose } = require("mongoose");
const Shelves = require("../models/Shelve");
const Users = require("../models/User");
const Error = require("../error");

async function getUserInfo(req, res) {
  try {
    const { _id } = req.user;
    const result = await Users.findOne({
      _id: new mongoose.Types.ObjectId(_id),
    }).populate("shelves");
    if (result) {
      console.log(result)
      return res.status(200).send({
        data: {
          email: result.email,
          shelves: result.shelves
        },
      });
    } else {
      return res.status(400).send(Error.GatheringUserInfoError);
    }
  } catch (e) {
    return res.status(400).send(Error.GatheringUserInfoError);
  }
}

module.exports = getUserInfo;
