const jwt = require("jsonwebtoken");
const Error = require("../error");

function jwtVerification(req, res, next) {
  const { authorization } = req.headers;

  if (authorization) {
    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(400).send(Error.TokenVerificationError);
      }else{
        req.user = user;
        next()
      }
    });
  }else{
    return res.status(400).send(Error.TokenVerificationError);
  }
}

module.exports = jwtVerification