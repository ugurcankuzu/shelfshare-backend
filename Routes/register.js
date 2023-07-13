const { default: mongoose } = require("mongoose");
const Users = require("../models/User");
const Error = require("../error");
const encryptPassword = require("../lib/encryptPassword");

async function register(req, res) {
  try {
    const { email, password } = req.body;
    const hashedPassword = await encryptPassword(password);
    const userRegistration = await new Users({
      _id: new mongoose.Types.ObjectId(),
      email: email,
      password: hashedPassword,
      shelves: [],
    });
    await userRegistration.save();
    return res.status(200).send({ message: "Successfully registered." });
  } catch (e) {
    return res.status(500).send(Error.RegistrationError);
  }
}

module.exports = register;
