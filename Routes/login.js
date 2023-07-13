const Error = require("../error");
const generateJwt = require("../lib/generateJwt");
const Users = require("../models/User");
const bcrypt = require("bcrypt");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });

    if (!user) {
      res.status(400).send(Error.LoginCreditentalsNotFound);
    } else {
      const passwordIsMatch = await bcrypt.compare(password,user.password);

      if (passwordIsMatch) {
        const token = generateJwt({
          _id: user._id,
          email: user.email,
          shelves: user.shelves,
        });
        return res.status(200).send({ token: token });
      } else {
        return res.status(400).send(Error.LoginCreditentalsNotFound);
      }
    }
  } catch (e) {
    return res.status(500).send(Error.LoginError);
  }
}

module.exports = login